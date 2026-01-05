-- =====================================================
-- ÁNGELES EN ADOPCIÓN - Supabase Database Schema
-- =====================================================
-- Instructions:
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to SQL Editor
-- 3. Copy and paste this entire file
-- 4. Click "Run"
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- ENUMS
-- =====================================================

CREATE TYPE animal_status AS ENUM ('available', 'pending', 'adopted', 'fostered', 'medical_hold');
CREATE TYPE animal_gender AS ENUM ('male', 'female');
CREATE TYPE animal_size AS ENUM ('mini', 'small', 'medium', 'large');
CREATE TYPE animal_type AS ENUM ('dog', 'cat', 'other');
CREATE TYPE donation_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- =====================================================
-- ANIMALS TABLE
-- =====================================================

CREATE TABLE animals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Basic info
  name TEXT NOT NULL,
  type animal_type DEFAULT 'dog',
  breed TEXT,
  secondary_breed TEXT,
  is_mixed_breed BOOLEAN DEFAULT false,
  age_years INTEGER DEFAULT 0,
  age_months INTEGER DEFAULT 0,
  size animal_size NOT NULL,
  gender animal_gender NOT NULL,
  weight_kg DECIMAL(5,2),
  color TEXT,
  
  -- Status
  status animal_status DEFAULT 'available',
  is_urgent BOOLEAN DEFAULT false,
  
  -- Content
  description TEXT,
  story TEXT,
  temperament_tags TEXT[] DEFAULT '{}',
  
  -- Compatibility
  good_with_kids BOOLEAN,
  good_with_dogs BOOLEAN,
  good_with_cats BOOLEAN,
  
  -- Housing
  house_trained BOOLEAN DEFAULT false,
  apartment_friendly BOOLEAN DEFAULT false,
  needs_yard BOOLEAN DEFAULT false,
  
  -- Medical
  is_vaccinated BOOLEAN DEFAULT false,
  is_sterilized BOOLEAN DEFAULT false,
  is_dewormed BOOLEAN DEFAULT false,
  is_microchipped BOOLEAN DEFAULT false,
  special_needs TEXT,
  medical_notes TEXT,
  
  -- Images (URLs from Supabase Storage)
  primary_image_url TEXT,
  additional_images TEXT[] DEFAULT '{}',
  video_url TEXT,
  
  -- Tracking
  intake_date DATE,
  adoption_date DATE,
  location TEXT DEFAULT 'El Salto, Jalisco'
);

-- Create index for common queries
CREATE INDEX idx_animals_status ON animals(status);
CREATE INDEX idx_animals_type ON animals(type);
CREATE INDEX idx_animals_size ON animals(size);
CREATE INDEX idx_animals_gender ON animals(gender);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_animals_updated_at
    BEFORE UPDATE ON animals
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- DONATIONS TABLE
-- =====================================================

CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Payment info
  stripe_payment_intent_id TEXT,
  stripe_checkout_session_id TEXT,
  amount_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'mxn',
  status donation_status DEFAULT 'pending',
  is_recurring BOOLEAN DEFAULT false,
  
  -- Donor info (optional)
  donor_email TEXT,
  donor_name TEXT,
  
  -- For sponsorship/godparent program
  sponsored_animal_id UUID REFERENCES animals(id) ON DELETE SET NULL
);

-- Create index for queries
CREATE INDEX idx_donations_status ON donations(status);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Animals: Public read access (anyone can view available animals)
CREATE POLICY "Animals are viewable by everyone" ON animals
  FOR SELECT USING (true);

-- Animals: Only authenticated users with admin role can insert/update/delete
-- For MVP, you'll manage data directly in Supabase dashboard
CREATE POLICY "Only admins can modify animals" ON animals
  FOR ALL USING (false);

-- Donations: Only the server can manage donations (via service role)
CREATE POLICY "Donations managed by server only" ON donations
  FOR ALL USING (false);

-- =====================================================
-- STORAGE BUCKET FOR ANIMAL IMAGES
-- =====================================================
-- Run this in SQL Editor or create manually in Storage section:

INSERT INTO storage.buckets (id, name, public)
VALUES ('animals', 'animals', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policy: Public read access
CREATE POLICY "Public read access for animal images"
ON storage.objects FOR SELECT
USING (bucket_id = 'animals');

-- Storage policy: Only authenticated users can upload
-- For MVP, upload images directly through Supabase dashboard
CREATE POLICY "Authenticated upload for animal images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'animals');

-- =====================================================
-- SAMPLE DATA (Optional - for testing)
-- =====================================================

-- Uncomment to insert sample animals:
/*
INSERT INTO animals (name, type, breed, age_years, age_months, size, gender, status, is_urgent, description, story, temperament_tags, good_with_kids, good_with_dogs, good_with_cats, is_vaccinated, is_sterilized, is_dewormed)
VALUES 
  ('Romeo', 'dog', 'Mestizo', 2, 0, 'medium', 'male', 'available', false, 
   'Un perrito juguetón y cariñoso que adora estar con personas.',
   'Romeo llegó a nosotros hace 6 meses después de ser rescatado de la calle. A pesar de su pasado difícil, es un perrito increíblemente amoroso que adora jugar con otros perros.',
   ARRAY['Juguetón', 'Cariñoso', 'Sociable'],
   true, true, false, true, true, true),
   
  ('Luna', 'dog', 'Chihuahua', 1, 3, 'mini', 'female', 'available', true,
   'Una perrita dulce y tranquila, perfecta para departamento.',
   'Luna fue rescatada de una situación de maltrato. Ahora busca un hogar donde pueda sentirse segura y amada.',
   ARRAY['Tranquila', 'Dulce', 'Tímida'],
   true, true, true, true, true, true),
   
  ('Max', 'dog', 'Labrador Mix', 3, 6, 'large', 'male', 'available', false,
   'Un perro protector y leal, excelente compañero para familias activas.',
   'Max es un perro con mucha energía que necesita espacio para correr y jugar. Es muy protector con su familia.',
   ARRAY['Protector', 'Leal', 'Enérgico'],
   true, true, false, true, true, true);
*/

