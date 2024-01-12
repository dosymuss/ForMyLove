import smileIcon from "../../image/smile.svg";
import badIcon from "../../image/gryst.svg";
import normalIcon from "../../image/normal.svg";
import animeIcon from "../../image/anime.svg";
import angryIcon from "../../image/angry.svg";
import { useEffect, useState } from "react";

import styles from "./Logo.module.scss"


const Logo = () => {
  const [randomItem, setRandomItem] = useState<number>(0);

  const getRandomItem = (): number => {
    const rand = Math.floor(Math.random() * 5) + 1;
    if (rand > 5 || rand === 0) {
      getRandomItem();
    }
    return rand;
  };

  useEffect(() => {
    const x = setInterval(() => {
      setRandomItem(getRandomItem());
    }, 3000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className={styles.main}>
      {randomItem === 1 && <img src={smileIcon} alt="" />}
      {randomItem === 2 && <img src={animeIcon} alt="" />}
      {randomItem === 3 && <img src={badIcon} alt="" />}
      {randomItem === 4 && <img src={normalIcon} alt="" />}
      {randomItem === 5 && <img src={angryIcon} alt="" />}

      <p>BeSmile</p>
    </div>
  );
};

export default Logo;
