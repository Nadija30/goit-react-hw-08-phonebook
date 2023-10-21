import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunk';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div
      className={css.userMenu}
      sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}
    >
      Welcome, {user.name}!
      <button
        className={css.button}
        variant="text"
        color="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};
