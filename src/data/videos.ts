export interface Video {
  id: string;
  src: string;
  title: string;
  category: 'anchoring' | 'training' | 'theatre';
  thumbnail?: string;
}

export const videos: Video[] = [
  {
    id: 'anchoring-1',
    src: '/videos/anchoring/anchoring-sample-1.mp4',
    title: 'Event Anchoring',
    category: 'anchoring'
  },
  {
    id: 'anchoring-2',
    src: '/videos/anchoring/anchoring-sample-2.mp4',
    title: 'Corporate Hosting',
    category: 'anchoring'
  }
];

export const getVideosByCategory = (category: Video['category']) =>
  videos.filter(video => video.category === category);
