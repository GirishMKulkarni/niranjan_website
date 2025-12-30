export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'training' | 'anchoring' | 'awards' | 'theatre';
}

export const galleryImages: GalleryImage[] = [
  // Training
  {
    id: 'training-1',
    src: '/images/gallery/training/FB_IMG_1767103810434.jpg',
    alt: 'Corporate training session',
    category: 'training'
  },
  {
    id: 'training-2',
    src: '/images/gallery/training/FB_IMG_1767103802223.jpg',
    alt: 'Soft skills workshop',
    category: 'training'
  },
  // Anchoring
  {
    id: 'anchoring-1',
    src: '/images/gallery/anchoring/FB_IMG_1767103843647.jpg',
    alt: 'Event anchoring',
    category: 'anchoring'
  },
  {
    id: 'anchoring-2',
    src: '/images/gallery/anchoring/FB_IMG_1767103816392.jpg',
    alt: 'Corporate event hosting',
    category: 'anchoring'
  },
  {
    id: 'anchoring-3',
    src: '/images/gallery/anchoring/FB_IMG_1767103867568.jpg',
    alt: 'Stage performance',
    category: 'anchoring'
  },
  // Awards
  {
    id: 'awards-1',
    src: '/images/gallery/awards/FB_IMG_1767103857721.jpg',
    alt: 'Award ceremony',
    category: 'awards'
  },
  {
    id: 'awards-2',
    src: '/images/gallery/awards/FB_IMG_1767103908936.jpg',
    alt: 'Recognition event',
    category: 'awards'
  },
  {
    id: 'awards-3',
    src: '/images/gallery/awards/FB_IMG_1767104101650.jpg',
    alt: 'Award presentation',
    category: 'awards'
  },
  {
    id: 'awards-4',
    src: '/images/gallery/awards/Kalasagar function2.jpg',
    alt: 'Kalasagar function',
    category: 'awards'
  },
  // Theatre
  {
    id: 'theatre-1',
    src: '/images/gallery/theatre/Hambirrao Niranjan.png',
    alt: 'Hambirrao theatrical performance',
    category: 'theatre'
  },
  {
    id: 'theatre-2',
    src: '/images/gallery/theatre/FB_IMG_1767103972052.jpg',
    alt: 'Stage performance',
    category: 'theatre'
  },
  {
    id: 'theatre-3',
    src: '/images/gallery/theatre/FB_IMG_1767103886465.jpg',
    alt: 'Theatre production',
    category: 'theatre'
  },
  {
    id: 'theatre-4',
    src: '/images/gallery/theatre/FB_IMG_1767103997869.jpg',
    alt: 'Dramatic performance',
    category: 'theatre'
  },
  {
    id: 'theatre-5',
    src: '/images/gallery/theatre/FB_IMG_1767103900651.jpg',
    alt: 'Cultural event',
    category: 'theatre'
  },
  {
    id: 'theatre-6',
    src: '/images/gallery/theatre/FB_IMG_1767103962855.jpg',
    alt: 'Musical performance',
    category: 'theatre'
  },
  {
    id: 'theatre-7',
    src: '/images/gallery/theatre/FB_IMG_1767103771017.jpg',
    alt: 'Traditional performance',
    category: 'theatre'
  }
];

export const galleryCategories = [
  { id: 'all', labelKey: 'gallery.filter_all' },
  { id: 'training', labelKey: 'gallery.filter_training' },
  { id: 'anchoring', labelKey: 'gallery.filter_anchoring' },
  { id: 'awards', labelKey: 'gallery.filter_awards' },
  { id: 'theatre', labelKey: 'gallery.filter_theatre' }
];
