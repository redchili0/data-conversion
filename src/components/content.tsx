import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  data: Record<string, any> | "";
}

export default function Content(props: Props) {

    
  const code = props.data ? JSON.stringify(props.data, null, 1) : "";

  return (
    <div className="code_box">
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        customStyle={{
          width: "500px",
          height: "300px",
          overflowY: "scroll"
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
