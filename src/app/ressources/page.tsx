import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Ressources pour dirigeants", description: "Guides et checklists ELITRIX EXPERTS sur la création, la TVA, la facturation électronique, les associations et les CSE." };

const resources = [
  ["Guide forme juridique 2026", "Créateurs & freelances", "Comparer micro-entreprise, EI, EURL et SASU.", "Disponible", "/guide-forme-juridique-2026"],
  ["Checklist création d’entreprise", "Porteurs de projet", "Préparer les démarches et premières obligations.", "Bientôt", "#"],
  ["Checklist facturation électronique", "TPE / PME", "Cartographier outils, flux et données de facturation.", "Bientôt", "#"],
  ["Checklist freelance TVA & facturation", "Indépendants", "Repérer les seuils, mentions et échéances utiles.", "Bientôt", "#"],
  ["Scorecard TPE 2026", "Dirigeants", "Faire un point rapide sur trésorerie et pilotage.", "Bientôt", "#"],
  ["Kit association", "Associations", "Structurer budget, subventions, salariés et clôture.", "Bientôt", "#"],
  ["Mémo CSE", "Élus & gestionnaires", "Comprendre les budgets, comptes et principaux repères.", "Bientôt", "#"],
] as const;

export default function ResourcesPage() {
  return <><PageHero eyebrow="Bibliothèque" title="Des ressources pour décider avec plus de repères" description="Guides courts, checklists et outils pédagogiques pour préparer une création, une échéance ou un échange avec un professionnel." />
    <section className="section"><div className="container grid-3">{resources.map(([title,target,text,status,href])=><article className="card" key={title}><span className="icon-box"><FileText size={20}/></span><div style={{ marginTop: 18 }}><span className="pill">{status}</span></div><h2>{title}</h2><p>{text}</p><span className="pain">Pour · {target}</span><br/>{status === "Disponible" ? <Link className="link" href={href}>Accéder <ArrowRight size={16}/></Link> : <span className="link" style={{ color: "#64748b" }}>En préparation</span>}</article>)}</div></section>
    <section className="section-sm soft-band"><div className="container"><p className="muted">Chaque ressource fournit une information générale. Elle ne remplace pas une analyse personnalisée de votre situation.</p></div></section></>;
}
