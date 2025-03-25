"use client";
import React, { useContext, useEffect, useState } from "react";
import { Editor, Element, Frame } from "@craftjs/core";
import Root from "@/components/editor/elements/root";
import DeviceContext from "@/context/device-context";
import MainHeader from "./header/main-header";
import ElementsToolbox from "./tools/element-box";
import LayerBox from "./tools/layer-box";
import TestBtn from "./test-btn";



import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import SettingsPanel from "./tools/settings-panel";

import { usePathname } from "next/navigation";
import { fetchDynamicComponents } from "./editor-resolver";

interface ComponentData {
  serialize: string | undefined;
  title:any;
  // Define the structure of componentData here
}

const EditorBoard = ({ componentData }: { componentData: ComponentData }) => {
  const { device } = useContext(DeviceContext);
  const { editorViewport } = useEditorViewPort();
 
  const json = componentData?.serialize ? JSON.parse(componentData.serialize) : null;
  // Determine which layout data to use
  const currentViewport =
    editorViewport.selectedType === "laptop" && device.width >= 1024
      ? "laptop"
      : editorViewport.selectedType === "tablet" || (device.width >= 500 && device.width < 1024)
        ? "tablet"
        : "mobile";

  
  const [resolver, setResolver] = useState<Record<string, any>>({}); // Store components

  useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents = await fetchDynamicComponents();
      setResolver(loadedComponents);
    };
    loadComponents();
  }, []);
  const frameData = json
    ? json
    : editorViewport.state[currentViewport]
      ? JSON.stringify(editorViewport.state[currentViewport])
      : "";

  // console.log("resolver", resolver)
  return (
    <>
      {Object.keys(resolver).length > 0 && (
        <Editor resolver={resolver}> {/* Dynamically loaded resolver */}
          {/* Main Controls */}
          <MainHeader  componentData={componentData} />
          <ElementsToolbox />
          <LayerBox />
          <SettingsPanel /> {/* Automatically adapts to viewport */}

          {/* Editor Canvas */}
          <div className="p-4 d-flex mt-[64px] align-items-center justify-content-center  ">

          </div>
          <div className="flex justify-center pt-[20px]   bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            {/* <TestBtn /> */}
            <div className="p-4" style={{ overflowX: device.width > 1024 ? "scroll" : "hidden" }}>

              <Frame data={frameData}>
              <Element canvas is={Root} styles={""} data-cy="root-container"></Element>
              </Frame>
          </div>
        </div>
    </Editor >
      )}
    </>
  );
};

export default EditorBoard;