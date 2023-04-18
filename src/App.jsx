import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

// 関数を使ってコンポーネントを表現する
const App = () => {
  // stateの変数名、stateの更新関数名 = useState（初期値）
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // onClickで使用したい関数
  const onClickButton = () => {
    setNum(num + 1);
  };

  /*
   * ここでstateの変更をするとまた頭から走り、またここを通ってまた頭から…を
   * 繰り返してしまう（to many re-rentersのエラーが出る）
   */
  // setFaceShowFlag(num % 3 === 0 ? true : false);
  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  // スタイル（オブジェクトの形で書く）
  const contentStyle = {
    color: "red",
    fontSize: "18px",
  };
  /*
   * ・HTMLのように書く
   * ・returnの中は1つのタグで囲われている必要があるため、
   * 　複数のタグを返したい場合は空タグ（<></>）
   * 　または<React.Fragment></React.Fragment>で囲う
   */
  return (
    /* returnの中は1つのタグで囲われている必要がある */
    <>
      {/* styleを直接反省させるとき、オブジェクトの形（{}）で指定する */}
      <h1 style={contentStyle}>こんにちは</h1>

      {/* 他のjsxで書いたColorfulMessage（コンポーネント）を読み込んで表示する */}
      <ColorfulMessage myColor="bule" myFontSize="18px">
        ここの子要素を渡すこともできる
      </ColorfulMessage>
      <ColorfulMessage myColor="pink" myFontSize="16px">
        元気です
      </ColorfulMessage>

      {/* HTML内にJavaScriptを埋めたい場合は{}の中に書く */}
      <button onClick={onClickButton}>Count Up!</button>
      <p>現在のカウント：{num}</p>

      <br />
      <button onClick={() => setFaceShowFlag(!faceShowFlag)}>
        Face on/off
      </button>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

// Appという関数を、他から読み込んで使用できるようにする
export default App;

/*
 * ・JavaScriptの中でHTMLを書いてリターンする方法をjsx記法という
 * ・コンポーネントであることを明示するため（？）に拡張子を.jsxとする
 * ・コンポーネント名は、必ず大文字で始め（そうしないとエラー）、
 * 　単語をつなげるときは_ではなく大文字にする（パスカルケースという）
 */
