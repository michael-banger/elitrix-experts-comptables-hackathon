import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Expert-comptable Saint-Cyr-l’École, Versailles et Yvelines", description: "ELITRIX EXPERTS accompagne entreprises et organisations à Saint-Cyr-l’École, Versailles, dans les Yvelines et à distance." };

export default function LocalPage() {
  return <><PageHero eyebrow="Implantation" title="Votre expert-comptable à Saint-Cyr-l’École, près de Versailles" description="Une relation de proximité dans les Yvelines, renforcée par des outils digitaux pour garder vos données, vos échéances et vos décisions accessibles." />
    <section className="section"><div className="container"><div className="grid-3"><article className="card"><span className="icon-box"><MapPin size={20}/></span><h2>Saint-Cyr-l’École</h2><p>Implanté à Saint-Cyr-l’École, le cabinet accompagne les créateurs, indépendants, entreprises et organisations du secteur dans leurs obligations comptables et leur pilotage. Ce point d’ancrage permet des échanges proches et une compréhension concrète du tissu local.</p></article><article className="card"><span className="icon-box"><MapPin size={20}/></span><h2>Versailles</h2><p>À proximité immédiate, Versailles concentre un écosystème diversifié de professions libérales, commerces, TPE et associations. Les rendez-vous peuvent être organisés selon les besoins et les modalités convenues avec le cabinet.</p></article><article className="card"><span className="icon-box"><MapPin size={20}/></span><h2>Yvelines & à distance</h2><p>L’accompagnement s’étend aux Yvelines et, grâce à Pennylane et aux échanges digitaux, aux dirigeants situés ailleurs en Île-de-France ou en France. La disponibilité dépend de la mission et de son organisation.</p></article></div></div></section>
    <section className="section soft-band"><div className="container grid-2"><div><span className="eyebrow">Une proximité utile</span><h2 className="title">Local quand cela compte, digital quand cela simplifie</h2></div><div><p className="lede">Le digital ne remplace pas la relation : il fluidifie la collecte, le suivi et la lecture des chiffres. Les temps d’échange restent centrés sur les décisions et les points de vigilance.</p><Link className="link" href="/rendez-vous">Préparer un premier échange <ArrowRight size={16}/></Link></div></div></section><FinalCta /></>;
}
