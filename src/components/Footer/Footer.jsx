import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.footerText}>
        &copy; {new Date().getFullYear()} Movie finder footer
      </p>
    </footer>
  );
};
export default Footer;
