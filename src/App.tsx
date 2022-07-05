import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from 'pages/Root';
import { rootStore } from 'store/index';

import { Header } from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider rootStore={rootStore}>
      <Header />
      <Root />
    </Provider>
  </BrowserRouter>
);

export default App;
