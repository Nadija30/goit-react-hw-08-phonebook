import { configureStore } from '@reduxjs/toolkit';

import { contactsReduser } from './contacts/slice';
import { filtersReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
});
