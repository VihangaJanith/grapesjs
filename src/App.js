import React, { useState, useEffect } from "react";
import "./App.css";
import grapesjs from "grapesjs";
import gjsWebpagePreset from "grapesjs-preset-webpage";

function App() {
  const blocksData = [
    {
      id: "custom-block-1",
      label: "Custom Block #1",
      content: "<div class='my-custom-block1'>This is a custom block</div>",
      category: "Assets",
      media:
        "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z' /></svg>",
    },
    {
      id: "custom-block-2",
      label: "Custom Block #2",
      content: "<div class='another-custom-block'>Another custom block</div>",
      category: "Assets",
      media:
        "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z' /></svg>",
    },
  ];

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsWebpagePreset],
      pluginsOpts: {
        blocks: [
          "column1",
          "column2",
          "column3",
          "column3-7",
          "text",
          "link",
          "image",
          "video",
        ],
        flexGrid: 1,
        gjsWebpagePreset: {},
      },
    });

    // Add custom blocks to the editor
    blocksData.forEach((block) => {
      editor.BlockManager.add(block.id, {
        label: block.label,
        content: block.content,
        category: block.category,
        media: block.media,
      });
    });
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
}

export default App;
