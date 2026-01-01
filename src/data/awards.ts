export interface Award {
  id: string;
  titleKey: string;
  organization: string;
  year?: string;
  description: string;
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
    description: 'Recognized for outstanding debut performance in musical theater prose section.',
    image: '/images/gallery/awards/babasaheb.jpg'
  },
  {
    id: 'actor1',
    titleKey: 'awards.items.actor1',
    organization: 'Aashiyana Karandak Ekankika Competition',
    year: '2017',
    description: 'Awarded Ashtapailu Kalakar award.',
    image: '/images/gallery/awards/ashiyana.jpeg',
    imageHeight: '8'
  },
  {
    id: 'poet',
    titleKey: 'awards.items.poet',
    organization: 'Tata Motors Story-Poetry Competition',
    description: 'Recognized as Best Poet for compelling storytelling through verse.',
    image: '/images/gallery/awards/Kalasagar function2.jpg'
  },
  {
    id: 'anchor',
    titleKey: 'awards.items.anchor',
    organization: 'Lubrall Industries Pvt. Ltd.',
    year: '2025',
    description: 'Honored as Best Anchor for exceptional event hosting and audience engagement.',
    image: '/images/hero/award-moment.jpg'
  }
];
