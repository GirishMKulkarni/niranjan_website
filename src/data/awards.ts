export interface Award {
  id: string;
  titleKey: string;
  organization: string;
  year?: string;
  descriptionKey: string;
  image?: string;
  imagePosition?: string;
  imageHeight?: string;
}

export const awards: Award[] = [
  {
    id: 'debut',
    titleKey: 'awards.items.debut',
    organization: 'Da.Kru.lele - Marathi Rangbhumi',
    year: '2015',
    descriptionKey: 'awards.descriptions.debut',
    image: '/images/gallery/awards/babasaheb.jpg'
  },
  {
    id: 'actor1',
    titleKey: 'awards.items.actor1',
    organization: 'Aashiyana Karandak Ekankika Competition',
    year: '2017',
    descriptionKey: 'awards.descriptions.actor1',
    image: '/images/gallery/awards/ashiyana.jpeg',
    imageHeight: '8'
  },
  {
    id: 'poet',
    titleKey: 'awards.items.poet',
    organization: 'Tata Motors Story-Poetry Competition',
    descriptionKey: 'awards.descriptions.poet',
    image: '/images/gallery/awards/Kalasagar function2.jpg'
  },
  {
    id: 'anchor',
    titleKey: 'awards.items.anchor',
    organization: 'Lubrall Industries Pvt. Ltd.',
    year: '2025',
    descriptionKey: 'awards.descriptions.anchor',
    image: '/images/hero/award-moment.jpg'
  },
  {
    id: 'gandharva',
    titleKey: 'awards.items.gandharva',
    organization: 'Akhil Bharatiya Marathi Natya Parishad, Pune',
    year: '2026',
    descriptionKey: 'awards.descriptions.gandharva',
    image: '/images/gallery/awards/swararaj-chhota-gandharva-2026.jpeg',
    imagePosition: 'center 25%',
    imageHeight: '22'
  }
];
