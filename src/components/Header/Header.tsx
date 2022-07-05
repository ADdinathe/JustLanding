import * as React from 'react';

import './Header.module.scss';
import { RouteEnum } from 'config/routes';

const Header: React.FC = () => {
  return (
    <div styleName="header">
      <div styleName="header__logo" />

      <nav styleName="navigation">
        <ul styleName="navigation-list">
          <li styleName="navigation-list__item">
            <a styleName="navigation-list__item-link" href={RouteEnum.main}>
              HOME
            </a>
          </li>
          <li styleName="navigation-list__item">
            <a styleName="navigation-list__item-link" href={RouteEnum.onboarding}>
              ABOUT
            </a>
          </li>
          <li styleName="navigation-list__item">
            <a styleName="navigation-list__item-link" href={RouteEnum.main}>
              SERVICES
            </a>
          </li>
          <li styleName="navigation-list__item">
            <a styleName="navigation-list__item-link" href={RouteEnum.main}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(Header);
