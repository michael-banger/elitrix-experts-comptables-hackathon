import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="ELITRIX EXPERTS, accueil">
      <span className="mark" aria-hidden="true" />
      <span>ELITRIX EXPERTS</span>
    </Link>
  );
}
