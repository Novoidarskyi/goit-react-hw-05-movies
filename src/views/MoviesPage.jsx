import { useState } from 'react';
import FilmList from '../components/FilmList'
import { getFilmsByQuery } from '../service/api';

function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [films, setFilms] = useState([]);

  const handleChange = e => setInputValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    getFilmsByQuery(inputValue).then(response => setFilms(response.data.results));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit"></button>
      </form>
      <FilmList films={films}/>
    </div>
  );
}

export default MoviesPage;
