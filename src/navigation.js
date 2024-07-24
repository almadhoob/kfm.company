import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Insights',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get App', href: getPermalink('/app') }],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Apple App Store', href: '#' },
        { text: 'Google App Store', href: '#' },
        { text: 'Admin Dashboard', href: '#' },
        { text: 'Feature Request', href: '#' },
        { text: 'Problem Report', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Advertisement', href: '#' },
        { text: 'Market Research', href: '#' },
        { text: 'Graphic Design', href: '#' },
        { text: 'Video Creation', href: '#' },
        { text: 'Podcast Making', href: '#' },
      ],
    },
    {
      title: 'Channels',
      links: [
        { text: 'KFM Bahrain', href: '#' },
        { text: 'KFM Riyadh', href: '#' },
        { text: 'KFM Qatar', href: '#' },
        { text: 'KFM Interviews', href: '#' },
        { text: 'KFM Podcast', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Get To Know', href: '#' },
        { text: 'Get Connected', href: '#' },
        { text: 'Find Careers', href: '#' },
        { text: 'Have Insights', href: '#' },
        { text: 'Join Newsletter', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Copyright © 2024 <a class="text-blue-600 underline dark:text-muted" href="https://amstalks.com/" target="_blank">AMS</a>. All Rights Reserved.
  `,
};
