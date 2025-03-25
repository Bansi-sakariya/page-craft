import EditorBoard from "@/components/editor/board/editor";
import DeviceProvider from "@/provider/device-provider";
import EditorViewerProvider from "@/provider/editor-viewport-provider";
import InsertLayerProvider from "@/provider/insert-layer-provider";
import InsertSidebarProvider from "@/provider/insert-sidebar-provider";

export default function addcomponent() {
  return (
    <>
      <DeviceProvider>
        <InsertSidebarProvider>
          <InsertLayerProvider>
          <EditorViewerProvider>
            <EditorBoard componentData={{ serialize: undefined, title: undefined }} />
          </EditorViewerProvider>
          </InsertLayerProvider>
        </InsertSidebarProvider>
      </DeviceProvider>
    </>
  );
}
