export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'HR Manager',
    company: 'Tata Motors',
    content: 'Niranjan\'s training sessions transformed our team dynamics. His theatre-based approach made learning engaging and memorable.'
  },
  {
    id: '2',
    name: 'Priya Deshpande',
    role: 'Event Coordinator',
    company: 'Kalasagar Events',
    content: 'An exceptional anchor who brings energy and professionalism to every event. Our corporate functions are always a hit with him on stage.'
  },
  {
    id: '3',
    name: 'Amit Kulkarni',
    role: 'Factory Manager',
    company: 'Lubrall Industries',
    content: 'The SQDCM training was exactly what our manufacturing team needed. Practical, engaging, and results-driven.'
  },
  {
    id: '4',
    name: 'Sunita Patil',
    role: 'Principal',
    company: 'Maharashtra Education Board',
    content: 'His storytelling sessions with our students were inspirational. He has a unique gift for connecting with diverse audiences.'
  },
  {
    id: '5',
    name: 'Vikram Joshi',
    role: 'CEO',
    company: 'StartUp Maharashtra',
    content: 'The business podcast interview was a game-changer for our brand. Professional, insightful, and great exposure.'
  },
  {
    id: '6',
    name: 'Meena Agarwal',
    role: 'Training Head',
    company: 'Publishing House India',
    content: 'Niranjan\'s personality development program improved our team\'s confidence levels significantly. Highly recommended!'
  }
];
