import { Button } from "@/components/ui/button";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import { useEditor } from "@craftjs/core";
import React from "react";

const TestBtn = () => {
  const { query } = useEditor();
  const { editorViewport } = useEditorViewPort();
  return (
    <div>
      <Button
        onClick={() => {
          console.log("States: ", query.getState());
          console.log(
            "Serialized Nodes: ",
            JSON.stringify(query.getSerializedNodes())
          );
          console.log(editorViewport);
        }}
      >
        Render Json
      </Button>
    </div>
  );
};

export default TestBtn;
