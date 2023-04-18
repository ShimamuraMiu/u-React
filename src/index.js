import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// お決まり。引数：コンポーネント関数、（HTML内の）どこに反映するか
ReactDom.render(<App />, document.getElementById("root"));
