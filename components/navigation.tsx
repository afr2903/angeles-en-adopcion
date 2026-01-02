"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu, Sparkles, HandHeart, Phone, Home, FileText } from "lucide-react"

export function Navigation() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/#perros", label: "Ángeles", icon: Heart },
    { href: "/matching", label: "Find Your Match", icon: Sparkles },
    { href: "/apadrinar", label: "Apadrinar", icon: Heart },
    { href: "/donaciones", label: "Donar", icon: HandHeart },
    { href: "/contacto", label: "Contacto", icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Angeles Adopción Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold">Angeles Adopción</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" variant="default" asChild>
            <Link href="/requisitos">
              <FileText className="h-4 w-4 mr-2" />
              Adoptar
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-base font-medium transition-colors hover:text-primary px-2 py-2"
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <Button className="w-full mt-2" asChild onClick={() => setOpen(false)}>
                <Link href="/requisitos">
                  <FileText className="h-4 w-4 mr-2" />
                  Adoptar
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
