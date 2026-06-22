import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section-sm">
      <div className="container cta-band">
        <h2>Une décision mieux préparée commence par les bonnes questions.</h2>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/guide-forme-juridique-2026">Recevoir le guide <ArrowRight size={17} /></Link>
          <Link className="btn btn-light" href="/rendez-vous">Préparer un premier échange</Link>
        </div>
      </div>
    </section>
  );
}
