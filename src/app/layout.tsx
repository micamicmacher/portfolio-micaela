import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// Dirección pública del sitio: la de site.ts, o la que Vercel asigna al proyecto.
const urlDelSitio =
  site.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(urlDelSitio),
  title: site.seo.titulo,
  description: site.seo.descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seo.titulo,
    description: site.seo.descripcion,
    url: "/",
    siteName: site.nombre,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.titulo,
    description: site.seo.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
