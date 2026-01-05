# Ángeles en Adopción 🐾

Website for a pet shelter "Ángeles en Adopción" at El Salto, Jalisco, México.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styles:** Tailwind CSS 4
- **DB:** Supabase (PostgreSQL)
- **Payments:** Stripe
- **Hosting:** Vercel
- **Teammates:** v0 & Claude Code

## Initial Setup

### 1. Dependencias

```bash
npm install
```

### 2. Setup env vars

Copy the example file
```bash
cp env.example .env.local
```

Fill out the env vars in `.env.local`.

### 3. Supabase Setup

#### Create project:
1. Go to [supabase.com](https://supabase.com) and create and account
2. New project

#### API Keys
1. **Settings > API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public/publishable` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role/secret` key → `SUPABASE_SERVICE_ROLE_KEY` (webhooks)

#### Create tables:
1. Go to **SQL Editor** within the Supabase project
2. Copy `supabase/schema.sql`
3. Click **Run**

#### Storage for images
A bucket called  `animals` was created with the schema. To upload images:
1. Go to **Storage** in Supabase
2. Enter the  bucket `animals`
3. Upload the pictures
4. Copy the public URL, to be used in the field `primary_image_url`

### 4. Setup Stripe

#### Create account:
1. Go to [stripe.com](https://stripe.com) y create an account

#### API keys:
1. Go to **Developers > API keys**
2. Copy:
   - `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `Secret key` → `STRIPE_SECRET_KEY`

#### Configure Webhook (for prod):
1. Go to **Developers > Webhooks**
2. Create an endpoint: `https://domain.com/api/webhook/stripe`
3. Select events: `checkout.session.completed`, `payment_intent.payment_failed`
4. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### 5. Development

```bash
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

## Project Structure 

```
├── app/                    # Rutas de Next.js App Router
│   ├── api/               # API Routes
│   │   ├── checkout/      # Stripe checkout
│   │   └── webhook/       # Webhooks
│   ├── donaciones/        # Página de donaciones
│   ├── angeles/[id]/       # Perfil de animal
│   └── ...
├── components/             # Componentes React
├── lib/                    # Utilidades y configuración
├── public/                 # Archivos estáticos
│   ├── images/            # Logo, hero, og-image
│   └── videos/            # Videos del hero
├── supabase/               # Schema SQL
└── types/                  # TypeScript types
```

## Next steps

- [ ] Google forms for adoption
- [ ] AI Matching (BAML maybe?)
- [ ] Multi-language (Español/Inglés)
- [ ] "Street dogs" section
- [ ] Success stories
- [ ] Admin dashboard

## Support

Contact me for questions.

---

Made with ❤️ for the beautiful angels from El Salto, Jalisco.
