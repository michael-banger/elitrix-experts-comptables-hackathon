import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Choisir sa forme juridique en 2026", description: "Guide gratuit pour comparer micro-entreprise, EI, EURL et SASU avant une création ou un changement de statut." };

const benefits = ["Comprendre les différences entre micro-entreprise, EI, EURL et SASU", "Identifier les points de vigilance sur TVA, cotisations, rémunération et charges", "Préparer les bonnes questions avant une création ou un changement de statut", "Éviter de décider uniquement à partir d’un simulateur ou d’un conseil générique", "Mieux préparer un premier rendez-vous avec un professionnel"];

export default function GuidePage() {
  return <><PageHero eyebrow="Guide pratique · édition 2026" title="Choisir sa forme juridique en 2026 : micro-entreprise, EI, EURL, SASU" description="Un guide pédagogique pour aider créateurs, freelances et dirigeants de TPE à comparer les principales options avant de décider." />
    <section className="section"><div className="container grid-2" style={{ alignItems: "start" }}><div><div className="guide-cover"><span className="eyebrow">ELITRIX EXPERTS</span><h2>Choisir sa forme juridique en 2026</h2><p>Un cadre clair pour préparer votre décision.</p></div><p className="muted" style={{ fontSize: ".82rem", marginTop: 18 }}>Pour les porteurs de projet, freelances et dirigeants qui créent, structurent ou font évoluer leur activité.</p></div><div><span className="eyebrow">Ce que vous allez clarifier</span><h2 className="title">Une comparaison utile, sans raccourci</h2><div style={{ display: "grid", gap: 16, marginTop: 28 }}>{benefits.map(x=><div key={x} style={{ display: "flex", gap: 12 }}><CheckCircle2 size={20} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }}/><span>{x}</span></div>)}</div><p className="muted" style={{ marginTop: 28 }}>Ce guide présente des informations générales. Il ne recommande pas un statut et ne remplace pas l’analyse de votre activité, de vos objectifs et de votre situation personnelle.</p></div></div></section>
    <section className="section soft-band" id="formulaire"><div className="container grid-2" style={{ alignItems: "start" }}><div><span className="eyebrow">Recevoir le guide</span><h2 className="title">Préparez votre réflexion en quelques minutes</h2><p className="lede">Renseignez ces informations pour accéder à la démonstration du guide. Aucun compte externe n’est connecté.</p><p><Link className="link" href="/rendez-vous">Vous préférez échanger directement ? Préparer un rendez-vous →</Link></p></div><LeadForm /></div></section></>;
}
