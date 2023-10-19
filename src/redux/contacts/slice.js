import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [getContactsThunk, createContactsThunk, deleteContactsThunk];

const arrTypeThunk = type => arrThunk.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrTypeThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;

export const selectContactsList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
