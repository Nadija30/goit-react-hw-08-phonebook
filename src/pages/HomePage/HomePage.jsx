import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={css.contentPageContainer}>
      {isLoggedIn ? (
        <>
          <h1 className={css.title}>
            Hi, {user.name}! <br />
            Welcome to your phonebook.
          </h1>
        </>
      ) : (
        <>
          <h1 className={css.title}>Hello! I'm your phonebook.</h1>
          <h2 className={css.title}>
            Please log in to your account or register.
          </h2>

          <button className={css.button}>
            <NavLink to="/login">Sign In</NavLink>
          </button>
        </>
      )}
    </div>
  );
}
