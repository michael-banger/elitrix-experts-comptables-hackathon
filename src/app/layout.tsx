import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitrix-experts.fr"),
  title: { default: "ELITRIX EXPERTS | Expertise comptable & conseil", template: "%s | ELITRIX EXPERTS" },
  description: "Cabinet d’expertise comptable à Saint-Cyr-l’École, près de Versailles : comptabilité, fiscalité, paie, création d’entreprise et pilotage.",
  openGraph: { locale: "fr_FR", type: "website", siteName: "ELITRIX EXPERTS" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
