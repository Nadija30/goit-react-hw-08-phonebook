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
          <h1>
            Hi, {user.name}! <br />
            Welcome to your phonebook.
          </h1>
        </>
      ) : (
        <>
          <h1>
            Hello! I'm your phonebook.
            <p>Please log in to your account or register.</p>
          </h1>
          <button>
            <NavLink to="/login">Sign In</NavLink>
          </button>
        </>
      )}
    </div>
  );
}
