import React from 'react';
//import { useHistory, useLocation} from 'react-router-dom';
import s from './Cast.module.css';

const Cast = ({ actors }) => {
  return (
    <>
      {' '}
      <ul className={s.foto}>
        {actors.map(actor => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
            ></img>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
