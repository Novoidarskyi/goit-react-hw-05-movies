import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>{/* <HomePage path="/" exact /> */}</Route>

        <Route>{/* <MoviesPage path="/movies" exact /> */}</Route>

        <Route>{/* <MovieDetailsPage path="/movies/:movieId" /> */}</Route>
      </Switch>
    </div>
  );
}

export default App;
