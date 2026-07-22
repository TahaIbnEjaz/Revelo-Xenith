// Core service offerings shown on the Home preview grid and the full Services page.
// icon: lucide-react component reference, rendered directly in ServiceCard.
import {
  Globe,
  Palette,
  TrendingUp,
  Megaphone,
  PenTool,
  BarChart3,
} from 'lucide-react';

const services = [
  {
    id: 'web-design',
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Fast, responsive, conversion-focused websites built to represent your brand at its best.',
    benefits: [
      'Custom-coded, no bloated templates',
      'Built for speed and SEO from day one',
      'Fully responsive across every device',
    ],
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identity',
    description:
      'Distinct visual identities — logo, palette, typography, and voice — that make your brand memorable.',
    benefits: [
      'Logo & full visual identity system',
      'Brand guidelines you can hand to anyone',
      'Consistent look across every touchpoint',
    ],
  },
  {
    id: 'performance-marketing',
    icon: TrendingUp,
    title: 'Performance Marketing',
    description:
      'Data-driven paid campaigns across search and social, optimized for real return on ad spend.',
    benefits: [
      'Google, Meta & LinkedIn campaign management',
      'Continuous A/B testing and optimization',
      'Transparent reporting on every dollar spent',
    ],
  },
  {
    id: 'social-media',
    icon: Megaphone,
    title: 'Social Media Management',
    description:
      'Consistent, on-brand content and community management that keeps audiences engaged.',
    benefits: [
      'Content calendars planned monthly',
      'Platform-specific creative direction',
      'Community management & engagement tracking',
    ],
  },
  {
    id: 'content-creative',
    icon: PenTool,
    title: 'Content & Creative Production',
    description:
      'Scroll-stopping graphics, video, and animation designed to convert attention into action.',
    benefits: [
      'In-house design and motion team',
      'Platform-optimized formats',
      'Fast turnaround without cutting corners',
    ],
  },
  {
    id: 'seo-analytics',
    icon: BarChart3,
    title: 'SEO & Analytics',
    description:
      'Technical SEO and clear analytics dashboards so you always know what is working.',
    benefits: [
      'Technical audits & on-page optimization',
      'Custom growth dashboards',
      'Monthly performance reviews',
    ],
  },
];

export default services;
