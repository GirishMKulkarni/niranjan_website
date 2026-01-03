export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
  category: 'training' | 'anchoring' | 'theatre' | 'speaking' | 'podcast';
}

export const services: Service[] = [
  {
    id: 'personality',
    icon: '👤',
    titleKey: 'services.items.personality',
    descriptionKey: 'services.descriptions.personality',
    featuresKey: 'services.features.personality',
    category: 'training'
  },
  {
    id: 'etiquette',
    icon: '🎩',
    titleKey: 'services.items.etiquette',
    descriptionKey: 'services.descriptions.etiquette',
    featuresKey: 'services.features.etiquette',
    category: 'training'
  },
  {
    id: 'teamwork',
    icon: '🤝',
    titleKey: 'services.items.teamwork',
    descriptionKey: 'services.descriptions.teamwork',
    featuresKey: 'services.features.teamwork',
    category: 'training'
  },
  {
    id: 'conflict',
    icon: '⚖️',
    titleKey: 'services.items.conflict',
    descriptionKey: 'services.descriptions.conflict',
    featuresKey: 'services.features.conflict',
    category: 'training'
  },
  {
    id: 'leadership',
    icon: '👑',
    titleKey: 'services.items.leadership',
    descriptionKey: 'services.descriptions.leadership',
    featuresKey: 'services.features.leadership',
    category: 'training'
  },
  {
    id: 'speaking',
    icon: '🎤',
    titleKey: 'services.items.speaking',
    descriptionKey: 'services.descriptions.speaking',
    featuresKey: 'services.features.speaking',
    category: 'speaking'
  },
  {
    id: 'time',
    icon: '⏰',
    titleKey: 'services.items.time',
    descriptionKey: 'services.descriptions.time',
    featuresKey: 'services.features.time',
    category: 'training'
  },
  {
    id: 'sqdcm',
    icon: '📊',
    titleKey: 'services.items.sqdcm',
    descriptionKey: 'services.descriptions.sqdcm',
    featuresKey: 'services.features.sqdcm',
    category: 'training'
  },
  {
    id: 'marketing',
    icon: '📈',
    titleKey: 'services.items.marketing',
    descriptionKey: 'services.descriptions.marketing',
    featuresKey: 'services.features.marketing',
    category: 'training'
  },
  {
    id: 'posh',
    icon: '🛡️',
    titleKey: 'services.items.posh',
    descriptionKey: 'services.descriptions.posh',
    featuresKey: 'services.features.posh',
    category: 'training'
  },
  {
    id: 'storytelling',
    icon: '📖',
    titleKey: 'services.items.storytelling',
    descriptionKey: 'services.descriptions.storytelling',
    featuresKey: 'services.features.storytelling',
    category: 'speaking'
  },
  {
    id: 'anchoring',
    icon: '🎭',
    titleKey: 'services.items.anchoring',
    descriptionKey: 'services.descriptions.anchoring',
    featuresKey: 'services.features.anchoring',
    category: 'anchoring'
  }
];

export const serviceCategories = [
  { id: 'all', labelKey: 'gallery.filter_all' },
  { id: 'training', labelKey: 'services.categories.training' },
  { id: 'anchoring', labelKey: 'services.categories.anchoring' },
  { id: 'speaking', labelKey: 'services.categories.speaking' }
];
