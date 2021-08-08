import React, { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Loader from './Components/Loader';

const HomePage = lazy(() =>
  import('./Components/HomePage' /*webpackChunkName: "homePage"*/),
);
const MoviesPage = lazy(() =>
  import('./Components/MoviesPage' /*webpackChunkName: "MoviePage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Components/MovieDetailsPage' /*webpackChunkName: "MovieDetaliesPage"*/
  ),
);

const App = () => (
  <>
    <ToastContainer autoClose={3000} />
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:slug">
          <MovieDetailsPage />
        </Route>
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </Suspense>
  </>
);
export default App;
