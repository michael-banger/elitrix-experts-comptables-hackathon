# Simulation d’automatisation

## Flux cible

`Visiteur → Formulaire → Brevo J+0, J+3, J+7 → Calendly → suivi Notion ou Google Sheet`

- J+0 : livraison du guide et rappel du caractère informatif.
- J+3 : email pédagogique sur les critères de choix d’une forme juridique.
- J+7 : invitation sobre à préparer un premier échange.

## État V1

Le formulaire est traité uniquement dans le navigateur et redirige vers `/merci`. Aucune donnée n’est transmise, aucun email n’est envoyé et aucun événement externe n’est créé.

## Conditions d’activation

Valider le consentement, le double opt-in si retenu, les durées de conservation, la désinscription, les contrats de sous-traitance et les droits d’accès avant connexion.
