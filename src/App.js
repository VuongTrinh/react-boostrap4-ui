import React from 'react';
import PageSpinner from 'components/PageSpinner';
import componentQueries from 'react-component-queries';
import MainLayout from 'components/Layout/MainLayout';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './styles/reduction.scss';

const CardPage = React.lazy(() => import('pages/CardPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <React.Suspense fallback={<PageSpinner />}>
            <Route exact path="/buttons" component={ButtonPage} />
            <Route exact path="/cards" component={CardPage} />
        </React.Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
