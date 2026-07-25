// Service catalogue for the Services page (accordion of main categories,
// each with nested subcategories) and the Home page preview (top-level
// categories only, linking through to /services).
//
// CONTENT STATUS:
//   - 'web-uiux' (Website Development + UI/UX Design): final copy, written
//     by Claude per the brief.
//   - 'animation', 'digital-art', 'graphic-design': placeholder copy only.
//     Swap the `description` and `benefits` fields once you have finalized,
//     plagiarism-free text — the structure/UI does not need to change.
//
// icon: lucide-react component reference, rendered directly in ServiceCard
// and the category accordion header.
import {
  Globe,
  Palette,
  Clapperboard,
  Sparkles,
  TrendingUp,
  Video,
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'web-uiux',
    icon: Globe,
    title: 'Web Design & UI/UX',
    status: 'final',
    description:
      'Beautiful, high-performing websites and intuitive digital experiences designed to grow your business.',
    subcategories: [
    {
      title: 'Website Development',
      benefits: [
        'Business Websites',
        'E-Commerce Stores',
        'Landing Pages',
        'Custom Web Applications',
      ],
    },
    {
      title: 'UI/UX Design',
      benefits: [
        'Wireframing & Prototyping',
        'User Experience Design',
        'Design Systems',
        'Usability Testing',
      ],
    },
  ],
  },

  {
  id: 'branding',
  icon: Palette,
  title: 'Branding & Graphic Design',
  description:
    'Create a strong visual identity that builds trust and makes your brand unforgettable.',
  subcategories: [
    {
      title: 'Brand Identity',
      benefits: [
        'Brand Strategy',
        'Logo Design',
        'Visual Identity',
        'Brand Guidelines',
      ],
    },
    {
      title: 'Marketing Design',
      benefits: [
        'Social Media Graphics',
        'Print Design',
        'Packaging Design',
        'Business Stationery',
      ],
    },
  ],
},
      {
  id: 'marketing',
  icon: TrendingUp,
  title: 'Digital Marketing & Growth',
  description:
    'Reach the right audience with data-driven strategies that increase visibility, leads, and sales.',
  subcategories: [
    {
      title: 'Marketing Services',
      benefits: [
        'SEO',
        'Google & Meta Ads',
        'Social Media Marketing',
        'Email Marketing',
      ],
    },
    {
      title: 'Campaign Strategy',
      benefits: [
        'Marketing Strategy',
        'Campaign Planning',
        'Analytics',
        'Performance Reporting',
      ],
    },
  ],
},
      {
  id: 'creative',
  icon: Clapperboard,
  title: 'Creative Media & Animation',
  description:
    'Bring your ideas to life with stunning visuals, animation and illustrations.',
  subcategories: [
    {
      title: 'Digital Art',
      benefits: [
        'Illustration',
        'Character Design',
        'Mascot Design',
        'Concept Art',
      ],
    },
    {
      title: 'Animation',
      benefits: [
        '3D Animation',
        'Motion Graphics',
        'Product Animation',
        'Post Production',
      ],
    },
  ],
},
{
  id : 'Content',
  icon : Video,
  title : 'Content Creation',
  description : 
  'We create compelling content that informs, entertains, educates, and converts.',
  subcategories: [
    {
      title : 'Contents',
      benefits : [
        'Brand Storytelling',
        'Copywriting',
        'Social Media Content',
        'Blog Writing',
        'Product Descriptions',
        'Campaign Concepts',
        'Creative Scripts',
        'Content Strategy',
      ],
    },
  ],
 },
];

export default serviceCategories;
