import * as React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Error } from 'components/Error/Error';

import { useSelector } from 'react-redux';

import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { EmptyContactsList } from 'components/EmptyContactList/EmptyContactList';
import { ContactList } from 'components/ContactList/ContactList';
import css from './ContactsPage.module.css';
const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const phoneBook = useSelector(selectContactsList);

  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      {error ? <Error /> : <ContactList />}
      {phoneBook.length === 0 && !error && !isLoading && <EmptyContactsList />}
    </div>
  );
};

export default ContactsPage;
