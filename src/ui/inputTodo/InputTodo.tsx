import { Dispatch, SetStateAction, useEffect } from "react";
import { useRef } from "react";
import normalImg from "../../image/normal.svg";

import styles from "./InputTodo.module.scss";

interface IInput {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputTodo = ({ value, setValue }: IInput) => {

  const inpRef = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inpRef.current?.focus()
  },[])

  // const addTodo:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
  //   setValue(e.target.value)
  // }
  // ! это функция пример описания event. надо навести на onchange 
  // !итд и внизу написан тип

  return (
    <div className={styles.main}>
      <img src={normalImg} alt="" />
      <input
      ref={inpRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Smile"
      />
    </div>
  );
};

export default InputTodo;
