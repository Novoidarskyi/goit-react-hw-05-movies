import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from 'components/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route>{/* <MovieDetailsPage path="/movies/:movieId" /> */}</Route>
      </Switch>
    </div>
  );
}

export default App;
