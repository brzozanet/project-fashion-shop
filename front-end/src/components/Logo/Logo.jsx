import css from "./Logo.module.css";
import LOGO_SHOP from "../../assets/logoShopOnline.png";

export const Logo = () => {
  return (
    <>
      <div className={css.logo}>
        <img src={LOGO_SHOP} height="50" alt="" title="" />
      </div>
      {/* <h1 className={css.logoText}>React Shop Online®</h1> */}
    </>
  );
};
