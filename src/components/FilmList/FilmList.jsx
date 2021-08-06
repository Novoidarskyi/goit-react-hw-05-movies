import FilmListItem from "components/FilmListItem";

const FilmList = ({films}) => {
  return (
    <ul>
      {films.map((film) => (<FilmListItem key={film.id} film={film} />))}
   </ul>
  )
}

export default FilmList;