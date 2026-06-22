import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Download, MailCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Votre guide est prêt", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <><PageHero eyebrow="Demande confirmée" title="Votre guide est prêt" description="Cette ressource est informative et ne remplace pas une analyse personnalisée. Si vous souhaitez clarifier votre situation, vous pouvez préparer un premier échange avec le cabinet." />
    <section className="section"><div className="container grid-2"><article className="card"><span className="icon-box"><Download size={20}/></span><h2>Accéder au guide</h2><p>Le document de démonstration sera ajouté après validation finale de son contenu.</p><button className="btn btn-primary" style={{ marginTop: 24 }} disabled aria-disabled="true">PDF bientôt disponible</button></article><article className="card"><span className="icon-box"><MailCheck size={20}/></span><h2>Livraison email simulée</h2><p>Dans le parcours cible, Brevo envoie le guide à J+0, puis deux contenus pédagogiques à J+3 et J+7. Aucun email n’est envoyé dans cette V1.</p></article></div></section>
    <section className="section soft-band"><div className="container grid-2" style={{ alignItems: "center" }}><div><span className="eyebrow">Prochaine étape facultative</span><h2 className="title">Clarifier votre situation lors d’un premier échange</h2><p className="lede">Le rendez-vous aide à cadrer vos obligations et les étapes possibles. Il ne remplace pas une mission formalisée ni une analyse complète.</p><Link className="btn btn-primary" href="/rendez-vous" style={{ marginTop: 28 }}>Voir les créneaux simulés</Link></div><div className="placeholder"><div><CalendarDays size={36} color="#2563eb"/><h3>Calendly : démonstration</h3><p className="muted">Emplacement réservé à la prise de rendez-vous, sans connexion à un agenda réel.</p></div></div></div></section></>;
}
