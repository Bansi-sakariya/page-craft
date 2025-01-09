import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import { Frame } from "@craftjs/core";
import React, { useContext } from "react";

const EditorFrame = ({ children }: { children: React.ReactNode }) => {
  const { editorViewport } = useEditorViewPort();

  console.log("Editor ViewPort", editorViewport);

  return (
    <>
      <Frame
        json={
          editorViewport.state[editorViewport.selectedType] != null
            ? String(
                JSON.stringify(
                  editorViewport.state[editorViewport.selectedType]
                )
              )
            : ""
        }
      >
        {children}
      </Frame>
    </>
  );
};

export default EditorFrame;
