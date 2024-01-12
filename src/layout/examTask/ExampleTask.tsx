import { useState } from "react";

import closeIcon from "../../image/closeIcon.svg";
import styles from "./ExampleTask.module.scss";
import TodoCheckbox from "../../ui/checkBoxTodo/TodoCheckbox";
import TodoErorModal from "../../ui/todoErrorModal/TodoErorModal";

type text = {text:string}

const ExampleTask = ({text}:text) => {
  const [clickCheck, setClickCheck] = useState<boolean>(false);
  const [deleteTodoClick, setDeleteTodoClick] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const deleteFunc = () => {
    setError(true);
  };

  return (
    <div className={deleteTodoClick ? styles.mainDelete : styles.main}>
      <TodoErorModal error={error} setError={setError} />
      <TodoCheckbox value={clickCheck} setValue={setClickCheck} />
      <p className={clickCheck ? styles.textDone : styles.text}>{text}</p>
      <button
        onClick={deleteFunc}
        className={styles.closeBtn}
      >
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};

export default ExampleTask;
