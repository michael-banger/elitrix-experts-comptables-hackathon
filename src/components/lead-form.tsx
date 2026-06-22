"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function LeadForm() {
  const router = useRouter();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/merci");
  }

  return (
    <form className="card form-grid" onSubmit={handleSubmit}>
      <div className="field"><label htmlFor="firstname">Prénom</label><input id="firstname" name="firstname" autoComplete="given-name" required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="structure">Type de structure</label><select id="structure" name="structure" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Créateur</option><option>Freelance</option><option>TPE/PME</option><option>Profession libérale</option><option>Association</option><option>CSE</option><option>Autre</option></select></div>
      <div className="field"><label htmlFor="stage">Stade du besoin</label><select id="stage" name="stage" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Projet</option><option>Activité lancée</option><option>Changement de statut</option><option>Besoin comptable</option><option>Facturation électronique</option><option>Autre</option></select></div>
      <label className="check field-full"><input type="checkbox" required /> <span>J’accepte de recevoir le guide et des contenus utiles liés à cette ressource. Je peux me désinscrire à tout moment.</span></label>
      <div className="field-full"><button className="btn btn-primary" type="submit">Recevoir le guide <ArrowRight size={17} /></button></div>
      <small className="muted field-full">Démonstration : aucune donnée n’est envoyée ni conservée.</small>
    </form>
  );
}
