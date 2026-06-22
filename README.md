# ELITRIX EXPERTS — Site V1

Espace de travail dédié au hackathon ELITRIX EXPERTS, séparé des autres workflows.

La repo centrale de référence est:
https://github.com/michael-banger/elitrix-experts-comptables-hackathon

## Objectif

Avancer proprement sur:
- le site web
- la landing page
- le tunnel de conversion
- les prompts agents
- la QA
- la conformité
- la préparation du rendu hackathon

## Règles de collaboration

- Cette repo sert de base centrale pour le hackathon.
- Toute modification doit rester orientée livraison hackathon.
- Ne pas modifier `main` directement sans instruction explicite.
- Travailler via branches dédiées et PR quand une évolution dépasse un ajustement local.
- Garder les décisions documentées pour éviter les divergences entre site, landing, prompts et QA.

## Organisation

- `docs/` : contexte, décisions, specs, checklist de rendu
- `prompts/` : prompts agents, variantes, garde-fous
- `qa/` : cas de test, contrôles qualité, checks de conformité
- `compliance/` : règles, mentions, points de vigilance
- `render/` : préparation du rendu final hackathon

## Application web

Site éditorial et tunnel d’acquisition pédagogique réalisés avec Next.js 16, TypeScript et Tailwind CSS 4. L’identité reprend les couleurs exactes de la planche de marque : Bleu Profond `#0A1A2F`, Bleu Encre `#101F3D`, Bleu Signal `#2563EB`, Cyan Clair `#06B6D4`, Gris Ardoise `#64748B`, Gris Brume `#E6EAF0` et Blanc Perle `#F7F8FA`.

### Installation et lancement local

```bash
pnpm install
pnpm dev
```

Ouvrir `http://localhost:3000`. Vérification de production :

```bash
pnpm lint
pnpm build
pnpm start
```

### Déploiement

Recommandation : importer le dépôt dans Vercel, conserver le preset Next.js et la commande `pnpm build`. Avant le passage en production, remplacer le domaine temporaire dans les métadonnées, `sitemap.ts` et `robots.ts`, puis compléter toutes les mentions juridiques.

## Parcours de démonstration

1. Accueil : positionnement, profils, services, implantation et conformité.
2. `/guide-forme-juridique-2026` : proposition de valeur et formulaire court.
3. Soumission locale : redirection vers `/merci` sans transmission de données.
4. `/merci` : livraison du guide et séquence Brevo présentées comme simulées.
5. `/rendez-vous` : bloc Calendly simulé et préparation du premier échange.

## Éléments simulés

- Brevo : aucune liste, séquence ou donnée réelle.
- Calendly : aucun agenda et aucun créneau réel.
- Notion / Google Sheet : suivi représenté uniquement dans la documentation.
- PDF : bouton désactivé en attente du document final validé.
- Analytics et cookies non essentiels : non installés.

## Conformité

Le wording évite les comparaisons, garanties et promesses de résultat. L’accompagnement juridique est limité au cadre accessoire des missions comptables. Voir [COMPLIANCE.md](./COMPLIANCE.md) avant toute publication.

## Travail restant avant publication

- Valider le statut exact de l’inscription à l’Ordre et les coordonnées du cabinet.
- Faire relire les mentions légales, la confidentialité et le consentement.
- Produire et valider le PDF du guide.
- Connecter les outils uniquement avec autorisation et contrat de sous-traitance adaptés.
- Remplacer le domaine de démonstration par le domaine définitif.
- Réaliser une revue SEO, UX, QA et conformité finale.

## Prochaines étapes produit

1. Définir le brief produit et le positionnement exact.
2. Fixer l’architecture de la landing page et du tunnel.
3. Rédiger les prompts agents par fonction.
4. Établir la QA minimale acceptable.
5. Lister les contraintes de conformité.
6. Préparer le pack de rendu hackathon.

## Statut

V1 fonctionnelle sur la branche `feature/site-v1`. Les intégrations externes restent volontairement simulées.
