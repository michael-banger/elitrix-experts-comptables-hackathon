import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Prendre rendez-vous", description: "Préparer un premier échange avec ELITRIX EXPERTS à Saint-Cyr-l’École, Versailles ou à distance." };

export default function AppointmentPage() {
  return <><PageHero eyebrow="Premier échange" title="Mettre votre situation à plat, simplement" description="Un premier échange permet de comprendre votre situation, vos obligations et les prochaines étapes possibles. Il ne remplace pas une mission formalisée ni une analyse complète." />
    <section className="section"><div className="container grid-2" style={{ alignItems: "start" }}><div><span className="eyebrow">30 minutes pour cadrer</span><h2 className="title">Ce que l’échange permet de clarifier</h2><div style={{ display: "grid", gap: 16, marginTop: 28 }}>{["Votre activité, votre structure et son stade", "Les obligations ou échéances à prioriser", "Les données et documents à réunir", "Les contours possibles d’un accompagnement"].map(x=><div key={x} style={{ display: "flex", gap: 12 }}><CheckCircle2 size={20} color="#2563eb"/><span>{x}</span></div>)}</div><p className="muted" style={{ marginTop: 28 }}>Aucun résultat fiscal, financier ou juridique n’est garanti à l’issue de cet échange.</p><Link className="link" href="/guide-forme-juridique-2026">Pas encore prêt ? Commencer par le guide →</Link></div><div className="placeholder"><div><CalendarDays size={38} color="#2563eb"/><h2>Calendly simulé</h2><p className="muted">Connexion à l’agenda désactivée pour la démonstration.</p><div className="grid-2" style={{ marginTop: 22, gap: 10 }}><span className="pill">Mardi · 10:00</span><span className="pill">Jeudi · 14:30</span><span className="pill">Vendredi · 09:00</span><span className="pill">À distance</span></div></div></div></div></section>
    <section className="section-sm soft-band"><div className="container"><p className="muted">Coordonnées à valider avant publication · Saint-Cyr-l’École / Versailles · Rendez-vous présentiel ou visioconférence.</p></div></section></>;
}
