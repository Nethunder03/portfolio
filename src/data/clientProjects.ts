export interface ClientProject {
  id: number;
  title: string;
  description: string;
  image: string;
  domain: string;
  client: string;
  year: number;
  website: string;
  challenges: string[];
  solutions: string[];
}

const clientProjects: ClientProject[] = [
  {
    id: 1,
    title: "Plateforme de sécurité bancaire",
    description: "Solution complète de gestion des risques pour institution financière",
    image: "/images/client-bank.jpg",
    domain: "Finance",
    client: "Banque Internationale",
    year: 2023,
    website: "https://exemple-banque.com",
    challenges: [
      "Conformité RGPD stricte",
      "Intégration avec systèmes legacy",
      "Détection temps réel"
    ],
    solutions: [
      "Architecture microservices sécurisée",
      "Analyse comportementale avec AI",
      "Tableau de bord personnalisé"
    ]
  },
  // Ajouter d'autres projets...
];

export default clientProjects; 