import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, MapPin, ShieldCheck } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { SectionHeading } from "@/components/section-heading";
import { personas, services } from "@/lib/content";

export const metadata: Metadata = { title: "Expert-comptable à Saint-Cyr-l’École et Versailles" };

const faqs = [
  ["Quand faut-il contacter un expert-comptable avant de créer son entreprise ?", "Dès que le modèle économique, le statut ou les premières dépenses commencent à se préciser. Un échange en amont aide à organiser les questions de TVA, rémunération, protection sociale et financement."],
  ["Micro-entreprise, EURL ou SASU : comment commencer à comparer ?", "En partant de votre activité, de vos revenus visés, de vos charges, de votre besoin de protection et de vos projets. Il n’existe pas de statut universellement adapté."],
  ["Le guide remplace-t-il un conseil personnalisé ?", "Non. Il permet de structurer votre réflexion, mais une décision doit tenir compte de votre situation personnelle et professionnelle."],
  ["Peut-on travailler à distance avec ELITRIX EXPERTS ?", "Oui. Le cabinet accompagne localement dans les Yvelines et peut organiser une collaboration digitale à distance en France."],
  ["Comment se passe le premier rendez-vous ?", "Il sert à comprendre votre contexte, vos obligations et les prochaines étapes possibles. Il ne constitue pas à lui seul une mission formalisée."],
  ["Pourquoi parler de facturation électronique dès maintenant ?", "Parce qu’elle concerne les outils, les habitudes de facturation et la qualité des données. Anticiper permet de préparer une transition plus lisible."],
] as const;

export default function HomePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Expertise comptable & conseil stratégique</span>
            <h1 className="display">Comptabilité, fiscalité et pilotage pour dirigeants qui veulent décider avec clarté</h1>
            <p className="hero-copy">ELITRIX EXPERTS accompagne créateurs, indépendants, dirigeants de TPE/PME, professions libérales, associations et CSE à Saint-Cyr-l’École, Versailles, dans les Yvelines et à distance.</p>
            <div className="hero-actions"><Link className="btn btn-primary" href="/guide-forme-juridique-2026">Télécharger le guide <ArrowRight size={17} /></Link><Link className="btn btn-light" href="/rendez-vous">Prendre rendez-vous</Link></div>
            <div className="trust-row"><span><ShieldCheck size={15} /> Experte-comptable inscrite à l’Ordre</span><span><MapPin size={15} /> Saint-Cyr-l’École / Versailles</span><span><CheckCircle2 size={15} /> Pennylane</span><span><Compass size={15} /> Accompagnement digital</span></div>
          </div>
          <div className="hero-viz" aria-label="Visualisation illustrative de pilotage financier">
            <div className="chart-grid" /><div className="chart-line"><svg viewBox="0 0 400 240" role="img" aria-label="Courbes de progression indicatives"><polyline fill="none" stroke="#91a4bf" strokeWidth="3" points="0,210 55,170 105,184 165,115 220,130 282,78 340,90 400,25"/><polyline fill="none" stroke="#2563eb" strokeWidth="4" points="0,228 55,212 105,193 165,178 220,121 282,132 340,70 400,48"/></svg></div>
            <div className="metric metric-a"><small>Vision</small><strong>Trésorerie</strong></div><div className="metric metric-b"><small>Pilotage</small><strong>Décisions éclairées</strong></div>
          </div>
        </div>
      </section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Une relation qui commence par la clarté" title="Comprendre avant de s’engager" description="Un dirigeant a besoin d’informations utiles avant de contacter un cabinet. Le parcours relie donc contenu pédagogique, ressource pratique et rendez-vous volontaire — sans pression commerciale." /><div className="grid-3"><article className="card"><span className="pill">01 · Comprendre</span><h3>Rendre les enjeux lisibles</h3><p>Expliquer les obligations, les choix et les points de vigilance avec des mots concrets.</p></article><article className="card"><span className="pill">02 · Préparer</span><h3>Apporter une ressource utile</h3><p>Donner au prospect une base pour mieux formuler sa situation et ses questions.</p></article><article className="card"><span className="pill">03 · Échanger</span><h3>Laisser l’initiative au dirigeant</h3><p>Le rendez-vous vient après une action volontaire, dans un cadre sobre et conforme.</p></article></div></div></section>

      <section className="section soft-band"><div className="container"><SectionHeading eyebrow="Profils accompagnés" title="Des enjeux différents, une même exigence de lisibilité" description="Chaque accompagnement part du contexte réel de l’organisation, de son stade et de ses priorités." /><div className="grid-3">{personas.map(({ title, pain, angle, cta, href, icon: Icon }) => <article className="card" key={title}><span className="icon-box"><Icon size={20} /></span><h3>{title}</h3><p>{pain}</p><span className="pain">{angle}</span><br/><Link className="link" href={href}>{cta} <ArrowRight size={16} /></Link></article>)}</div></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Expertise & outils" title="Du respect des obligations à la qualité des décisions" description="Une offre structurée autour de la conformité, de la fluidité des échanges et du pilotage." /><div className="grid-3">{services.map(({ title, text, icon: Icon }) => <article className="card" key={title}><span className="icon-box"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="link" href="/services">Découvrir toutes les missions <ArrowRight size={16} /></Link></div></section>

      <section className="section soft-band"><div className="container grid-2" style={{ alignItems: "center" }}><div className="guide-cover"><span className="eyebrow">Guide pratique · édition 2026</span><h2>Choisir sa forme juridique</h2><p>Micro-entreprise · EI · EURL · SASU</p></div><div><span className="eyebrow">Ressource à télécharger</span><h2 className="title">Comparer les options avant de décider</h2><p className="lede">Un guide pédagogique pour créateurs, freelances et dirigeants de TPE : TVA, cotisations, rémunération, charges et bonnes questions à préparer.</p><div className="hero-actions"><Link className="btn btn-primary" href="/guide-forme-juridique-2026">Voir le guide <ArrowRight size={17} /></Link></div><p className="muted" style={{ marginTop: 22, fontSize: ".82rem" }}>Ce contenu est informatif et ne remplace pas une analyse personnalisée.</p></div></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Proximité & disponibilité" title="Ancré à Saint-Cyr-l’École, proche de Versailles, disponible à distance" description="Une présence locale réelle, complétée par des échanges digitaux pour accompagner les organisations des Yvelines et au-delà." /><div className="grid-3"><article className="card"><span className="pill">Implantation</span><h3>Saint-Cyr-l’École</h3><p>Le point d’ancrage du cabinet, au contact des entrepreneurs et structures du territoire.</p></article><article className="card"><span className="pill">Écosystème proche</span><h3>Versailles</h3><p>Une zone d’activité voisine pour des rendez-vous et accompagnements de proximité.</p></article><article className="card"><span className="pill">Couverture</span><h3>Yvelines & France</h3><p>Des missions organisées localement en Île-de-France ou à distance grâce aux outils digitaux.</p></article></div><Link className="link" href="/expert-comptable-yvelines">Découvrir l’implantation <ArrowRight size={16}/></Link></div></section>

      <section className="section dark-band"><div className="container"><SectionHeading eyebrow="Parcours d’acquisition" title="Un tunnel pédagogique, progressif et volontaire" description="Le contenu prépare la réflexion. L’automatisation ne démarre qu’après une demande explicite du visiteur." /><div className="flow">{[["01","Contenu utile"],["02","Guide"],["03","Email pédagogique"],["04","Rendez-vous"],["05","Suivi"]].map(([n,t])=><div className="flow-step" key={n}><small>{n}</small><strong>{t}</strong></div>)}</div><p style={{ marginTop: 22, color: "#9fafc2", fontSize: ".82rem" }}>Brevo, Calendly et le suivi Notion / Google Sheet sont simulés dans cette démonstration.</p></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Cadre de communication" title="Informer avec sobriété, accompagner avec discernement" description="Pas de comparaison, pas de promesse garantie : les contenus donnent des repères et la décision reste fondée sur une analyse personnalisée." /><div className="grid-2"><article className="card"><h3>Ce que vous trouverez</h3><p>Des explications accessibles, des ressources pratiques et des points de vigilance adaptés à la vie de l’entreprise.</p></article><article className="card"><h3>Ce que ces contenus ne font pas</h3><p>Ils ne remplacent ni une lettre de mission, ni l’étude complète d’une situation fiscale, sociale, comptable ou juridique.</p></article></div></div></section>

      <section className="section soft-band"><div className="container"><span className="eyebrow">Questions fréquentes</span><h2 className="title">Pour préparer la suite</h2><div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <FinalCta />
    </>
  );
}
