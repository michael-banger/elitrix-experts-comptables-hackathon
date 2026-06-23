# ELITRIX EXPERTS : Site V1

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

Les fichiers du site sont dans ce dépôt à la racine :

- `src/app/` : pages App Router, sitemap, robots et pages légales.
- `src/components/` : header, footer, formulaire simulé, blocs éditoriaux.
- `src/lib/` : configuration d’URL publique.
- `.github/workflows/pages.yml` : déploiement GitHub Pages.
- `next.config.ts` : export statique conditionnel pour GitHub Pages.

Le dossier de brief local `STRATEGIE/SUPPORT WEB/` et la planche source de palette ne sont pas inclus dans ce dépôt GitHub. La palette validée est déjà reportée dans le design system du site et dans les styles CSS.

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

Déploiement actif pour la V1 : Vercel, afin de fournir immédiatement une URL publique stable pendant le hackathon.

URL publique active :
https://elitrix-experts-comptables-hackatho.vercel.app/

Projet Vercel :

- Team : `michael-bangers-projects`
- Projet : `elitrix-experts-comptables-hackathon`
- Build command : `pnpm build`
- Les intégrations Brevo, Calendly, Notion et analytics restent simulées.

GitHub Pages reste possible, car le site supporte l’export statique. Le workflow `.github/workflows/pages.yml` est conservé en déclenchement manuel pour éviter des échecs automatiques tant que Pages n’est pas activé dans les settings du dépôt.

URL GitHub Pages prévue après activation :
https://michael-banger.github.io/elitrix-experts-comptables-hackathon/

Le workflow GitHub Pages exécute :

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build:github
```

La commande `pnpm build:github` active `GITHUB_PAGES=true`, définit l’URL publique du dépôt et génère l’export statique dans `out/`.

Configuration GitHub nécessaire :

1. Aller dans `Settings` puis `Pages`.
2. Choisir `GitHub Actions` comme source de build et déploiement.
3. Vérifier que les Actions sont autorisées dans `Settings` puis `Actions`.
4. Attendre la fin du workflow `Deploy site to GitHub Pages`.

Si GitHub Pages ne peut pas être activé sur le compte ou le dépôt, l’alternative est Vercel :

1. Importer le dépôt GitHub dans Vercel.
2. Garder le preset Next.js.
3. Build command : `pnpm build`.
4. Output automatique Vercel, ne pas utiliser `pnpm build:github`.
5. Ne connecter aucun compte Brevo, Calendly, Notion ou analytics tant que la démo hackathon doit rester simulée.

Avant une publication commerciale réelle, remplacer l’URL GitHub Pages par le domaine définitif dans `NEXT_PUBLIC_SITE_URL`, valider les mentions légales et compléter les coordonnées exactes.

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

Workflow branches recommandé :

- `main` : version stable publiée.
- `feature/site-v1` : branche de livraison V1.
- `feature/<sujet>` : branches courtes pour les ajustements d’équipe.
- Pull request vers `main` pour relire les modifications avant publication.
