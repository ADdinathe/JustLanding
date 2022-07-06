import * as React from 'react';
import './Onboarding.module.scss';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import { Title } from 'components/Titile';
import { RouteEnum } from 'config/routes';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div styleName="onboarding">
      <div styleName="content">
        <Title styleName="content__title">
          Lorem
          <div styleName="red">
            {' '}
            <span styleName="dot" />
            <span styleName="stick" />
            psum
          </div>
          , dolor sit amet
        </Title>
        <p styleName="content__text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>

        <div styleName="content__button-group">
          <Button onClick={() => navigate(RouteEnum.main)} type={ButtonType.primary}>
            Apply Now
          </Button>
          <Button onClick={() => navigate(RouteEnum.main)} type={ButtonType.secondary}>
            Sign up
          </Button>
        </div>
      </div>
      <div styleName="picture" />
    </div>
  );
};

export default React.memo(OnboardingPage);
