import smileIcon from "../../image/smile.svg";
import badIcon from "../../image/gryst.svg";

import styles from "./LogOut.module.scss";
import { Dispatch, FC, SetStateAction, useRef } from "react";

interface IModalProp {
click:boolean
setClick:Dispatch<SetStateAction<boolean>>
}

const LogOutModal:FC<IModalProp> = ({click, setClick}) => {

  return (
    <div className={click?styles.wrap:styles.wrapHiden} onClick={()=>setClick(false)}>
      <div className={styles.main}>
        <p>Вы точно хотите выйти?</p>
        <p>Z k.,k. nt,z Yeh;fy</p>
        <div className={styles.btnDiv}>
          <button onClick={()=>setClick(false)}>
            <img src={smileIcon} alt="" />
            Нет
          </button>
          <button>
            <a href="https://www.google.ru/?hl=ru">
              <img src={badIcon} alt="" />
            </a>
            Да
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
