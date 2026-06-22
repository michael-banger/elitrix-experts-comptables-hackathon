import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ maxWidth: 340, marginTop: 20 }}>Expertise comptable & conseil stratégique à Saint-Cyr-l’École, près de Versailles, et à distance.</p>
          </div>
          <div><h3>Cabinet</h3><Link href="/services">Services</Link><Link href="/profils">Profils accompagnés</Link><Link href="/expert-comptable-yvelines">Implantation</Link></div>
          <div><h3>Ressources</h3><Link href="/guide-forme-juridique-2026">Guide 2026</Link><Link href="/ressources">Bibliothèque</Link><Link href="/rendez-vous">Premier échange</Link></div>
          <div><h3>Informations</h3><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/cookies">Cookies</Link></div>
        </div>
        <div className="footer-bottom">© 2026 ELITRIX EXPERTS. Informations générales, sous réserve d’une analyse personnalisée.</div>
      </div>
    </footer>
  );
}
