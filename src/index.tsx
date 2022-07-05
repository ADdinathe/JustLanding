import * as React from 'react';
import { render } from 'react-dom';

import { initResize } from 'utils/resize';

import App from './App';
import './styles/styles.scss';

const startApp = () => {
  initResize();

  render(<App />, document.getElementById('root'));
};

startApp();
