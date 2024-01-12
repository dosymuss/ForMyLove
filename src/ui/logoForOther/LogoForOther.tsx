import smileIcon from "../../image/smile.svg";
import badIcon from "../../image/gryst.svg";
import normalIcon from "../../image/normal.svg";
import animeIcon from "../../image/anime.svg";
import angryIcon from "../../image/angry.svg";
import { FC } from "react";

import styles from "./LogoForOther.module.scss";

interface LogoForOtherProps {
  item: number | null;
  text: string;
}

const LogoForOther = ({ item, text }: LogoForOtherProps) => {
  return (
    <div className={styles.main}>
      {item === 1 && <img src={smileIcon} alt="" />}
      {item === 2 && <img src={animeIcon} alt="" />}
      {item === 3 && <img src={badIcon} alt="" />}
      {item === 4 && <img src={normalIcon} alt="" />}
      {item === 5 && <img src={angryIcon} alt="" />}
      <p>{text}</p>
    </div>
  );
};

export default LogoForOther;
