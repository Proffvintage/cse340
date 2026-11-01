// Course-provided placeholder content for the initial service directory.
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Organizations', href: '/organizations' },
  { label: 'Projects', href: '/projects' },
  { label: 'Categories', href: '/categories' },
];

export const organizations = [
  { id: 'brightfuture', name: 'BrightFuture Builders', email: 'info@brightfuture.org', logo: '/images/brightfuture-logo.png' },
  { id: 'greenharvest', name: 'GreenHarvest Growers', email: 'contact@greenharvest.org', logo: '/images/greenharvest-logo.png' },
  { id: 'unityserve', name: 'UnityServe Volunteers', email: 'hello@unityserve.org', logo: '/images/unityserve-logo.png' },
];

export const projects = [
  { id: 'park-cleanup', name: 'Park Cleanup', description: 'Join us to clean up local parks and make them beautiful!', category: 'Environmental', categoryId: 'environmental' },
  { id: 'food-drive', name: 'Food Drive', description: 'Help collect and distribute food to those in need.', category: 'Community Service', categoryId: 'community-service' },
  { id: 'community-tutoring', name: 'Community Tutoring', description: 'Volunteer to tutor students in various subjects.', category: 'Educational', categoryId: 'educational' },
];

export const categories = [
  { id: 'environmental', name: 'Environmental', description: 'Care for the places we share. Help keep parks, gardens, and green spaces thriving.', accent: 'green' },
  { id: 'educational', name: 'Educational', description: 'Share what you know. Support learning through tutoring, mentoring, and encouragement.', accent: 'blue' },
  { id: 'community-service', name: 'Community Service', description: 'Show up for your neighbors. Strengthen everyday connections through practical acts of service.', accent: 'amber' },
  { id: 'health-and-wellness', name: 'Health and Wellness', description: 'Help people feel supported. Contribute to a healthier, more caring community.', accent: 'rose' },
];
