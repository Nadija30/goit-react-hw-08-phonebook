import css from './EmptyContactList.module.css';

export const EmptyContactsList = () => {
  return (
    <div className={css.emptyContactsList}>
      <h1>You don't have any contacts yet</h1>
    </div>
  );
};
