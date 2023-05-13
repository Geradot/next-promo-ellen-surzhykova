import { useEffect, useState } from "react";
import styles from "./NavDresses.module.scss";
import clsx from "clsx";
import MyPopover from "../my-popover/MyPopover";

export default function NavDresses({ onData }) {
  const DRESSES_TYPE = JSON.parse(process.env.DRESSES_TYPE);
  const keys = Object.keys(DRESSES_TYPE);

  const [wedding, setWedding] = useState(true);
  const [cocktail, setCocktail] = useState(false);
  const [informal, setInformal] = useState(false);

  function handlerGallery(type) {
    switch (type) {
      case "wedding":
        setWedding(true);
        setCocktail(false);
        setInformal(false);
        break;
      case "cocktail":
        setWedding(false);
        setCocktail(true);
        setInformal(false);
        break;
      case "informal":
        setWedding(false);
        setCocktail(false);
        setInformal(true);
        break;
    }
    onData(type);

    // TODO: По возможности — переделать стейты под один объект
    // и использовать этот код ↓
    // setSomeState((prevState) => ({
    //   ...Object.fromEntries(Object.keys(prevState).map((key) => [key, key == type])),
    // }));
  }
  return (
    <nav className={clsx(styles[`tab-menu`], "mb-2")}>
      <MyPopover />
      <div className={clsx(styles[`dresses-types`], "flex gap-3 items-center")}>
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
      </div>
    </nav>
  );
}
