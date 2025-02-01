
// Définition de l'interface Article
export interface Article {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  ratings: number;
}

export const Articles: Article[] = [
  {
    "id": "1",
    "name": "Smartphone XYZ",
    "description": "Un smartphone performant avec écran AMOLED et 128 Go de stockage.",
    "price": 699.99,
    "category": "Électronique",
    "stock": 50,
    "imageUrl": "https://example.com/images/smartphone_xyz.jpg",
    "ratings": 4.5
  },
  {
    "id": "2",
    "name": "Ordinateur portable UltraBook 14",
    "description": "Un ultrabook léger et puissant avec 16 Go de RAM et SSD 512 Go.",
    "price": 1199.99,
    "category": "Informatique",
    "stock": 30,
    "imageUrl": "https://example.com/images/ultrabook_14.jpg",
    "ratings": 4.0
  },
  {
    "id": "3",
    "name": "Casque Bluetooth Noise-Canceling",
    "description": "Casque sans fil avec réduction active du bruit pour une immersion totale.",
    "price": 249.99,
    "category": "Audio",
    "stock": 80,
    "imageUrl": "https://example.com/images/casque_bluetooth.jpg",
    "ratings": 4.2
  },
  {
    "id": "4",
    "name": "Montre connectée FitPro",
    "description": "Montre intelligente avec suivi du sommeil et mesure du rythme cardiaque.",
    "price": 149.99,
    "category": "Accessoires",
    "stock": 60,
    "imageUrl": "https://example.com/images/montre_fitpro.jpg",
    "ratings": 4.7
  },
  {
    "id": "5",
    "name": "Chaussures de sport AirRun 3000",
    "description": "Chaussures légères avec semelle en mousse pour un confort optimal.",
    "price": 89.99,
    "category": "Mode",
    "stock": 120,
    "imageUrl": "https://example.com/images/chaussures_airrun.jpg",
    "ratings": 4.3
  },
  {
    "id": "6",
    "name": "Sac à dos urbain 25L",
    "description": "Un sac à dos pratique avec plusieurs compartiments et poche pour ordinateur.",
    "price": 59.99,
    "category": "Bagagerie",
    "stock": 100,
    "imageUrl": "https://example.com/images/sac_urbain.jpg",
    "ratings": 4.6
  },
  {
    "id": "7",
    "name": "Tablette tactile ProTab 10",
    "description": "Tablette haute performance avec écran 10 pouces et stylet inclus.",
    "price": 499.99,
    "category": "Électronique",
    "stock": 45,
    "imageUrl": "https://example.com/images/tablette_protab.jpg",
    "ratings": 4.1
  },
  {
    "id": "8",
    "name": "Lampe de bureau LED ajustable",
    "description": "Lampe avec luminosité réglable et port USB intégré.",
    "price": 39.99,
    "category": "Maison",
    "stock": 200,
    "imageUrl": "https://example.com/images/lampe_led.jpg",
    "ratings": 4.4
  },
  {
    "id": "9",
    "name": "Clavier mécanique RGB",
    "description": "Clavier de gaming avec switches mécaniques et rétroéclairage RGB.",
    "price": 129.99,
    "category": "Informatique",
    "stock": 70,
    "imageUrl": "https://example.com/images/clavier_rgb.jpg",
    "ratings": 4.8
  },
  {
    "id": "10",
    "name": "Gourde isotherme 750ml",
    "description": "Bouteille en acier inoxydable gardant les boissons froides ou chaudes.",
    "price": 24.99,
    "category": "Sport",
    "stock": 150,
    "imageUrl": "https://example.com/images/gourde_isotherme.jpg",
    "ratings": 4.9
  },
  {
    "id": "11",
    "name": "Enceinte Bluetooth Waterproof",
    "description": "Enceinte résistante à l'eau avec basses puissantes.",
    "price": 89.99,
    "category": "Audio",
    "stock": 90,
    "imageUrl": "https://example.com/images/enceinte_bluetooth.jpg",
    "ratings": 4.2
  },
  {
    "id": "12",
    "name": "Tapis de souris XXL",
    "description": "Tapis de souris large et antidérapant pour gaming et bureautique.",
    "price": 19.99,
    "category": "Informatique",
    "stock": 250,
    "imageUrl": "https://example.com/images/tapis_souris.jpg",
    "ratings": 4.5
  },
  {
    "id": "13",
    "name": "Chargeur sans fil rapide",
    "description": "Chargeur à induction compatible avec la plupart des smartphones.",
    "price": 39.99,
    "category": "Accessoires",
    "stock": 110,
    "imageUrl": "https://example.com/images/chargeur_sans_fil.jpg",
    "ratings": 3.6
  },
  {
    "id": "14",
    "name": "Souris ergonomique sans fil",
    "description": "Souris avec prise en main ergonomique pour réduire la fatigue.",
    "price": 49.99,
    "category": "Informatique",
    "stock": 80,
    "imageUrl": "https://example.com/images/souris_ergonomique.jpg",
    "ratings": 4.0
  },
  {
    "id": "15",
    "name": "Parfum Homme Élégance",
    "description": "Un parfum masculin aux notes boisées et épicées.",
    "price": 59.99,
    "category": "Beauté",
    "stock": 40,
    "imageUrl": "https://example.com/images/parfum_homme.jpg",
    "ratings": 4.7
  },
  {
    "id": "16",
    "name": "Lunettes de soleil polarisées",
    "description": "Lunettes avec verres anti-reflets pour une meilleure visibilité.",
    "price": 34.99,
    "category": "Accessoires",
    "stock": 120,
    "imageUrl": "https://example.com/images/lunettes_soleil.jpg",
    "ratings": 4.3
  },
  {
    "id": "17",
    "name": "Machine à café expresso",
    "description": "Machine avec percolateur intégré pour un café intense et crémeux.",
    "price": 179.99,
    "category": "Cuisine",
    "stock": 35,
    "imageUrl": "https://example.com/images/machine_cafe.jpg",
    "ratings": 4.6
  },
  {
    "id": "18",
    "name": "Jeu de société stratégique",
    "description": "Un jeu captivant pour des heures de divertissement en famille.",
    "price": 29.99,
    "category": "Jeux",
    "stock": 75,
    "imageUrl": "https://example.com/images/jeu_societe.jpg",
    "ratings": 4.8
  },
  {
    "id": "19",
    "name": "Batterie externe 20 000mAh",
    "description": "Charge rapide et grande capacité pour recharger vos appareils en déplacement.",
    "price": 59.99,
    "category": "Accessoires",
    "stock": 95,
    "imageUrl": "https://example.com/images/batterie_externe.jpg",
    "ratings": 4.9
  },
  {
    "id": "20",
    "name": "Caméra de surveillance WiFi",
    "description": "Caméra avec vision nocturne et détection de mouvement.",
    "price": 89.99,
    "category": "Sécurité",
    "stock": 50,
    "imageUrl": "https://example.com/images/camera_surveillance.jpg",
    "ratings": 4.2
  }
]
