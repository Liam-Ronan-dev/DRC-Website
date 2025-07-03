// src/data/projects.ts
import rikkiHouse from '../images/rikkiHouse.jpg';
import korysFence from '../images/korysFence.jpg';

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: typeof rikkiHouse;
};

export const projects: Project[] = [
  {
    slug: 'rikki-house',
    title: 'Rikki’s House',
    description:
      'New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.',
    image: rikkiHouse,
  },
  {
    slug: 'another-project',
    title: 'Another Project',
    description: 'Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.',
    image: korysFence,
  },
  {
    slug: 'rikki-house',
    title: 'Rikki’s House',
    description:
      'New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.',
    image: rikkiHouse,
  },
  {
    slug: 'another-project',
    title: 'Another Project',
    description: 'Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.',
    image: korysFence,
  },
  {
    slug: 'rikki-house',
    title: 'Rikki’s House',
    description:
      'New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.',
    image: rikkiHouse,
  },
  {
    slug: 'another-project',
    title: 'Another Project',
    description: 'Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.',
    image: korysFence,
  },
  {
    slug: 'rikki-house',
    title: 'Rikki’s House',
    description:
      'New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.New radiator cover and window casings.',
    image: rikkiHouse,
  },
  {
    slug: 'another-project',
    title: 'Another Project',
    description: 'Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.Deck and garden furniture.',
    image: korysFence,
  },
];
