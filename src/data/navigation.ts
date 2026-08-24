import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: (servicesData.categories as Category[]).map(category => ({
      label: category.category,
      href: `/services/${category.slug}`,
    })),
  },
  {
    label: 'Government',
    href: '/government/departments',
  },
  {
    label: 'Transparency',
    href: '/government/departments/transparency',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Barangays (24)', href: '/government/departments/barangays' },
        {
          label: 'History & Culture',
          href: '/government/departments/history-culture',
        },
        { label: 'Aringay Quiz', href: '/quiz' },
        {
          label: 'Sangguniang Bayan',
          href: '/government/departments/legislative',
        },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Open Data Philippines', href: 'https://data.gov.ph' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
        { label: 'Official LGU Aringay', href: 'https://aringay.gov.ph' },
        {
          label: 'Sangguniang Bayan',
          href: '/government/departments/legislative',
        },
        {
          label: 'Provincial Gov La Union',
          href: 'https://launion.gov.ph/municipality-of-aringay/',
        },
        { label: 'BLGF Portal', href: 'https://blgf.gov.ph' },
        { label: 'CMCI DTI Portal', href: 'https://cmci.dti.gov.ph' },
        {
          label: 'Official Gazette',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 4)
          .map(category => ({
            label: category.category,
            href: `/services/${category.slug}`,
          })),
        {
          label: 'Transparency & Budget',
          href: '/government/departments/transparency',
        },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/lgu.aringay.official',
    },
  ],
};
