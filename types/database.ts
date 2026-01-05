export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type AnimalStatus = 'available' | 'pending' | 'adopted' | 'fostered' | 'medical_hold'
export type AnimalGender = 'male' | 'female'
export type AnimalSize = 'mini' | 'small' | 'medium' | 'large'
export type AnimalType = 'dog' | 'cat' | 'other'
export type DonationStatus = 'pending' | 'completed' | 'failed' | 'refunded'

export interface Database {
  public: {
    Tables: {
      animals: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          // Basic info
          name: string
          type: AnimalType
          breed: string | null
          secondary_breed: string | null
          is_mixed_breed: boolean
          age_years: number
          age_months: number
          size: AnimalSize
          gender: AnimalGender
          weight_kg: number | null
          color: string | null
          // Status
          status: AnimalStatus
          is_urgent: boolean
          // Content
          description: string | null
          story: string | null
          temperament_tags: string[]
          // Compatibility
          good_with_kids: boolean | null
          good_with_dogs: boolean | null
          good_with_cats: boolean | null
          // Housing
          house_trained: boolean
          apartment_friendly: boolean
          needs_yard: boolean
          // Medical
          is_vaccinated: boolean
          is_sterilized: boolean
          is_dewormed: boolean
          is_microchipped: boolean
          special_needs: string | null
          medical_notes: string | null
          // Images (stored in Supabase Storage)
          primary_image_url: string | null
          additional_images: string[]
          video_url: string | null
          // Tracking
          intake_date: string | null
          adoption_date: string | null
          location: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          type?: AnimalType
          breed?: string | null
          secondary_breed?: string | null
          is_mixed_breed?: boolean
          age_years?: number
          age_months?: number
          size: AnimalSize
          gender: AnimalGender
          weight_kg?: number | null
          color?: string | null
          status?: AnimalStatus
          is_urgent?: boolean
          description?: string | null
          story?: string | null
          temperament_tags?: string[]
          good_with_kids?: boolean | null
          good_with_dogs?: boolean | null
          good_with_cats?: boolean | null
          house_trained?: boolean
          apartment_friendly?: boolean
          needs_yard?: boolean
          is_vaccinated?: boolean
          is_sterilized?: boolean
          is_dewormed?: boolean
          is_microchipped?: boolean
          special_needs?: string | null
          medical_notes?: string | null
          primary_image_url?: string | null
          additional_images?: string[]
          video_url?: string | null
          intake_date?: string | null
          adoption_date?: string | null
          location?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          type?: AnimalType
          breed?: string | null
          secondary_breed?: string | null
          is_mixed_breed?: boolean
          age_years?: number
          age_months?: number
          size?: AnimalSize
          gender?: AnimalGender
          weight_kg?: number | null
          color?: string | null
          status?: AnimalStatus
          is_urgent?: boolean
          description?: string | null
          story?: string | null
          temperament_tags?: string[]
          good_with_kids?: boolean | null
          good_with_dogs?: boolean | null
          good_with_cats?: boolean | null
          house_trained?: boolean
          apartment_friendly?: boolean
          needs_yard?: boolean
          is_vaccinated?: boolean
          is_sterilized?: boolean
          is_dewormed?: boolean
          is_microchipped?: boolean
          special_needs?: string | null
          medical_notes?: string | null
          primary_image_url?: string | null
          additional_images?: string[]
          video_url?: string | null
          intake_date?: string | null
          adoption_date?: string | null
          location?: string
        }
      }
      donations: {
        Row: {
          id: string
          created_at: string
          // Payment info
          stripe_payment_intent_id: string | null
          stripe_checkout_session_id: string | null
          amount_cents: number
          currency: string
          status: DonationStatus
          is_recurring: boolean
          // Donor info (optional, for receipts)
          donor_email: string | null
          donor_name: string | null
          // For sponsorship
          sponsored_animal_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          stripe_payment_intent_id?: string | null
          stripe_checkout_session_id?: string | null
          amount_cents: number
          currency?: string
          status?: DonationStatus
          is_recurring?: boolean
          donor_email?: string | null
          donor_name?: string | null
          sponsored_animal_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          stripe_payment_intent_id?: string | null
          stripe_checkout_session_id?: string | null
          amount_cents?: number
          currency?: string
          status?: DonationStatus
          is_recurring?: boolean
          donor_email?: string | null
          donor_name?: string | null
          sponsored_animal_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      animal_status: AnimalStatus
      animal_gender: AnimalGender
      animal_size: AnimalSize
      animal_type: AnimalType
      donation_status: DonationStatus
    }
  }
}

// Helper types for easier use
export type Animal = Database['public']['Tables']['animals']['Row']
export type AnimalInsert = Database['public']['Tables']['animals']['Insert']
export type AnimalUpdate = Database['public']['Tables']['animals']['Update']
export type Donation = Database['public']['Tables']['donations']['Row']
export type DonationInsert = Database['public']['Tables']['donations']['Insert']

