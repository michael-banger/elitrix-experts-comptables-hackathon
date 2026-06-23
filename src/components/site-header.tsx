import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  ["Accueil", "/"],
  ["Services", "/services"],
  ["À propos", "/profils"],
  ["Ressources", "/ressources"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigation principale">
        <Logo />
        <div className="nav-links">
          {links.map(([label, href]) => <Link href={href} key={href} className={href === "/" ? "nav-active" : undefined}>{label}</Link>)}
          <Link className="btn btn-light nav-contact" href="/rendez-vous">Contact</Link>
        </div>
        <Link className="btn btn-light mobile-nav" href="/rendez-vous" aria-label="Ouvrir la page rendez-vous">
          <Menu size={18} aria-hidden="true" /> Contact
        </Link>
      </nav>
    </header>
  );
}
