import React, { Suspense, useEffect, useState, lazy } from 'react';
import { toast } from 'react-toastify';
import ApiQuery from '../../API/ApiQuery';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from '../Loader';

const List = lazy(() => import('../List'));

const MoviesPage = () => {
  const [query, setQuery] = useState(() => {
    return JSON.parse(sessionStorage.getItem('query')) ?? '';
  });
  const [data, setData] = useState(() => {
    return JSON.parse(sessionStorage.getItem('data')) ?? [];
  });
  const [loader, setLoader] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('data', JSON.stringify(query));
    sessionStorage.setItem('data', JSON.stringify(data));
    session();
    // eslint-disable-next-line
  }, [data]);

  const handelChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast('Введите что хотите найти');
      return;
    }
    getFetchQuery(query);
  };

  const session = () => {
    if (query) {
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  };

  const getFetchQuery = () => {
    setData([]);
    setLoader(true);
    ApiQuery.fetchAPIQuery(query).then(res => {
      if (res.total_results === 0) {
        toast.error(
          'Ничего не найденно по вашему запросу.Введите коректный запрос',
        );
      }
      setLoader(false);
      setData(res.results);
      setQuery('');
    });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          onChange={handelChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
        />
      </form>
      {loader && <Loader />}
      <Suspense fallback={<Loader />}>{data && <List data={data} />}</Suspense>
    </>
  );
};
export default MoviesPage;
