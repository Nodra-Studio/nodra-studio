"use client";

import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navigation = [
  { href: "#servicios", label: "Servicios", number: "01" },
  { href: "#proyectos", label: "Proyectos", number: "02" },
  { href: "#nosotros", label: "Nosotros", number: "03" },
];

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-ink/15 bg-background">
      <div className="site-container flex h-20 items-center justify-between gap-8 px-5 sm:h-24 sm:px-8">
        <a href="#inicio" aria-label="Nodra Studio, inicio">
          <Image
            src="/brand/nodra-logo.webp"
            alt="Nodra Studio"
            width={2048}
            height={682}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="contact-link hidden md:inline-flex" href="#contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </a>

        <div className="md:hidden">
          <Dialog>
            <DialogTrigger
              className="menu-trigger"
              aria-label="Abrir menú"
            >
              <span />
              <span />
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="fixed inset-0 left-0 top-0 flex h-svh max-h-none w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 border-0 bg-ink p-0 text-white shadow-none data-[state=open]:zoom-in-100"
            >
              <DialogTitle className="sr-only">Navegación</DialogTitle>
              <DialogDescription className="sr-only">
                Enlaces principales de Nodra Studio
              </DialogDescription>

              <div className="flex h-20 items-center justify-between border-b border-white/20 px-5 sm:h-24 sm:px-8">
                <Image
                  src="/brand/nodra-logo.webp"
                  alt="Nodra Studio"
                  width={2048}
                  height={682}
                  className="h-auto w-36 brightness-0 invert"
                />
                <DialogClose className="menu-close" aria-label="Cerrar menú">
                  <span />
                  <span />
                </DialogClose>
              </div>

              <nav
                aria-label="Navegación móvil"
                className="flex flex-1 flex-col justify-center px-5 sm:px-8"
              >
                <ul className="border-t border-white/20">
                  {navigation.map((item) => (
                    <li key={item.href} className="border-b border-white/20">
                      <DialogClose asChild>
                        <a
                          href={item.href}
                          className="group flex items-end justify-between py-5 sm:py-6"
                        >
                          <span className="font-display text-[clamp(3.5rem,16vw,6rem)] font-semibold uppercase leading-none tracking-[-0.035em] transition-colors group-hover:text-brand">
                            {item.label}
                          </span>
                          <span className="pb-1 text-sm text-white/50">
                            {item.number}
                          </span>
                        </a>
                      </DialogClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center justify-between border-t border-white/20 px-5 py-6 text-sm sm:px-8">
                <span className="text-white/55">Buenos Aires · Málaga</span>
                <DialogClose asChild>
                  <a href="#contacto" className="text-brand">
                    Hablemos ↗
                  </a>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
