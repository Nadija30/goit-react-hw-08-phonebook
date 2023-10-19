import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/contacts/slice';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts/thunk';
import { selectContactsFilter } from 'redux/filters/slice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name?.toLowerCase().includes(filter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
