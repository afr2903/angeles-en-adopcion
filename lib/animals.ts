import { getSupabaseClient } from './supabase'
import type { Animal, AnimalSize, AnimalGender, AnimalStatus } from '@/types/database'

export interface AnimalFilters {
  search?: string
  size?: AnimalSize | 'all'
  gender?: AnimalGender | 'all'
  type?: 'dog' | 'cat' | 'all'
  status?: AnimalStatus | 'all'
}

export async function getAnimals(filters?: AnimalFilters): Promise<Animal[]> {
  const supabase = getSupabaseClient()
  let query = supabase
    .from('animals')
    .select('*')
    .order('created_at', { ascending: false })

  // Only show available animals by default (unless specifically filtered)
  if (!filters?.status || filters.status === 'all') {
    query = query.eq('status', 'available')
  } else {
    query = query.eq('status', filters.status)
  }

  if (filters?.size && filters.size !== 'all') {
    query = query.eq('size', filters.size)
  }

  if (filters?.gender && filters.gender !== 'all') {
    query = query.eq('gender', filters.gender)
  }

  if (filters?.type && filters.type !== 'all') {
    query = query.eq('type', filters.type)
  }

  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching animals:', error)
    return []
  }

  return data || []
}

export async function getAnimalById(id: string): Promise<Animal | null> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('animals')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching animal:', error)
    return null
  }

  return data
}

export async function getUrgentAnimals(): Promise<Animal[]> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('animals')
    .select('*')
    .eq('status', 'available')
    .eq('is_urgent', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching urgent animals:', error)
    return []
  }

  return data || []
}

export async function getAnimalsCount(): Promise<number> {
  const supabase = getSupabaseClient()
  const { count, error } = await supabase
    .from('animals')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'available')

  if (error) {
    console.error('Error fetching count:', error)
    return 0
  }

  return count || 0
}

// Helper function to format age in Spanish
export function formatAge(years: number, months: number): string {
  const parts = []
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'año' : 'años'}`)
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`)
  }
  return parts.join(' y ') || 'Edad desconocida'
}

// Helper function to translate size to Spanish
export function translateSize(size: AnimalSize): string {
  const sizes: Record<AnimalSize, string> = {
    mini: 'Mini',
    small: 'Pequeño',
    medium: 'Mediano',
    large: 'Grande',
  }
  return sizes[size]
}

// Helper function to translate gender to Spanish
export function translateGender(gender: AnimalGender): string {
  return gender === 'male' ? 'Macho' : 'Hembra'
}

