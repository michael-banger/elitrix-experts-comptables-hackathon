import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="ELITRIX EXPERTS, accueil">
      <Image
        className="brand-logo"
        src="/assets/logo-elitrix-white.png"
        alt="ELITRIX EXPERTS"
        width={260}
        height={59}
        priority
      />
    </Link>
  );
}
