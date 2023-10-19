import { register, logIn, logOut, refreshUser } from './authThunk';
const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};
const onPending = state => {
  state.isLoggedIn = false;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const registerAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
  state.error = null;
};

const logInAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
  state.error = null;
};

const logOutAuthFulfilled = state => {
  state.isLoggedIn = false;
  state.user = { name: null, email: null };
  state.token = null;
  state.error = null;
};

const refreshUserAuthPending = state => {
  state.isLoggedIn = false;
  state.error = null;
  state.isRefreshing = true;
};

const refreshUserAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.user = payload;
  state.error = null;
  state.isRefreshing = false;
};

const refreshUserAuthrRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
  state.isRefreshing = false;
};

const arrThunk = [register, logIn, logOut];

const arrTypeThunk = status => arrThunk.map(el => el[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(register.fulfilled, registerAuthFulfilled)
      .addCase(logIn.fulfilled, logInAuthFulfilled)
      .addCase(logOut.fulfilled, logOutAuthFulfilled)
      .addCase(refreshUser.pending, refreshUserAuthPending)
      .addCase(refreshUser.fulfilled, refreshUserAuthFulfilled)
      .addCase(refreshUser.rejected, refreshUserAuthrRejected)
      .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), onPending)
      .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), onRejected);
  },
});

export const authReducer = authSlice.reducer;
