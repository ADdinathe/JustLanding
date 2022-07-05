import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteEnum } from 'config/routes';

import './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div styleName="main">
      <h1 styleName="main__title">Главная</h1>
      <Link to={RouteEnum.onboarding} styleName="main__link">
        К онбордингу
      </Link>
    </div>
  );
};

export default React.memo(MainPage);
