import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { ROUTES } from './config';

import './Root.scss';

const Root: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {ROUTES.map(({ path, PageComponent }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageComponent />
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default observer(Root);
