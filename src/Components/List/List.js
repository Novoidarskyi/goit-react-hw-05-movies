import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import s from './List.module.css';

export default function List({ data }) {
  const location = useLocation();

  return (
    <div>
      <ul className={s.filmList}>
        {data.map(item => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${slugify(`${item.title} ${item.id}`, {
                  lower: true,
                })}`,
                state: { from: location },
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
