import { Dispatch, SetStateAction, useRef } from "react";
import smileImg from "../../image/smile.svg"
import badImg from "../../image/gryst.svg"

import styles from "./TodoCheckbox.module.scss"

type TTodoCheck = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
};

const TodoCheckbox = ({ value, setValue }: TTodoCheck) => {
  const checkRef = useRef<HTMLInputElement>(null);
  console.log(checkRef.current?.value);

  return (
    <div className={styles.main}>
      <button onClick={() => setValue(!value)}>
        <img src={value?smileImg:badImg} alt="" />
      </button>
      <input ref={checkRef} value={"done"} checked={value} type="checkbox" />
    </div>
  );
};

export default TodoCheckbox;
