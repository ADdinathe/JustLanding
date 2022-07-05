import * as React from 'react';
import { render } from 'react-dom';

import App from './App';
import './styles/styles.scss';

const startApp = () => {
  render(<App />, document.getElementById('root'));
};

startApp();
