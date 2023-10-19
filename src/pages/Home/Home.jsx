import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelector';
import css from './Home.module.css';

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
            <link to="/login">Sign In</link>
          </button>
        </>
      )}
    </div>
  );
}
