import { Dispatch, FC, SetStateAction, useEffect } from "react";
import angryIconWhite from "../../image/angryWhite.svg";
import styles from "./TodoError.module.scss";

interface ITodoError {
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

const TodoErorModal: FC<ITodoError> = ({ error, setError }) => {

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);
  
  return (
    <div className={error ? styles.mainAct : styles.main}>
      <img src={angryIconWhite} alt="" />
      <p>Ты еще не выполнил эту задачу, дебил</p>
    </div>
  );
};

export default TodoErorModal;
