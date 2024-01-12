import { useState } from "react";
import LogoForOther from "../ui/logoForOther/LogoForOther";
import TodoTask from "../ui/todoTask/TodoTask";
import InputTodo from "../ui/inputTodo/InputTodo";
import normalImg from "../image/normal.svg";

import styles from "../styles/TodosPage.module.scss";
import { ITodo } from "../types/types";
import TodoErorModal from "../ui/todoErrorModal/TodoErorModal";
import ExampleTask from "../layout/examTask/ExampleTask";

const TodosPage = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [value, setValue] = useState<string>("");

  // const fetchTodos = async () => {
  //   try {
  //     const result = await getTodos();
  //     console.log(result);
  //     if (Array.isArray(result)) {
  //       setData(result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addTodo = () => {
    if(value.length>0){
      const obj: ITodo = {
        completed: false,
        id: Date.now(),
        title: value,
      };
      setData([obj, ...data]);
      setValue("");
    }

  };

  return (
    <div className={data.length < 7 ? styles.mainNoContent : styles.main}>
      <LogoForOther item={4} text="Todos" />
      <div className={styles.contentDiv}>
        <div className={styles.taskDiv}>
          <ExampleTask text="Любить Нуржан всю жизнь"/>
          <ExampleTask text="Быть ей опорой"/>
          <ExampleTask text="Осчастливить ее"/>
          <ExampleTask text="Быть с ней до конца"/>
          {data.length > 0 &&
            data.map((item) => (
              <TodoTask
                completed={item.completed}
                id={item.id}
                title={item.title}
                key={item.id}
                data={data}
                setData={setData}
              />
            ))}
        </div>
        <div className={styles.inpDiv}>
          <InputTodo value={value} setValue={setValue} />
          <button onClick={addTodo} className={styles.addBtn}>
            Добавить
          </button>
        </div>
      </div>

      <div className={styles.bacImg}>
        <img src={normalImg} alt="" />
      </div>
    </div>
  );
};

export default TodosPage;
