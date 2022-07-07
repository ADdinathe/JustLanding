import * as React from 'react';

import { RouteEnum } from 'config/routes';
import { loadImage } from 'utils/loadImage';
// import MainPage from 'pages/MainPage';
// import OnboardingPage from 'pages/OnboardingPage';

type RouteType = {
  path: RouteEnum;
  PageComponent: React.ComponentType;
};

// const OnboardingPage = React.lazy(() => import('pages/OnboardingPage'));

const OnboardingPage = React.lazy(() =>
  Promise.all([import('pages/OnboardingPage'), loadImage([require('pages/OnboardingPage/img/pic.png')])]).then(
    ([moduleExports]) => moduleExports
  )
);

const MainPage = React.lazy(() => import('pages/MainPage'));

const ROUTES: RouteType[] = [
  {
    path: RouteEnum.main,
    PageComponent: MainPage,
  },
  {
    path: RouteEnum.onboarding,
    PageComponent: OnboardingPage,
  },
];

export { ROUTES };
