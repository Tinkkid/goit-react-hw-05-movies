// import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <section>
      <header>Hello</header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </section>
  );
};

export default SharedLayout;
