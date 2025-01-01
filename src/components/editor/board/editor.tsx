"use client";

import React, { useContext } from "react";
import { Editor, Element, Frame } from "@craftjs/core";
import Root from "@/components/editor/elements/root";
import DeviceContext from "@/context/device-context";
import clsx from "clsx";
import MainHeader from "./header/main-header";
import ElementsToolbox from "./tools/element-box";
import SettingsPanel from "./tools/settings-panel";
import Div from "../elements/basic/div";

const EditorBoard = () => {
  const { device } = useContext(DeviceContext);

  return (
    <Editor
      resolver={{
        Root,
        Div,
      }}
    >
      <MainHeader />
      <ElementsToolbox />
      <SettingsPanel />
      <div className="flex justify-center mt-[64px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div
          className="p-4"
          style={{ overflowX: device.width > 1024 ? "scroll" : "hidden" }}
        >
          <Frame>
            <Element canvas is={Root} styles={""} data-cy="root-container">
              <Element styles="p-3 border rounded-sm" is={Div} canvas>
                
              </Element>
            </Element>
          </Frame>
        </div>
      </div>
    </Editor>
  );
};

export default EditorBoard;
