import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 状態の宣言、初期化
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
      <div className="input-area">
        <p className="title">お前がやることを書きだせ</p>
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddTodo}>追加</button>
      </div>

      {/* 未完了 */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              /*
               * ・CSS（横並びにする）を使うためにdivで囲う
               * ・再レンダリング（差分のみ書き換える）の際にどのリストが変更されたかを
               * 　保持するために、keyを使用する。ループを使用する際に気を付けること
               */
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* 完了 */}
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
