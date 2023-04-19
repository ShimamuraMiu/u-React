import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 状態の宣言、初期化
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  let isDisabled = incompleteTodos.length >= 5;

  // リストからTODOを消す関数
  function deleteTodo(index, array, setArray) {
    const newTodos = [...array];
    newTodos.splice(index, 1);
    setArray(newTodos);
  }

  // TODOの表示処理関数
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // TODOの追加処理関数
  const onClickAddTodo = () => {
    if (todoText != "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  // TODOの削除処理関数
  const onClickDelete = (index) => {
    deleteTodo(index, incompleteTodos, setIncompleteTodos);
  };

  // TODOの完了処理関数
  const onClickComplete = (index) => {
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);

    deleteTodo(index, incompleteTodos, setIncompleteTodos);
  };

  // TODOの戻す処理関数
  const onClickBack = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);

    deleteTodo(index, completeTodos, setCompleteTodos);
  };

  // component
  return (
    <>
      {/* TODO入力 */}
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAddTodo={onClickAddTodo}
        isDisabled={isDisabled}
      />

      {/* 警告 */}
      {isDisabled && <p>登録できるTOODは5個までです。</p>}

      {/* 未完了 */}
      <IncompleteTodos
        todoArray={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />

      {/* 完了 */}
      <CompleteTodos todoArray={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
