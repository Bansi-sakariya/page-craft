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
import H1 from "../elements/typography/h-one";
import H2 from "../elements/typography/h-two";
import H3 from "../elements/typography/h-three";
import H4 from "../elements/typography/h-four";
import H5 from "../elements/typography/h-five";
import H6 from "../elements/typography/h-six";
import TestBtn from "./test-btn";
import EditorFrame from "./editor-frame";
import EditorViewerProvider, {
  useEditorViewPort,
} from "@/provider/editor-viewport-provider";

const EditorBoard = () => {
  const { device } = useContext(DeviceContext);

  const { editorViewport } = useEditorViewPort();

  console.log(device);

  return (
    <>
      {(editorViewport.selectedType == "laptop" || device.width >= 1024) && (
        <Editor
          resolver={{
            Root,
            Div,
            H1,
            H2,
            H3,
            H4,
            H5,
            H6,
          }}
        >
          <MainHeader />
          <ElementsToolbox />
          <SettingsPanel />
          <div className="flex justify-center mt-[64px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <TestBtn />
            <div
              className="p-4"
              style={{ overflowX: device.width > 1024 ? "scroll" : "hidden" }}
            >
              <Frame
                data={
                  editorViewport.state["laptop"] != null
                    ? String(JSON.stringify(editorViewport.state["laptop"]))
                    : ""
                }
              >
                <Element
                  canvas
                  is={Root}
                  styles={""}
                  data-cy="root-container"
                ></Element>
              </Frame>
            </div>
          </div>
        </Editor>
      )}
      {(editorViewport.selectedType == "tablet" ||
        (device.width >= 500 && device.width < 1024)) && (
        <Editor
          resolver={{
            Root,
            Div,
            H1,
            H2,
            H3,
            H4,
            H5,
            H6,
          }}
        >
          <MainHeader />
          <ElementsToolbox />
          <SettingsPanel />
          <div className="flex justify-center mt-[64px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            {/* <TestBtn /> */}
            <div
              className="p-4"
              style={{ overflowX: device.width > 1024 ? "scroll" : "hidden" }}
            >
              <Frame
                data={
                  editorViewport.state["tablet"] != null
                    ? String(JSON.stringify(editorViewport.state["tablet"]))
                    : ""
                }
              >
                <Element
                  canvas
                  is={Root}
                  styles={""}
                  data-cy="root-container"
                ></Element>
              </Frame>
            </div>
          </div>
        </Editor>
      )}
      {(editorViewport.selectedType == "mobile" ||
        (device.width >= 0 && device.width < 500)) && (
        <Editor
          resolver={{
            Root,
            Div,
            H1,
            H2,
            H3,
            H4,
            H5,
            H6,
          }}
        >
          <MainHeader />
          <ElementsToolbox />
          <SettingsPanel />
          <div className="flex justify-center mt-[64px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            {/* <TestBtn /> */}
            <div
              className="p-4"
              style={{ overflowX: device.width > 1024 ? "scroll" : "hidden" }}
            >
              <Frame
                data={
                  editorViewport.state["mobile"] != null
                    ? String(JSON.stringify(editorViewport.state["mobile"]))
                    : ""
                }
              >
                <Element
                  canvas
                  is={Root}
                  styles={""}
                  data-cy="root-container"
                ></Element>
              </Frame>
            </div>
          </div>
        </Editor>
      )}
    </>
  );
};

export default EditorBoard;
