import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'e42b9bc0-19a7-4e29-9317-1bb1a17e1960',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '274b015e-9f86-4c1f-808f-0e94cb7e9512',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
