import { AppBar } from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Layaut.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  );
};
