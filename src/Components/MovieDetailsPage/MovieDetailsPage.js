import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import ApiId from '../../API/ApiId';
import ApiActors from '../../API/ApiActors';
import ApiReviews from '../../API/ApiReviews';
import Loader from '../Loader';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast') /*webpackChunkName: "cast"*/);
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "Reviews"*/),
);

const MovieDetailsPage = () => {
  const { slug } = useParams();
  const { url } = useRouteMatch();

  const [idFilm, setIdFilm] = useState([null]);
  const [genres, setGenres] = useState(null);
  const [actors, setActor] = useState([null]);
  const [reviews, setReviews] = useState(null);

  const location = useLocation();
  const history = useHistory();
  console.log(history);
  console.log(location);
  const moviesId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    getFetch(moviesId);

    // eslint-disable-next-line
  }, [moviesId]);

  useEffect(() => {
    if (!idFilm) {
      return;
    }
    getFetchActor(moviesId);
    getFetchReviews(moviesId);
    // eslint-disable-next-line
  }, [idFilm]);

  const getFetch = () => {
    ApiId.fetchAPIid(moviesId)
      .then(data => {
        setIdFilm(data);
        setGenres([...data.genres]);
      })
      .catch(error => error);
  };

  const getFetchActor = () => {
    ApiActors.fetchAPIid(moviesId).then(data => {
      if (data.cast && data.cast.length > 3) {
        const slice = data.cast.slice(0, 3);
        setActor(slice);
      }
    });
  };

  const getFetchReviews = () => {
    ApiReviews.fetchAPIReviews(moviesId).then(data => {
      setReviews(data.results);
    });
  };

  const goBack = () => {
    if (
      location.pathname === `${url}/cast` ||
      location.pathname === `${url}/reviews`
    ) {
      history.push(
        location?.state?.from?.state?.from?.state?.from ||
          location?.state?.from?.state?.from ||
          '/',
      );
    }
    if (location.pathname === `${url}`) {
      history.push(location?.state?.from || `/`);
    }
  };

  return (
    <>
      <button type="button" onClick={goBack} className={s.button}>
        Go back
      </button>
      <div className={s.blokFilm}>
        {idFilm && (
          <>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w300${idFilm.poster_path}`}
              alt={idFilm.title}
            />
            <div className={s.details}>
              <h3>{idFilm.title}</h3>
              <p>User Score:{idFilm.vote_average}</p>
              <h4>Overview</h4>
              <p>{idFilm.overview}</p>
              {genres && (
                <>
                  <h4>Genres</h4>
                  <ul>
                    {genres.map(item => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <NavLink
          exact
          to={{ pathname: `${url}/cast`, state: { from: location } }}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Cast
        </NavLink>

        <NavLink
          to={{ pathname: `${url}/reviews`, state: { from: location } }}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Route path="/movies/:moviesId/cast">
          <Cast actors={actors} />
        </Route>

        <Route path="/movies/:moviesId/reviews">
          <Reviews reviews={reviews} />
        </Route>
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
