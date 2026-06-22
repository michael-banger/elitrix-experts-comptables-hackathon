import { PageHero } from "@/components/page-hero";

interface LegalPageProps { title: string; eyebrow: string; children: React.ReactNode; }
export function LegalPage({ title, eyebrow, children }: LegalPageProps) {
  return <><PageHero eyebrow={eyebrow} title={title} description="Page de travail à compléter et faire valider avant la mise en production du site."/><section className="section"><div className="container legal">{children}</div></section></>;
}
