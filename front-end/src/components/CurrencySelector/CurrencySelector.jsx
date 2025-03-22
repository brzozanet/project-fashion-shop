import { CURRENCIES } from "../../constans/curriencies";
import css from "./CurrencySelector.module.css";

export const CurrencySelector = () => {
  return (
    <>
      <div>
        <select className={css.currencySelector}>
          {CURRENCIES.map((currency) => {
            return <option value={currency.name}>{currency.name}</option>;
          })}
        </select>
      </div>
    </>
  );
};
