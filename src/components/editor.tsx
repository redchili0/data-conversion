import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import CodeTool from "@editorjs/code";

export default function Editor() {
  const codexEditorEl = useRef<any>(null);
  useEffect(() => {
    const editor = new EditorJS({
      holder: codexEditorEl.current,
      placeholder: "Let`s write an awesome story!",
      tools: {
        code: CodeTool
      },
      onChange: () => {
        editor
          .save()
          .then(outputData => {
            console.log("Article data: ", outputData);
          })
          .catch(error => {
            console.log("Saving failed: ", error);
          });
        console.log("Now I know that Editor's content changed!");
      }
    });
  }, []);
  return (
    <div className="editor">
      <div className="codex-editor" ref={codexEditorEl}></div>
    </div>
  );
}
