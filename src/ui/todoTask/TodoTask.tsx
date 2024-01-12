import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import TodoCheckbox from "../checkBoxTodo/TodoCheckbox";
import styles from "./TodoTask.module.scss";
import closeIcon from "../../image/closeIcon.svg";
import { ITodo } from "../../types/types";
import TodoErorModal from "../todoErrorModal/TodoErorModal";

const TodoTask: FC<
  ITodo & { data: ITodo[]; setData: Dispatch<SetStateAction<ITodo[]>> }
> = ({ completed, id, title, data, setData }) => {
  const [clickCheck, setClickCheck] = useState<boolean>(completed);
  const [deleteTodoClick, setDeleteTodoClick] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const deleteTodoFunc = () => {
    if (clickCheck) {
      const newArr = data.filter((item) => item.id !== id);
      setData(newArr);
    } else {
      setError(true);
    }
  };

  return (
    <div className={deleteTodoClick ? styles.mainDelete : styles.main}>
      <TodoErorModal error={error} setError={setError} />
      <TodoCheckbox value={clickCheck} setValue={setClickCheck} />
      <p className={clickCheck ? styles.textDone : styles.text}>{title}</p>
      <button onClick={deleteTodoFunc} className={styles.closeBtn}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};

export default TodoTask;
