import React, { useState } from "react";
import AceEditor from "react-ace";
import _throttle from "lodash.throttle";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

interface Props {
    onConfirm: (val: string) => void
}

export default function AceEditorPro(props: Props) {
  const [value, setValue] = useState("");
  const onChange = _throttle((newValue: string) => {
    setValue(newValue);
  }, 1500);

  const onSubmit = () => {
    props.onConfirm(value);
  };

  return (
    <div className="ace_editor_pro">
      <div className="ace_editor_box">
        <AceEditor
          height="300px"
          mode="json"
          value={value}
          theme="github"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <button onClick={onSubmit}>确认</button>
    </div>
  );
}
