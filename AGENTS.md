# Consignes agents : ELITRIX EXPERTS

## Workflow Git

- Ne jamais travailler directement sur `main`.
- Créer une branche par lot : `feature/*`, `fix/*`, `docs/*`.
- Vérifier `git status` avant toute modification et préserver les changements existants.
- Ne pas écraser les fichiers stratégiques sans lecture préalable.
- Ne jamais manipuler la Corbeille ni supprimer définitivement des fichiers.

## Séparation des rôles

- Build : implémentation et tests techniques.
- SEO : métadonnées, maillage, intention et absence de contenu local dupliqué.
- UX : parcours, responsive, accessibilité et qualité éditoriale.
- Conformité : allégations, consentement, cadre professionnel et pages légales.
- QA : tests fonctionnels, visuels et non-régression.

## Contrôles obligatoires

1. `pnpm lint`
2. `pnpm build`
3. Parcours accueil → guide → formulaire → merci → rendez-vous.
4. Test responsive mobile, tablette et bureau.
5. Relecture de `COMPLIANCE.md` et recherche des termes interdits.

## Format du résumé de PR

- Objectif et contexte
- Pages et composants modifiés
- Choix structurants
- Tests exécutés et résultats
- Éléments simulés
- Risques, limites et validations attendues
- Captures ou lien de preview
