import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.Navigation}>
    <NavLink
      exact
      to="/"
      className={s.NavLink}
      activeClassName={s.NavLinkActive}
    >
      Home
    </NavLink>

    <NavLink
      to={'/movies'}
      className={s.NavLink}
      activeClassName={s.NavLinkActive}
    >
      Movies
    </NavLink>
  </nav>
);
export default Navigation;
