import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = () => {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      async function init() {
        CodeMirror.fromTextArea(document.getElementById("realTimeEditor"), {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        });
      }
      init();
    }
    // async function init() {
    //   CodeMirror.fromTextArea(document.getElementById("realTimeEditor"), {
    //     mode: { name: "javascript", json: true },
    //     theme: "dracula",
    //     autoCloseTags: true,
    //     autoCloseBrackets: true,
    //     lineNumbers: true,
    //   });
    // }
    // init();
  }, []);
  return <textarea className="w-screen text-white" id="realTimeEditor"></textarea>;
};

export default Editor;
