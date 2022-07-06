import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from 'pages/Root';


import { Header } from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
      <Header />
      <Root />
  </BrowserRouter>
);

export default App;
