export interface Photo {
  id: number;
  url: string;
  alt: string;
}


export const photos: Photo[] = [
  {
    id: 1,
    url: "logos/IMG_0772.jpg",
    alt: 'Étudiant en L2 2024 chez MIT',

  },
  {
    id: 2,
    url: 'logos/tsara-2-1-1024x768.jpg',
    alt: 'Étudiant en L1 2024 chez MIT',

  },
  {
    id: 3,
    url: 'logos/tsara-1-1-2048x1536.jpg',
    alt: 'Étudiant en L3 MISA 2024',

  },
  {
    id: 4,
    url: 'logos/1711043946173.jpeg',
    alt: 'L\'une des salles chez MIT ',

  },
  {
    id: 5,
    url: 'logos/WhatsApp-Image-2024-03-21-at-9.36.36-PM.jpeg',
    alt: 'Photos des étudiants chez MIT',

  }
];


export const achievement: Photo[] = [
  {
    id: 1,
    url: "logos/image2.jpeg",
    alt: 'Champion de l\'ODC 2023',

  },
  {
    id: 2,
    url: 'logos/image0-1-1536x1026.jpeg',
    alt: '2nde place lors de l\'HIU 2023',

  },
  {
    id: 3,
    url: 'logos/IMG_0295-1-1536x1024.jpg',
    alt: 'Sortie de promotion 2023',

  },
  {
    id: 4,
    url: 'logos/image1-1536x710.jpeg',
    alt: 'Reboisement 2023 ',

  },

];
