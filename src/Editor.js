import React, { useRef } from "react";
import { render } from "react-dom";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

const Editor = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    const template = {
      body: {
        rows: [
          {
            cells: [
              {
                components: [
                  {
                    type: "text",
                    data: {
                      value: "Hello World!",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    emailEditorRef.current?.editor.loadDesign(template);
  };

  const onReady = (unlayer) => {
    if (!unlayer) {
      console.error("Unlayer object is not available");
      return;
    }

    let blocks = [
      {
        type: "text",
        name: "Simple Text",
        icon: "fa-text",
        content: "<p className='abcd'>Hello World!</p>",
      },
    ];
    try {
      unlayer.registerProvider("blocks", function (params, done) {
        console.log("blocks provider", blocks);
        done(blocks);
      });

      unlayer.reloadProvider("blocks");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onReady={onReady} onLoad={onLoad} />
    </div>
  );
};

export default Editor;
