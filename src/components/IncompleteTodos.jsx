import React from "react";

export const IncompleteTodos = (props) => {
  const { todoArray, onClickDelete, onClickComplete } = props;
  return (
    /* 未完了 */
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todoArray.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
