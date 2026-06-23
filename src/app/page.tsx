import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, Handshake, Stethoscope, UserRound } from "lucide-react";
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

const heroAudiences = [
  { label: "TPE / PME", detail: "Dirigeants", icon: BriefcaseBusiness },
  { label: "Indépendants", detail: "Freelances", icon: UserRound },
  { label: "Professions", detail: "libérales", icon: Stethoscope },
  { label: "Associations", detail: "& Fondations", icon: Handshake },
  { label: "CSE", detail: "Comités d’entreprise", icon: Building2 },
] as const;

function HeroFinancialVisual() {
  return (
    <svg
      className="hero-financial-visual"
      viewBox="0 0 760 560"
      role="img"
      aria-labelledby="hero-financial-title hero-financial-desc"
    >
      <title id="hero-financial-title">Visualisation de pilotage financier</title>
      <desc id="hero-financial-desc">Graphiques de croissance, panneaux de données translucides et architecture institutionnelle en arrière-plan.</desc>
      <defs>
        <linearGradient id="heroPanel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" stopOpacity=".48" />
          <stop offset="45%" stopColor="#58708d" stopOpacity=".28" />
          <stop offset="100%" stopColor="#0c2345" stopOpacity=".06" />
        </linearGradient>
        <linearGradient id="heroPanelTall" x1="0" x2=".9" y1=".05" y2="1">
          <stop offset="0%" stopColor="#2f5f9a" stopOpacity=".28" />
          <stop offset="52%" stopColor="#1d3d67" stopOpacity=".23" />
          <stop offset="100%" stopColor="#07172d" stopOpacity=".07" />
        </linearGradient>
        <linearGradient id="heroBase" x1=".05" x2=".95" y1=".2" y2="1">
          <stop offset="0%" stopColor="#f8fbff" stopOpacity=".78" />
          <stop offset="46%" stopColor="#91a7bd" stopOpacity=".42" />
          <stop offset="100%" stopColor="#11294b" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id="heroBlue" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#0b66ff" />
          <stop offset="100%" stopColor="#2495ff" />
        </linearGradient>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.05 0 0 0 0 0.35 0 0 0 0 1 0 0 0 .55 0" />
          <feBlend in="SourceGraphic" />
        </filter>
        <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" floodColor="#000915" floodOpacity=".45" />
        </filter>
      </defs>

      <g className="visual-grid" opacity=".34">
        {Array.from({ length: 8 }).map((_, index) => <path key={`v-${index}`} d={`M${122 + index * 78} 94V482`} />)}
        {Array.from({ length: 5 }).map((_, index) => <path key={`h-${index}`} d={`M92 ${124 + index * 72}H724`} />)}
      </g>

      <g className="visual-building" aria-hidden="true">
        <path d="M76 413h606M104 413V282l62-45 62 45v131M126 272h80M142 413v-78h44v78M292 413V252l72-54 72 54v161M318 413V298h92v115M302 278h124M498 413V262l76-56 76 56v151M520 413v-92h38v92M588 413v-92h38v92M512 286h126" />
        <path d="M148 320h14m22 0h14M148 354h14m22 0h14M340 318h18m32 0h18M340 354h18m32 0h18M532 320h16m54 0h16M532 356h16m54 0h16" />
        <path d="M152 237c8-26 20-38 36-36 12 2 20 10 24 24M348 198c10-30 26-45 48-42 15 3 26 13 32 30M560 208c12-35 30-52 54-48 18 3 31 16 38 38" />
      </g>

      <g filter="url(#glassShadow)">
        <path className="visual-base" d="M151 455L281 405L684 419L567 503L118 487Z" />
        <path className="visual-base-edge" d="M151 455L118 487L567 503L684 419" />
      </g>

      <g className="visual-bars">
        {[230, 258, 286, 314, 342, 370, 398, 426, 454, 482, 510, 538].map((x, index) => {
          const heights = [40, 58, 74, 98, 124, 148, 184, 218, 258, 296, 230, 160];
          return <path key={x} d={`M${x} ${429 - heights[index]}L${x + 31} ${421 - heights[index]}V431L${x} 439Z`} />;
        })}
      </g>

      <g className="visual-panels">
        <path className="visual-panel panel-left" d="M252 393V178c0-17 13-29 30-25l175 38c15 3 25 16 25 32v208Z" />
        <path className="visual-panel panel-right" d="M455 430V142c0-15 9-29 23-35l116-53c18-8 38 5 38 25v346Z" />
        <path className="visual-panel-line" d="M252 393V178c0-17 13-29 30-25l175 38c15 3 25 16 25 32v208M455 430V142c0-15 9-29 23-35l116-53c18-8 38 5 38 25v346" />
      </g>

      <g className="visual-stems">
        {[176, 222, 270, 318, 365, 414, 462].map((x, index) => {
          const y = [369, 336, 344, 290, 250, 256, 190][index];
          return <path key={`stem-white-${x}`} d={`M${x} 423V${y}`} />;
        })}
        {[382, 426, 474, 522, 568, 614].map((x, index) => {
          const y = [393, 372, 328, 286, 238, 152][index];
          return <path key={`stem-blue-${x}`} d={`M${x} 423V${y}`} />;
        })}
      </g>

      <g className="visual-lines" filter="url(#softGlow)">
        <path className="line-white" d="M176 369L222 336L270 344L318 290L365 250L414 256L462 190" />
        <path className="line-blue" d="M382 393L426 372L474 328L522 286L568 238L614 152" />
        {[176, 222, 270, 318, 365, 414, 462].map((x, index) => {
          const y = [369, 336, 344, 290, 250, 256, 190][index];
          return <circle className="dot-white" key={`dot-white-${x}`} cx={x} cy={y} r="8" />;
        })}
        {[382, 426, 474, 522, 568, 614].map((x, index) => {
          const y = [393, 372, 328, 286, 238, 152][index];
          return <circle className="dot-blue" key={`dot-blue-${x}`} cx={x} cy={y} r="8" />;
        })}
      </g>
    </svg>
  );
}

export default function HomePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero">
        <div className="hero-architecture" aria-hidden="true">
          <svg viewBox="0 0 760 260" preserveAspectRatio="none">
            <path d="M20 230h720M76 230V116l52-40 52 40v114M112 230v-70h32v70M210 230V96h74v134M222 118h50M222 146h50M222 174h50M330 230V82h116v148M350 116h76M350 148h76M350 180h76M500 230V104l62-44 62 44v126M536 230v-78h52v78M655 230V136h58v94" />
            <path d="M72 116h112M496 104h132M328 82h120" />
          </svg>
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">EXPERTISE COMPTABLE & CONSEIL</span>
            <h1 className="display">Pilotez. Décidez.<br />Développez.</h1>
            <p className="hero-copy">Nous transformons vos données en décisions éclairées pour sécuriser votre conformité et accélérer votre croissance.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary hero-primary" href="/services">Découvrir nos services <ArrowRight size={19} /></Link>
              <Link className="btn btn-light hero-secondary" href="/rendez-vous">Prendre rendez-vous</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Visualisation illustrative de pilotage financier et stratégique">
            <HeroFinancialVisual />
          </div>
        </div>
        <div className="container hero-audience" aria-label="Publics accompagnés">
          {heroAudiences.map(({ label, detail, icon: Icon }) => (
            <div className="audience-item" key={`${label}-${detail}`}>
              <Icon size={34} aria-hidden="true" />
              <span><strong>{label}</strong><small>{detail}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Une relation qui commence par la clarté" title="Comprendre avant de s’engager" description="Un dirigeant a besoin d’informations utiles avant de contacter un cabinet. Le parcours relie donc contenu pédagogique, ressource pratique et rendez-vous volontaire, sans pression commerciale." /><div className="grid-3"><article className="card"><span className="pill">01 · Comprendre</span><h3>Rendre les enjeux lisibles</h3><p>Expliquer les obligations, les choix et les points de vigilance avec des mots concrets.</p></article><article className="card"><span className="pill">02 · Préparer</span><h3>Apporter une ressource utile</h3><p>Donner au prospect une base pour mieux formuler sa situation et ses questions.</p></article><article className="card"><span className="pill">03 · Échanger</span><h3>Laisser l’initiative au dirigeant</h3><p>Le rendez-vous vient après une action volontaire, dans un cadre sobre et conforme.</p></article></div></div></section>

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
