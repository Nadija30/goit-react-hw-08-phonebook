import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/slice';
import css from './Error.module.css';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <div className={css.wrapperError}>
      <p> Нам шкода, {error}</p>
    </div>
  );
};
