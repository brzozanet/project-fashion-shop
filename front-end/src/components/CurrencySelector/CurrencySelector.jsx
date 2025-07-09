import { nanoid } from "nanoid";
import { CURRENCIES } from "../../constans/curriencies";
import css from "./CurrencySelector.module.css";

export const CurrencySelector = ({ setCurrency }) => {
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <select className={css.currencySelector} onChange={handleCurrencyChange}>
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
