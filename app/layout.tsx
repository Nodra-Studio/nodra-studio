import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlow = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/barlow/files/barlow-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/barlow/files/barlow-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/barlow/files/barlow-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = localFont({
  src: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nodrastudio.com"),
  title: {
    default: "Nodra Studio — Diseño y desarrollo digital",
    template: "%s — Nodra Studio",
  },
  description:
    "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "tiendas online",
    "sistemas a medida",
    "Nodra Studio",
  ],
  authors: [{ name: "Nodra Studio" }],
  creator: "Nodra Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Nodra Studio",
    title: "Nodra Studio — Diseño y desarrollo digital",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
    images: [
      {
        url: "/brand/nodra-og-isotipo.png",
        width: 1200,
        height: 630,
        alt: "Nodra Studio — Diseño y desarrollo digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodra Studio — Diseño y desarrollo digital",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
    images: [
      {
        url: "/brand/nodra-og-isotipo.png",
        width: 1200,
        height: 630,
        alt: "Nodra Studio — Diseño y desarrollo digital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/nodra-mark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
