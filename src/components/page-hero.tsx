interface PageHeroProps { eyebrow: string; title: string; description: string; }

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display">{title}</h1>
        <p className="lede">{description}</p>
      </div>
    </section>
  );
}
