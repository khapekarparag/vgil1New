import { PRODUCTS_DATA } from './productsData';
import { SERVICES_DATA } from './servicesData';

export const MENU_DATA = {
  products: PRODUCTS_DATA.map(p => ({
    name: p.title,
    icon: p.icon,
    logo: p.logo,
    link: `/products/${p.slug}`
  })),
  services: SERVICES_DATA.map(s => ({
    name: s.title,
    icon: s.icon,
    link: `/services/${s.slug}`
  })),
  investors: [
    { name: 'Board and Management', icon: 'user-friends-solid', link: '#' },
    { name: 'Group Companies', icon: 'building', link: '#' },
    { name: 'Financial Information & Statutory Reports', icon: 'chart-line-solid', link: '#' },
    { name: 'Corporate Governance', icon: 'shield-alt-solid', link: '#' },
    { name: 'Investor Contacts/Grievances', icon: 'headset-solid', link: '#' },
    { name: 'Material Creditors', icon: 'coins-solid', link: '#' },
    { name: 'Preferential Allotment of Warrants', icon: 'box', link: '#' },
    { name: 'Material Contracts', icon: 'book-solid', link: '#' },
    { name: 'Material Documents', icon: 'paperclip-solid', link: '#' },
    { name: 'Investor Analyst Meet', icon: 'comments-solid', link: '#' },
    { name: 'Annual Reports', icon: 'book-open-solid', link: '#' },
    { name: 'Notice of Meetings', icon: 'bell', link: '#' },
    { name: 'Dividend', icon: 'coins-solid', link: '#' },
    { name: 'Announcement', icon: 'bullseye-solid', link: '#' },
  ],
  resource: [
    { name: 'Blog', icon: 'book-open-solid', link: '/blog-standard' },
    { name: 'News', icon: 'paper-plane', link: '#' },
    { name: 'Press', icon: 'comment-quote', link: '#' },
    { name: 'Media', icon: 'video-solid', link: '#' },
    { name: 'Video', icon: 'play-solid', link: '#' },
  ]
};
