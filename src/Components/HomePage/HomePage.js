import React, { useEffect, useState } from 'react';
import API from '../../API';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import s from './HomePage.module.css';

const HomePage = () => {
  const [dataSet, setDataSet] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line
  }, []);

  const getFetch = () => {
    API.fetchAPI()
      .then(data => {
        setDataSet([...data.results]);
      })
      .catch(error => error);
  };

  return (
    <>
      <ul className={s.filmList}>
        {dataSet &&
          dataSet.map(film => {
            let title = film.title;
            if (!title) {
              title = film.name;
            }
            return (
              <li key={film.id}>
                <Link
                  to={{
                    pathname: `/movies/${slugify(`${title} ${film.id}`, {
                      lower: true,
                    })}`,
                    state: { from: location },
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default HomePage;
