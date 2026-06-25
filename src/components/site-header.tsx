"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  ["Accueil", "/"],
  ["Services", "/services"],
  ["À propos", "/profils"],
  ["Ressources", "/ressources"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const hasSectionPath = links.some(([, href]) => href !== "/" && normalizedPath.includes(`${href}/`));

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigation principale">
        <Logo />
        <div className="nav-links">
          {links.map(([label, href]) => {
            const isActive = href === "/"
              ? normalizedPath === "/" || (normalizedPath.endsWith("/index.html") && !hasSectionPath)
              : normalizedPath === href || normalizedPath.startsWith(`${href}/`) || normalizedPath.includes(`${href}/`);
            return <Link href={href} key={href} className={isActive ? "nav-active" : undefined}>{label}</Link>;
          })}
          <Link className="btn btn-light nav-contact" href="/rendez-vous">Contact</Link>
        </div>
        <Link className="btn btn-light mobile-nav" href="/rendez-vous" aria-label="Ouvrir la page rendez-vous">
          <Menu size={18} aria-hidden="true" /> Contact
        </Link>
      </nav>
    </header>
  );
}
