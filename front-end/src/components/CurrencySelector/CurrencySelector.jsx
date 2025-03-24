import { nanoid } from "nanoid";
import { CURRENCIES } from "../../constans/curriencies";
import css from "./CurrencySelector.module.css";

export const CurrencySelector = () => {
  return (
    <>
      <select className={css.currencySelector}>
        {CURRENCIES.map((currency) => {
          return (
            <option value={currency.name} key={nanoid()}>
              {currency.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
