import React from "react";

// 関数を使ってコンポーネントを表現する
/*
 * 引数のpropsは、呼び出し元で引数的なものとして
 * 渡されたものがオブジェクトの形で入る（子要素は最後に入る）
 */
const ColorfulMessage = (props) => {
  const { myColor, myFontSize, children } = props;
  // スタイル（オブジェクトの形で書く）
  const contentStyle = {
    color: myColor,
    fontSize: myFontSize,
  };

  /* .childrenで子要素を引数として受け取れる */
  return <p style={contentStyle}>{children}</p>;
};

// ColorfulMessageという関数を、他から読み込んで使用できるようにする
export default ColorfulMessage;
