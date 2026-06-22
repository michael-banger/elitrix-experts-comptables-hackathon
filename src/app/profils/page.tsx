import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { personas } from "@/lib/content";

export const metadata: Metadata = { title: "Profils accompagnés", description: "Accompagnement des créateurs, freelances, TPE-PME, professions libérales, associations et CSE." };

const ctas: Record<string,string> = { "Créateurs d’entreprise":"Recevoir le guide forme juridique", "Indépendants & freelances":"Télécharger la checklist freelance", "TPE / PME":"Préparer un diagnostic de pilotage", "Professions libérales":"Clarifier son mode d’exercice", "Associations":"Voir la checklist association", "CSE":"Comprendre les obligations CSE" };

export default function ProfilesPage() {
  return <><PageHero eyebrow="Profils accompagnés" title="Un accompagnement qui part de votre réalité" description="Les obligations, les outils et les priorités ne sont pas les mêmes pour un créateur, une TPE, une association ou un CSE. Le point de départ est toujours votre contexte." />
    <section className="section"><div className="container grid-2">{personas.map(({ title, pain, angle, href, icon: Icon })=><article className="card" key={title}><span className="icon-box"><Icon size={20}/></span><h2>{title}</h2><p>{pain}</p><span className="pain">Angle d’accompagnement · {angle}</span><br/><Link className="link" href={href}>{ctas[title]} <ArrowRight size={16}/></Link></article>)}</div></section><FinalCta /></>;
}
