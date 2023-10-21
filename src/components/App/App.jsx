import { Routes, Route } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authThunk';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
