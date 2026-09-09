import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';

const services = [
  {
    number: "01",
    title: "Sitios web",
    description:
      "Landings y webs corporativas rápidas, claras y diseñadas para convertir visitas en oportunidades.",
    tags: ["UX/UI", "Desarrollo", "SEO"],
  },
  {
    number: "02",
    title: "Tiendas online",
    description:
      "Experiencias de compra simples de administrar, preparadas para vender y crecer junto a tu negocio.",
    tags: ["E-commerce", "Integraciones", "Performance"],
  },
  {
    number: "03",
    title: "Sistemas a medida",
    description:
      "Herramientas digitales que ordenan procesos, conectan información y resuelven necesidades reales.",
    tags: ["Producto", "Frontend", "Backend"],
  },
];

const projects = [
  {
    number: "01",
    name: "Armonía y Bienestar",
    category: "Bienestar · Landing page",
    description:
      "Landing page para un centro de terapias alternativas. Diseño minimalista y optimizado para mobile y performance.",
    image: "/projects/armonia-bienestar.webp",
    link: "https://armoniaybienestar.com/",
  },
  {
    number: "02",
    name: "Intraud",
    category: "Industria · Sitio corporativo",
    description:
      "Rediseño institucional y catálogo técnico para una empresa argentina de equipos de soldadura.",
    image: "/projects/intraud.webp",
    link: "https://intraud.vercel.app/",
  },
  {
    number: "03",
    name: "Gallinas Libres",
    category: "Industria avícola · Landing page",
    description:
      "Landing page para criadores avícolas independientes. Optimizada para mobile, performance y conversión.",
    image: "/projects/gallinas.webp",
    link: "https://gallinaslibres.com/",
  },
  {
    number: "04",
    name: "IABOT",
    category: "Educación · Plataforma web",
    description:
      "Web para un taller de robótica educativa. Presentación de cursos, inscripciones online y recursos para estudiantes.",
    image: "/projects/iabot.webp",
    link: "https://iabot.com.ar/",
  },
  {
    number: "05",
    name: "Cerrajería APRI",
    category: "Servicios · Sitio institucional",
    description:
      "Sitio institucional para una cerrajería. Diseño claro y moderno, con contacto directo para urgencias en Mercedes y alrededores.",
    image: "/projects/apri.webp",
    link: "https://cerrajeriaapri24hs.com.ar/",
  },
];

const process = [
  {
    number: "01",
    title: "Entender",
    description:
      "Nos metemos en tu negocio, tus usuarios y el problema que necesitamos resolver.",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Ordenamos la experiencia y construimos una dirección visual con intención.",
  },
  {
    number: "03",
    title: "Desarrollar",
    description:
      "Convertimos el diseño en un producto rápido, accesible y fácil de mantener.",
  },
  {
    number: "04",
    title: "Evolucionar",
    description:
      "Medimos, ajustamos y acompañamos el crecimiento después del lanzamiento.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section
        id="inicio"
        className="site-container grid min-h-[calc(100svh-5rem)] scroll-mt-24 grid-cols-12 border-x border-ink/15 sm:min-h-[calc(100svh-6rem)]"
      >
        <div className="col-span-12 flex flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:col-span-9 lg:px-12 lg:py-14">
          <div className="hero-kicker flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em]">
            <span className="size-2 bg-brand" aria-hidden="true" />
            Diseño y desarrollo digital
          </div>
          <div className="my-20 lg:my-24">
            <h1 className="font-display max-w-5xl text-[clamp(4.25rem,11vw,10.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.045em]">
              <span className="hero-line block">Creamos</span>
              <span className="hero-line block text-brand [animation-delay:100ms]">
                productos
              </span>
              <span className="hero-line block [animation-delay:200ms]">
                digitales.
              </span>
            </h1>
          </div>
          <div className="grid gap-8 border-t border-ink/20 pt-6 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr]">
            <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
              Buenos Aires · Málaga
            </p>
            <p className="max-w-xl text-lg leading-7 sm:text-xl sm:leading-8">
              Diseñamos y desarrollamos sitios web, tiendas online y sistemas a
              medida que conectan cada parte de tu negocio.
            </p>
          </div>
        </div>
        <aside
          className="hero-panel relative col-span-3 hidden overflow-hidden border-l border-ink/15 bg-ink lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/20 px-6 py-5 text-xs uppercase tracking-[0.18em] text-white/65">
            <span>01</span>
            <span>Nodo / Sistema</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <Image
              src="/brand/nodra-mark.webp"
              alt=""
              width={800}
              height={800}
              className="hero-mark w-full"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/20 p-6 text-sm leading-6 text-white/70">
            Estrategia, diseño y tecnología trabajando como un solo sistema.
          </div>
        </aside>
      </section>
      <section
        id="Redes"
        className="site-container grid min-h-7.5 scroll-mt-24 grid-cols-12 border-x border-ink/15 bg-brand"
      >
        <div className="col-span-12 flex items-center justify-center gap-5 sm:gap-6 py-6">
          <a
            href="https://www.instagram.com/studio.nodra/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-red-600 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <IconBrandInstagram className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-6 text-red-600" stroke={2.0} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61594058189958"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-red-600 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <IconBrandFacebook className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-rotate-6 text-red-600" stroke={2.0} />
          </a>
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-24 border-t border-ink/15 bg-surface"
      >
        <div className="site-container border-x border-ink/15 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="reveal-grid grid gap-10 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">01 — Servicios</p>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="section-title">
                Diseño que funciona.
                <br />
                <span className="text-brand">Código que responde.</span>
              </h2>
            </div>
          </div>
          <div className="mt-20 border-t border-ink/20 sm:mt-28">
            {services.map((service) => (
              <article
                key={service.number}
                className="service-row reveal-grid grid gap-6 border-b border-ink/20 py-8 lg:grid-cols-12 lg:items-start lg:py-10"
              >
                <span className="text-sm text-brand lg:col-span-1">
                  {service.number}
                </span>
                <h3 className="font-display text-4xl font-semibold uppercase leading-none tracking-[-0.025em] sm:text-5xl lg:col-span-4">
                  {service.title}
                </h3>
                <p className="max-w-xl text-lg leading-7 text-muted-foreground lg:col-span-4">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2 lg:col-span-3 lg:justify-end">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-ink/25 px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="scroll-mt-24 border-t border-ink/15">
        <div className="site-container border-x border-ink/15 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="reveal-grid grid gap-10 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">02 — Proyectos</p>
            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="section-title">
                Trabajo
                <br />
                <span className="text-brand">seleccionado.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-7 text-muted-foreground">
                Una selección de proyectos realizados por quienes hoy forman
                Nodra.
              </p>
            </div>
          </div>
          <div className="mt-20 grid gap-px bg-ink/20 sm:mt-28 lg:grid-cols-12">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`project-card bg-background ${index % 3 === 0 ? "lg:col-span-7" : index % 3 === 1 ? "lg:col-span-5" : "lg:col-span-12"}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver proyecto ${project.name}`}
                >
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`Vista del sitio web de ${project.name}`}
                      fill
                      sizes={
                        index % 3 === 2
                          ? "(min-width: 1024px) 90vw, 100vw"
                          : "(min-width: 1024px) 55vw, 100vw"
                      }
                      className="object-cover"
                    />
                    <span className="project-index">{project.number} ↗</span>
                  </div>
                  <div className="grid gap-4 p-5 sm:p-7 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-display text-4xl font-semibold uppercase tracking-[-0.02em]">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden border-t border-ink/15 bg-brand text-white"
        aria-label="Principio de trabajo"
      >
        <div className="marquee-track font-display flex w-max items-center py-5 text-5xl font-semibold uppercase leading-none tracking-[-0.02em] sm:text-7xl">
          {[0, 1, 2].map((item) => (
            <span key={item} className="flex items-center">
              <span className="px-6">Pensamos</span>
              <span aria-hidden="true">◆</span>
              <span className="px-6">Diseñamos</span>
              <span aria-hidden="true">◆</span>
              <span className="px-6">Desarrollamos</span>
              <span aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </section>

      <section
        id="nosotros"
        className="scroll-mt-24 border-t border-ink/15 bg-ink text-white"
      >
        <div className="site-container grid border-x border-white/20 lg:grid-cols-12">
          <div className="border-b border-white/20 px-5 py-24 sm:px-8 sm:py-32 lg:col-span-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-40">
            <p className="section-label text-white/55">03 — Nodra</p>
            <h2 className="mt-14 font-display text-[clamp(4rem,9vw,8.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.04em]">
              Un equipo.
              <br />
              Cada pieza
              <br />
              <span className="text-brand">conectada.</span>
            </h2>
            <p className="mt-12 max-w-2xl text-xl leading-8 text-white/70">
              Somos un estudio de diseño y desarrollo web. Combinamos mirada de
              producto, experiencia visual y capacidad técnica para construir
              soluciones completas, sin capas innecesarias entre la idea y su
              ejecución.
            </p>
          </div>
          <div className="flex flex-col justify-between px-5 py-12 sm:px-8 lg:col-span-4 lg:px-10 lg:py-14">
            <div className="flex items-start justify-between border-b border-white/20 pb-6 text-xs uppercase tracking-[0.14em] text-white/55">
              <span>Origen</span>
              <span>NOD(O) + RA</span>
            </div>
            <div className="my-24">
              <Image
                src="/brand/nodra-mark.webp"
                alt="Isotipo de Nodra"
                width={800}
                height={800}
                className="mx-auto w-3/5 max-w-64"
              />
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="font-display text-3xl font-semibold uppercase">
                De nodo nace Nodra.
              </p>
              <p className="mt-4 leading-7 text-white/60">
                Piezas distintas que, cuando se conectan con precisión,
                funcionan como un solo sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-surface">
        <div className="site-container border-x border-ink/15 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="reveal-grid grid gap-10 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">04 — Proceso</p>
            <h2 className="section-title lg:col-span-7 lg:col-start-5">
              Del problema
              <br />
              <span className="text-brand">al producto.</span>
            </h2>
          </div>
          <ol className="mt-20 grid border-l border-t border-ink/20 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li
                key={step.number}
                className="process-step flex min-h-60 flex-col justify-between border-b border-r border-ink/20 p-6 sm:min-h-60"
              >
                <span className="text-sm text-brand">{step.number}</span>
                <div>
                  <h3 className="font-display text-4xl font-semibold uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 border-t border-ink/15">
        <div className="site-container grid border-x border-ink/15 lg:grid-cols-12">
          <div className="px-5 py-24 sm:px-8 sm:py-32 lg:col-span-8 lg:border-r lg:border-ink/15 lg:px-12 lg:py-40">
            <p className="section-label">05 — Contacto</p>
            <h2 className="mt-14 font-display text-[clamp(4.5rem,11vw,10.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.05em]">
              Hagamos algo
              <br />
              <span className="text-brand">que funcione.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-between border-t border-ink/15 px-5 py-12 sm:px-8 lg:col-span-4 lg:border-t-0 lg:px-10 lg:py-14">
            <p className="max-w-sm text-lg leading-7">
              Contanos qué necesitás, en qué etapa estás y qué te gustaría
              conseguir. Nosotros te ayudamos a encontrar el mejor punto de
              partida.
            </p>
            <div className="my-20 border-y border-ink/20 py-6 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Respuesta</span>
                <span>Dentro de las 24 h</span>
              </div>
              <div className="mt-4 flex justify-between gap-4">
                <span className="text-muted-foreground">Modalidad</span>
                <span>Remoto</span>
              </div>
            </div>
            <a
              href="https://wa.me/message/BHJIHS5E4QXDF1"
              className="group flex items-center justify-between bg-brand px-6 py-5 font-medium text-white!important hover:bg-[#C11007]"
            >
              <span className="text-white">Contanos tu proyecto</span>
              <span
                className="text-white text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/20 bg-ink text-white">
        <div className="site-container border-x border-white/20 px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src="/brand/nodra-logo.webp"
                alt="Nodra Studio"
                width={2048}
                height={682}
                className="h-auto w-44 brightness-0 invert"
              />
              <p className="mt-5 text-sm text-white/50">
                Diseño y desarrollo digital.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a className="footer-link" href="#servicios">
                Servicios
              </a>
              <a className="footer-link" href="#proyectos">
                Proyectos
              </a>
              <a className="footer-link" href="#nosotros">
                Nosotros
              </a>
              <a className="footer-link" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-white/20 pt-6 text-xs uppercase tracking-widest text-white/40 sm:flex-row sm:justify-between">
            <span>© {new Date().getFullYear()} Nodra Studio</span>
            <span>Buenos Aires · Málaga</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
