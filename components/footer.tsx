import Link from "next/link"
import { Heart, MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Heart className="h-6 w-6 fill-primary text-primary" />
              <span>Ángeles en Adopción</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Rescate y rehabilitación de perritos en El Salto, Jalisco. Cambiando vidas desde 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#angeles" className="text-muted-foreground hover:text-primary">
                  Ángeles disponibles
                </Link>
              </li>
              <li>
                <Link href="/matching" className="text-muted-foreground hover:text-primary">
                  Encuentra tu Match
                </Link>
              </li>
              <li>
                <Link href="/donaciones" className="text-muted-foreground hover:text-primary">
                  Donar
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/526532850961" className="hover:text-primary">
                  653 285 0961
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>El Salto, Jalisco</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/angeles.enadopcion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @angeles.enadopcion
                </a>
              </li>
            </ul>
          </div>

          {/* Donations */}
          <div className="space-y-4">
            <h3 className="font-semibold">Donaciones</h3>
            <p className="text-sm text-muted-foreground">
              Tu apoyo nos ayuda a seguir rescatando y cuidando a más perritos.
            </p>
            <div className="text-sm">
              <p className="font-medium">BanCoppel</p>
              <p className="text-muted-foreground">4169 1611 0637 1114</p>
              <p className="text-muted-foreground">America Gallegos</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>2025 Angeles Adopción. Todos los derechos reservados. Hecho con amor para los perritos.</p>
        </div>
      </div>
    </footer>
  )
}
