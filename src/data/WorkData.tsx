interface WorkItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
}

export const Work: WorkItem[] = [
  {
    id: '1',
    name: 'Botw Compendium App',
    description:
      'Built using Hyrule-Compendium-API. Replica of the The Legend of Zelda: Breath of the Wild Compendium in the browser',
    tags: ['Ruby on Rails', 'CSS', 'API'],
    demo: '',
    github: 'https://github.com/mcook-2/botw-compendium-app.git',
  },
  {
    id: '2',
    name: 'Kimi no Bento ',
    description:
      'PHP-based CMS that lets users create accounts, post pictures and forums about their favorite bento boxes. It also includes an admin panel for managing site content.',
    tags: ['PHP', 'JavaScript', 'CMS'],
    demo: '',
    github: 'https://github.com/mcook-2/cms-kimi-no-bento.git',
  },
  {
    id: '3',
    name: '2000 Viper Corp',
    description:
      'E-commerce Site. Built from ground up. Clothing retailer that specializes in Y2K and vaporwave-inspired fashion',
    tags: ['Ruby on Rails', 'E-commerce', 'Sass'],
    demo: '',
    github: 'https://github.com/mcook-2/viper_corp',
  },
  {
    id: '4',
    name: 'Winnipeg Park & Open Space Map',
    description:
      "A dynamic map of Winnipeg's parks and open spaces using Leaflet API and AJAX to fetch and display GeoJSON data.",
    tags: ['JavaScript', 'CSS', 'HTML'],
    demo: 'https://mcook-2.github.io/winnipeg-parks-map/',
    github: 'https://github.com/mcook-2/winnipeg-parks-map.git',
  },
];
