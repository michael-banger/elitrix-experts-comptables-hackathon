interface SectionHeadingProps { eyebrow: string; title: string; description?: string; }

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="split-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2 className="title">{title}</h2></div>
      {description ? <p className="lede">{description}</p> : null}
    </div>
  );
}
