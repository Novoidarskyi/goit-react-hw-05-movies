import { useState, useEffect } from 'react';
import { getTrendingFilms } from "../service/api"
import FilmList from "../components/FilmList";


const HomePage = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fn = async () => {
      const { data: {results} } = await getTrendingFilms();
    setFilms(results)
    }
    fn()
  }, [])


  return (
    <div>
      <FilmList films={films}/>
    </div>
  )
}

export default HomePage;