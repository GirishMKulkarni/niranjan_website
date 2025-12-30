export interface Award {
  id: string;
  titleKey: string;
  organization: string;
  year?: string;
  description: string;
  image?: string;
}

export const awards: Award[] = [
  {
    id: 'debut',
    titleKey: 'awards.items.debut',
    organization: 'Da.Kru.lele - Marathi Rangbhumi',
    year: '2015',
    description: 'Recognized for outstanding debut performance in musical theater prose section.',
    image: '/images/gallery/awards/FB_IMG_1767103857721.jpg'
  },
  {
    id: 'actor1',
    titleKey: 'awards.items.actor1',
    organization: 'Aashiyana Karandak Ekankika Competition',
    year: '2017',
    description: 'Awarded Best Actor for exceptional theatrical performance in one-act play competition.',
    image: '/images/gallery/awards/FB_IMG_1767103908936.jpg'
  },
  {
    id: 'actor2',
    titleKey: 'awards.items.actor2',
    organization: 'Suman Natya Wachan (Wachik Abhinay)',
    year: '2018',
    description: 'Best Actor award for expressive recitation and dramatic reading performance.',
    image: '/images/gallery/awards/FB_IMG_1767104101650.jpg'
  },
  {
    id: 'poet',
    titleKey: 'awards.items.poet',
    organization: 'Tata Motors Story-Poetry Competition',
    year: '2019',
    description: 'Recognized as Best Poet for compelling storytelling through verse.',
    image: '/images/gallery/awards/Kalasagar function2.jpg'
  },
  {
    id: 'anchor',
    titleKey: 'awards.items.anchor',
    organization: 'Lubrall Industries Pvt. Ltd.',
    year: '2023',
    description: 'Honored as Best Anchor for exceptional event hosting and audience engagement.',
    image: '/images/hero/award-moment.jpg'
  }
];
