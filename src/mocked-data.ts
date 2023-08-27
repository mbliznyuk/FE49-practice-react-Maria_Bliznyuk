import { PostCardModel } from './ui/post_card/post-card.model';
import { TabModel } from './ui/tabs/tab';

export const tabsModels: TabModel[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'My favorites' },
  { id: 3, name: 'Popular', isDisabled: true },
];

export const postCardModels: PostCardModel[] = [
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/2d/9f/67/2d9f676a7210c693186dac6c61a17ac9.jpg',
    text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    date: '2023-08-27',
    lesson_num: 1,
    title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 1,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/564x/90/d5/4e/90d54e958a209755a40e57e5a9e19e57.jpg',
    text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    date: '2023-08-28',
    lesson_num: 2,
    title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 2,
  },
];
