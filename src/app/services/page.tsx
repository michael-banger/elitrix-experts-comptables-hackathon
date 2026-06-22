import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Services comptables, fiscaux et pilotage", description: "Comptabilité, fiscalité, paie, création d’entreprise, Pennylane et facturation électronique avec ELITRIX EXPERTS." };

export default function ServicesPage() {
  return <><PageHero eyebrow="Missions" title="Une expertise structurée autour de vos obligations et de vos décisions" description="De la comptabilité quotidienne au pilotage, ELITRIX EXPERTS organise un accompagnement lisible, digital et adapté au stade de votre organisation." />
    <section className="section"><div className="container grid-2">{services.map(({ title, text, icon: Icon }, i)=><article className="card" key={title}><span className="pill">{String(i+1).padStart(2,"0")}</span><span className="icon-box" style={{ marginTop: 22 }}><Icon size={20}/></span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="section-sm soft-band"><div className="container"><p className="muted">Les missions, leur calendrier et leurs limites sont définis dans une lettre de mission. Les informations présentées ici sont générales et ne constituent pas une consultation personnalisée.</p></div></section><FinalCta /></>;
}
