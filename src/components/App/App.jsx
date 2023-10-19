import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contacts/slice';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContactsList);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {isLoading && <Loader />}
      {error ? <Error /> : <ContactList />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
