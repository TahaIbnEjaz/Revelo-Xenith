// "Capabilities" content — shown in the in-page Capabilities section on Home.
// Each service uses short punchy lines (per brand copy) instead of a single
// paragraph, plus an "Explore X →" label for the CTA link.
import {
  Palette,
  PenTool,
  Wand2,
  Globe,
  MousePointerClick,
  TrendingUp,
  FileText,
  Camera,
  Box,
  Megaphone,
} from 'lucide-react';

const services = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identity',
    lines: [
      'Build a brand people recognize.',
      'A brand people trust.',
      'A brand people remember.',
    ],
    exploreLabel: 'Explore Branding',
  },
  {
    id: 'graphic-design',
    icon: PenTool,
    title: 'Graphic Design',
    lines: ['Every design should communicate.', 'Not decorate.'],
    exploreLabel: 'Explore Design',
  },
  {
    id: 'digital-art',
    icon: Wand2,
    title: 'Digital Art',
    lines: [
      'Beyond imagination.',
      'From esports artwork to cinematic illustrations, we create visuals that make audiences stop scrolling.',
    ],
    exploreLabel: 'Explore Digital Art',
  },
  {
    id: 'website-design',
    icon: Globe,
    title: 'Website Design',
    lines: [
      'Beautiful.',
      'Fast.',
      'Built to convert.',
      'Your website should work harder than you do.',
    ],
    exploreLabel: 'Explore Websites',
  },
  {
    id: 'ui-ux',
    icon: MousePointerClick,
    title: 'UI / UX',
    lines: ['Every click matters.', 'Every interaction tells your story.'],
    exploreLabel: 'Explore UX',
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    lines: [
      'Reach the right audience.',
      'Generate meaningful growth.',
      'Measure real results.',
    ],
    exploreLabel: 'Explore Marketing',
  },
  {
    id: 'content-creation',
    icon: FileText,
    title: 'Content Creation',
    lines: ['Stories that people remember.', 'Content that people share.'],
    exploreLabel: 'Explore Content',
  },
  {
    id: 'photography-videography',
    icon: Camera,
    title: 'Photography & Videography',
    lines: ['Your story deserves cinematic visuals.'],
    exploreLabel: 'Explore Visual Production',
  },
  {
    id: '3d-design-animation',
    icon: Box,
    title: '3D Design & Animation',
    lines: ['Ideas become experiences.', 'Products become unforgettable.'],
    exploreLabel: 'Explore 3D',
  },
  {
    id: 'advertising-campaigns',
    icon: Megaphone,
    title: 'Advertising & Campaigns',
    lines: ['Big ideas deserve bigger campaigns.'],
    exploreLabel: 'Explore Campaigns',
  },
];

export default services;
