"use client";

import { SerializedNodes } from "@craftjs/core";
import { createContext } from "react";

export type EditorViewportContextProp = {
  editorViewport: {
    selectedType: "laptop" | "tablet" | "mobile";
    state: {
      laptop: SerializedNodes | null;
      tablet: SerializedNodes | null;
      mobile: SerializedNodes | null;
    };
  };
  setEditorViewport: (val: {
    selectedType: "laptop" | "tablet" | "mobile";
    state: {
      laptop: SerializedNodes | null;
      tablet: SerializedNodes | null;
      mobile: SerializedNodes | null;
    };
  }) => void;
};

const EditorViewportContext = createContext<EditorViewportContextProp>({
  editorViewport: {
    selectedType: "laptop",
    state: {
      laptop: null,
      tablet: null,
      mobile: null,
    },
  },
  setEditorViewport: () => {},
});

export default EditorViewportContext;
