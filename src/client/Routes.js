import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutMe from './pages/AboutMe';
import Ventures from './pages/Ventures';
import Skills from './pages/Skills';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Connect from './pages/Connect';

export default [
  {
    path: `/connect`,
    exact: true,
    ...App,
    routes: [
      {
        ...Connect,
      },
    ],
  },
  {
    path: `/skills/:skill/:project`,
    exact: true,
    ...App,
    routes: [
      {
        ...Project,
      },
    ],
  },
  {
    path: `/skills/:skill`,
    exact: true,
    ...App,
    routes: [
      {
        ...Skill,
      },
    ],
  },
  {
    path: '/skills',
    exact: true,
    ...App,
    routes: [
      {
        ...Skills,
      },
    ],
  },
  {
    path: '/ventures',
    exact: true,
    ...App,
    routes: [
      {
        ...Ventures,
      },
    ],
  },
  {
    path: '/about',
    exact: true,
    ...App,
    routes: [
      {
        ...AboutMe,
      },
    ],
  },
  {
    path: '/',
    exact: true,
    ...App,
    routes: [
      {
        ...HomePage,
      },
    ],
  },
  {
    path: '*',
    ...App,
    routes: [
      {
        ...NotFoundPage,
      },
    ],
  },
];
