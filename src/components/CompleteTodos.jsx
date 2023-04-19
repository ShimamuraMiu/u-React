import React from "react";

export const CompleteTodos = (props) => {
  const { todoArray, onClickBack } = props;
  return (
    /* 完了 */
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todoArray.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
