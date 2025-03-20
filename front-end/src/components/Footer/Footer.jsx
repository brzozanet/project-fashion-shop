import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <p className={css.footerCopyright}>Developed with ❤️ by brzoza.net</p>
      </div>
    </>
  );
};
