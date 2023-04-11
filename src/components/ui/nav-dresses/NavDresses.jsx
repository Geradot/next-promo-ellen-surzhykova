import { useState } from "react";
import styles from "./NavDresses.module.scss";
import clsx from "clsx";

export default function NavDresses({ onData }) {
  const DRESSES_TYPE = JSON.parse(process.env.DRESSES_TYPE);
  const keys = Object.keys(DRESSES_TYPE);

  const [wedding, setWedding] = useState(true);
  const [cocktail, setCocktail] = useState(false);
  const [informal, setInformal] = useState(false);

  function handlerGallery(type) {
    setWedding(prev => prev == type)
    setCocktail(prev => prev == type)
    setInformal(prev => prev == type)
    onData(type);

    // TODO: По возможности — переделать стейты под один объект
    // и использовать этот код ↓
    // setSomeState((prevState) => ({
    //   ...Object.fromEntries(Object.keys(prevState).map((key) => [key, key == type])),
    // }));
  }
  return (
    <nav className={clsx(styles[`tab-menu`], "mb-3")}>
      <button
        type="button"
        className="btn btn-md btn-light"
        data-bs-toggle="popover"
        data-bs-title="Contacts"
        data-bs-placement="right"
        data-bs-html="true"
        data-bs-content='
            <div class="contacts">
                <div class="btn btn-outline-warning email">
                <img src="./assets/icons/email.svg" alt="Email icon" />
                <a href="mailto:Luna1lika@gmail.com">Luna1lika@gmail.com</a>
                </div>
                <div class="btn btn-outline-warning phone">
                <img src="./assets/icons/phone.png" alt="Phone icon" />
                <a href="tel:+17124496163">+1&nbsp;(712)&nbsp;449-6163</a>
                </div>
            </div>
            '
      >
        <i
          aria-hidden="true"
          className="fa fa-circle-info"
          style={{ fontSize: 18, verticalAlign: "middle" }}
        />
      </button>
      {keys.map((key) => (
        <div
          key={key}
          onClick={() => handlerGallery(key)}
          className={clsx({
            [styles.active]: eval(key) === true,
          })}
          data-tab={key}
        >
          {DRESSES_TYPE[`${key}`]}
        </div>
      ))}
    </nav>
  );
}
