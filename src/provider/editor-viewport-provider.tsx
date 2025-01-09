"use client";
import EditorViewportContext, {
  EditorViewportContextProp,
} from "@/context/editor-viewport-context";
import React, { useContext, useState } from "react";

const EditorViewerProvider = ({ children }: { children: React.ReactNode }) => {
  const [editorViewport, setEditorViewport] = useState<
    EditorViewportContextProp["editorViewport"]
  >({
    selectedType: "laptop",
    state: {
      laptop: null,
      tablet: null,
      mobile: null,
    },
  });

  return (
    <EditorViewportContext.Provider
      value={{ editorViewport, setEditorViewport }}
    >
      {children}
    </EditorViewportContext.Provider>
  );
};

export default EditorViewerProvider;

export const useEditorViewPort = () => useContext(EditorViewportContext);

// Create Editor Frame to add the Data to Frame by Default
// Add Functionality to change and save the data when switching to Laptop, Tablet or Mobile.
// Also handle case where if something is empty and you are switching to another device type, you need to copy the whole data to the other device as well.
