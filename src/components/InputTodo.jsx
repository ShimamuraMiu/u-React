import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAddTodo, isDisabled } = props;
  return (
    /* TODO入力 */
    <div className="input-area">
      <p className="title">お前がやることを書きだせ</p>
      <input
        disabled={isDisabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={isDisabled} onClick={onClickAddTodo}>
        追加
      </button>
    </div>
  );
};
