import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import css from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <ul className={css.navList}>
            <li className={css.navListItem}>
              <NavLink className={css.link} to="/">
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </NavLink>
            </li>
            <li className={css.navListItem}>
              <NavLink className={css.link} to="/movies">
                <Button variant="contained" color="primary">
                  Movies
                </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
