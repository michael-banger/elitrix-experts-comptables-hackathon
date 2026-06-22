import { BriefcaseBusiness, Building2, Calculator, FileCheck2, HeartHandshake, Landmark, LineChart, ReceiptText, Scale, Users } from "lucide-react";

export const personas = [
  { title: "Créateurs d’entreprise", pain: "Choix de statut, TVA, cotisations et premières obligations.", angle: "Création & sécurisation du démarrage", cta: "Recevoir le guide", href: "/guide-forme-juridique-2026", icon: Building2 },
  { title: "Indépendants & freelances", pain: "Seuils micro, facturation, TVA et passage éventuel en société.", angle: "Comptabilité & évolution du statut", cta: "Voir les ressources", href: "/ressources", icon: BriefcaseBusiness },
  { title: "TPE / PME", pain: "Trésorerie, paie, facturation électronique et visibilité financière.", angle: "Pilotage & tableaux de bord", cta: "Préparer un diagnostic", href: "/rendez-vous", icon: LineChart },
  { title: "Professions libérales", pain: "BNC, TVA, mode d’exercice et maîtrise des charges.", angle: "Fiscalité & organisation", cta: "Clarifier son exercice", href: "/rendez-vous", icon: Scale },
  { title: "Associations", pain: "Budget, subventions, salariés et clôture des comptes.", angle: "Comptabilité & gouvernance", cta: "Voir la checklist", href: "/ressources", icon: HeartHandshake },
  { title: "CSE", pain: "Budgets, comptes, consultations et BDESE.", angle: "Obligations & lisibilité", cta: "Comprendre les obligations", href: "/ressources", icon: Users },
] as const;

export const services = [
  { title: "Comptabilité", text: "Tenue, révision, comptes annuels et échanges structurés tout au long de l’exercice.", icon: Calculator },
  { title: "Fiscalité", text: "Déclarations, échéances et lecture pédagogique des principaux impacts fiscaux.", icon: Landmark },
  { title: "Social & paie", text: "Bulletins, déclarations sociales et accompagnement des obligations employeur.", icon: Users },
  { title: "Création d’entreprise", text: "Comparaison des options, prévisionnel et préparation des premières obligations.", icon: Building2 },
  { title: "Juridique courant", text: "Accompagnement juridique courant lié aux missions comptables, dans le cadre autorisé de la profession.", icon: FileCheck2 },
  { title: "Conseil & pilotage", text: "Indicateurs, trésorerie, tableaux de bord et points de gestion pour décider avec recul.", icon: LineChart },
  { title: "Pennylane & solutions digitales", text: "Des flux plus lisibles, un accès partagé aux données et une collaboration continue.", icon: ReceiptText },
  { title: "Facturation électronique", text: "Préparation des processus, des outils et des données à la nouvelle organisation de facturation.", icon: FileCheck2 },
] as const;
