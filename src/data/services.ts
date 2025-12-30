export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  features: string[];
  category: 'training' | 'anchoring' | 'theatre' | 'speaking' | 'podcast';
}

export const services: Service[] = [
  {
    id: 'personality',
    icon: '👤',
    titleKey: 'services.items.personality',
    descriptionKey: 'Unlock your true potential with confidence-building techniques, self-awareness exercises, and personal branding strategies.',
    features: ['Self-confidence building', 'Body language mastery', 'Personal branding', 'First impression management'],
    category: 'training'
  },
  {
    id: 'etiquette',
    icon: '🎩',
    titleKey: 'services.items.etiquette',
    descriptionKey: 'Master professional etiquette, workplace manners, and personal grooming for corporate success.',
    features: ['Business etiquette', 'Dress code guidance', 'Email & phone etiquette', 'Meeting protocols'],
    category: 'training'
  },
  {
    id: 'teamwork',
    icon: '🤝',
    titleKey: 'services.items.teamwork',
    descriptionKey: 'Build stronger teams through collaboration exercises, trust-building activities, and effective communication.',
    features: ['Team building activities', 'Collaboration techniques', 'Trust exercises', 'Group dynamics'],
    category: 'training'
  },
  {
    id: 'conflict',
    icon: '⚖️',
    titleKey: 'services.items.conflict',
    descriptionKey: 'Learn to handle workplace conflicts professionally with mediation techniques and constructive dialogue.',
    features: ['Conflict resolution', 'Mediation skills', 'Active listening', 'Win-win negotiation'],
    category: 'training'
  },
  {
    id: 'leadership',
    icon: '👑',
    titleKey: 'services.items.leadership',
    descriptionKey: 'Develop leadership qualities that inspire teams and drive organizational success.',
    features: ['Leadership styles', 'Decision making', 'Team motivation', 'Strategic thinking'],
    category: 'training'
  },
  {
    id: 'speaking',
    icon: '🎤',
    titleKey: 'services.items.speaking',
    descriptionKey: 'Master the art of public speaking with voice modulation, stage presence, and audience engagement techniques.',
    features: ['Voice modulation', 'Stage presence', 'Audience engagement', 'Overcoming fear'],
    category: 'speaking'
  },
  {
    id: 'time',
    icon: '⏰',
    titleKey: 'services.items.time',
    descriptionKey: 'Optimize productivity with goal-setting frameworks, prioritization techniques, and time management strategies.',
    features: ['Goal setting (SMART)', 'Prioritization matrix', 'Productivity hacks', 'Work-life balance'],
    category: 'training'
  },
  {
    id: 'sqdcm',
    icon: '📊',
    titleKey: 'services.items.sqdcm',
    descriptionKey: 'Implement SQDCM (Safety, Quality, Delivery, Cost, Morale) techniques for manufacturing excellence.',
    features: ['Safety protocols', 'Quality management', 'Delivery optimization', 'Cost reduction'],
    category: 'training'
  },
  {
    id: 'marketing',
    icon: '📈',
    titleKey: 'services.items.marketing',
    descriptionKey: 'Learn fundamental marketing and sales techniques to grow business and build customer relationships.',
    features: ['Sales fundamentals', 'Customer relations', 'Pitch presentation', 'Negotiation skills'],
    category: 'training'
  },
  {
    id: 'posh',
    icon: '🛡️',
    titleKey: 'services.items.posh',
    descriptionKey: 'Comprehensive POSH (Prevention of Sexual Harassment) awareness and compliance training.',
    features: ['Legal awareness', 'Workplace safety', 'Reporting mechanisms', 'Case studies'],
    category: 'training'
  },
  {
    id: 'storytelling',
    icon: '📖',
    titleKey: 'services.items.storytelling',
    descriptionKey: 'Harness the power of storytelling for business communication and motivational speaking.',
    features: ['Narrative techniques', 'Emotional connection', 'Business storytelling', 'Motivational talks'],
    category: 'speaking'
  },
  {
    id: 'anchoring',
    icon: '🎭',
    titleKey: 'services.items.anchoring',
    descriptionKey: 'Professional event hosting for corporate, cultural, musical, and social events.',
    features: ['Corporate events', 'Musical evenings', 'Social gatherings', 'Cultural programs'],
    category: 'anchoring'
  }
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'training', label: 'Soft Skills Training' },
  { id: 'anchoring', label: 'Event Anchoring' },
  { id: 'speaking', label: 'Public Speaking' }
];
