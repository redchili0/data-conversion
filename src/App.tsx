import React, { useState } from "react";
import AceEditorPro from "./components/ace_editor";
import Content from "./components/content";
import {transToColumn, transToSchema, transToDescripionts} from "./util/transform";

import "./App.css";

const App: React.FC = () => {
  const [data, setData] =useState();
  const onConfirm = (val:string) => {
    setData(val);
  }
  return (
    <div className="App">
      <AceEditorPro  onConfirm={onConfirm}/>
      <div className="content-box">
        <h2>antd table columns</h2>
        <Content data={data ? transToColumn(data) : ""}/>
        <h2>uform schema</h2>
        <Content data={data ? transToSchema(data): ""} />
        <h2>antd descriptions</h2>
        <Content data={data ? transToDescripionts(data): ""} />
      </div>
    </div>
  );
};

export default App;
