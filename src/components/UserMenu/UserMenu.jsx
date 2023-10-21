import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      Welcome, {user.name}!
      <button
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
