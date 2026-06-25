import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  ClipboardCheck,
  Handshake,
  Landmark,
  LineChart,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Expert-comptable à Saint-Cyr-l’École et Versailles" };

const faqs = [
  ["ELITRIX EXPERTS accompagne-t-il les créateurs d’entreprise ?", "Oui, le cabinet peut accompagner les créateurs dans la structuration de leurs premières obligations comptables, fiscales et administratives, selon leur situation."],
  ["Le cabinet accompagne-t-il les entreprises déjà en activité ?", "Oui, l’accompagnement peut concerner la tenue, la révision, les déclarations, le suivi social et le pilotage de l’activité."],
  ["Comment se déroule le premier rendez-vous ?", "Le premier échange permet de comprendre l’activité, les besoins, les échéances et les priorités avant de proposer un cadre d’accompagnement adapté."],
  ["Puis-je être accompagné si mon entreprise n’est pas située à Versailles ou Saint-Cyr-l’École ?", "Le cabinet est basé localement, mais certains échanges peuvent être organisés à distance selon les modalités prévues par le cabinet."],
  ["Quels documents préparer avant un premier échange ?", "Il est utile de préparer les informations sur votre activité, votre structure juridique, vos dernières déclarations ou documents comptables si vous en avez, ainsi que vos principales questions."],
  ["Le cabinet peut-il m’aider à mieux suivre mon activité ?", "Oui, le cabinet peut aider à mettre en place des indicateurs et un suivi plus lisible, adaptés à la situation de l’entreprise."],
] as const;

const servicesOverview = [
  { title: "Expertise comptable", text: "Tenue, révision, comptes annuels et obligations comptables suivies avec méthode.", icon: Calculator },
  { title: "Fiscalité professionnelle", text: "Déclarations fiscales, échéances et structuration des obligations selon votre situation.", icon: Landmark },
  { title: "Social & paie", text: "Bulletins de paie, déclarations sociales et accompagnement des obligations employeur.", icon: Users },
  { title: "Création d’entreprise", text: "Choix de structure, formalités et premiers réflexes comptables et fiscaux.", icon: Building2 },
  { title: "Pilotage & conseil", text: "Tableaux de bord, suivi d’activité et indicateurs utiles à la décision.", icon: LineChart },
  { title: "Accompagnement dirigeant", text: "Organisation administrative, anticipation des échéances et échanges réguliers.", icon: Handshake },
] as const;

const audienceSegments = [
  ["Créateurs d’entreprise", "Pour poser les bonnes bases comptables, fiscales et administratives."],
  ["Dirigeants de TPE et PME", "Pour structurer le suivi comptable et anticiper les échéances."],
  ["Indépendants et professions libérales", "Pour gagner en clarté sur les obligations et le pilotage de l’activité."],
  ["Sociétés en croissance", "Pour disposer d’un accompagnement régulier et d’indicateurs fiables."],
] as const;

const processSteps = [
  ["Premier échange", "Compréhension de votre activité, de votre situation et de vos priorités."],
  ["Diagnostic de vos besoins", "Identification des obligations, échéances, points de vigilance et besoins de pilotage."],
  ["Mise en place", "Organisation des échanges, collecte des pièces, outils, calendrier et responsabilités."],
  ["Suivi régulier", "Points d’avancement, anticipation des échéances et ajustements selon l’évolution de l’activité."],
] as const;

const trustPillars = [
  { title: "Proximité locale", text: "Un cabinet basé à Saint-Cyr-l’École, proche de Versailles et des dirigeants des Yvelines.", icon: MapPin },
  { title: "Suivi structuré", text: "Une méthode de travail lisible, avec calendrier, priorités et points réguliers.", icon: ClipboardCheck },
  { title: "Confidentialité", text: "Un traitement sérieux des données et documents confiés au cabinet.", icon: ShieldCheck },
  { title: "Pédagogie", text: "Des explications claires pour mieux comprendre les obligations et les échéances.", icon: BookOpenCheck },
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

      <section className="section premium-section">
        <div className="container">
          <SectionHeading
            eyebrow="Nos expertises"
            title="Un accompagnement comptable structuré pour piloter votre activité avec sérénité"
            description="ELITRIX EXPERTS accompagne les dirigeants sur leurs obligations comptables, fiscales, sociales et leurs besoins de pilotage, avec un cadre lisible et régulier."
          />
          <div className="premium-grid services-grid">
            {servicesOverview.map(({ title, text, icon: Icon }) => (
              <article className="premium-card service-card" key={title}>
                <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="btn btn-primary btn-navy" href="/rendez-vous">Planifier un rendez-vous <ArrowRight size={17} /></Link>
            <Link className="link link-navy" href="/services">Découvrir l’accompagnement <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section premium-section section-ruled">
        <div className="container">
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Un cabinet pensé pour les dirigeants qui veulent avancer avec méthode"
            description="L’accompagnement s’adresse aux professionnels qui ont besoin d’un suivi fiable, lisible et régulier, à Saint-Cyr-l’École, Versailles et dans les environs."
          />
          <div className="audience-list">
            {audienceSegments.map(([title, text]) => (
              <article className="audience-row" key={title}>
                <span aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-section">
        <div className="container">
          <SectionHeading
            eyebrow="Méthode"
            title="Un parcours simple pour cadrer votre accompagnement"
            description="Le premier contact sert à poser les bases, clarifier les priorités et construire un cadre de travail adapté à votre activité."
          />
          <div className="timeline">
            {processSteps.map(([title, text], index) => (
              <article className="timeline-step" key={title}>
                <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="btn btn-outline btn-outline-navy" href="/rendez-vous">Préparer mon premier échange</Link>
          </div>
        </div>
      </section>

      <section className="section premium-section">
        <div className="container">
          <div className="lead-magnet">
            <div>
              <span className="eyebrow">Ressource gratuite</span>
              <h2 className="title">Recevoir une checklist pour mieux préparer votre suivi comptable</h2>
              <p className="lede">La checklist dirigeant aide à organiser les documents, échéances et questions utiles avant un échange avec votre expert-comptable.</p>
              <p className="resource-title">Checklist dirigeant{"\u00a0"}: les documents et échéances à anticiper pour un suivi comptable plus fluide</p>
              <ul className="check-list">
                <li>Les documents à préparer.</li>
                <li>Les échéances à ne pas oublier.</li>
                <li>Les questions utiles à poser à son expert-comptable.</li>
                <li>Les premiers indicateurs à suivre.</li>
              </ul>
            </div>
            <form className="resource-form" aria-label="Recevoir la checklist dirigeant">
              <div className="field">
                <label htmlFor="resource-firstname">Prénom</label>
                <input id="resource-firstname" name="firstname" autoComplete="given-name" />
              </div>
              <div className="field">
                <label htmlFor="resource-email">Email</label>
                <input id="resource-email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="resource-company">Entreprise</label>
                <input id="resource-company" name="company" autoComplete="organization" />
              </div>
              <button className="btn btn-primary btn-navy" type="submit">Recevoir la checklist</button>
              <p className="form-note">Vos informations sont utilisées uniquement pour vous transmettre la ressource et vous recontacter si vous en faites la demande.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section premium-section section-ruled">
        <div className="container">
          <SectionHeading
            eyebrow="Preuves de confiance"
            title="Un accompagnement fondé sur la rigueur, la proximité et la clarté"
            description="La confiance se construit par des repères concrets avec une implantation locale, une méthode de suivi et une communication compréhensible."
          />
          <div className="premium-grid trust-grid">
            {trustPillars.map(({ title, text, icon: Icon }) => (
              <article className="premium-card trust-card" key={title}>
                <span className="icon-box icon-box-accent"><Icon size={20} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-section">
        <div className="container faq-shell">
          <span className="eyebrow">FAQ</span>
          <h2 className="title">Questions fréquentes avant de nous confier votre comptabilité</h2>
          <div className="faq premium-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm premium-section">
        <div className="container final-rdv">
          <span className="eyebrow">Rendez-vous</span>
          <h2>Vous souhaitez structurer votre suivi comptable ?</h2>
          <p>Échangeons sur votre situation, vos obligations et les priorités à traiter pour construire un accompagnement adapté à votre activité.</p>
          <div className="hero-actions final-actions">
            <Link className="btn btn-primary btn-navy" href="/rendez-vous">Planifier un rendez-vous <ArrowRight size={17} /></Link>
            <Link className="btn btn-outline btn-outline-navy" href="/services">Découvrir nos expertises</Link>
          </div>
          <p className="local-note">Saint-Cyr-l’École · Versailles · Accompagnement des dirigeants et entreprises</p>
        </div>
      </section>
    </>
  );
}
