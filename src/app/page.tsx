import EditorBoard from "@/components/editor/board/editor";
import DeviceProvider from "@/provider/device-provider";
import EditorViewerProvider from "@/provider/editor-viewport-provider";
import InsertSidebarProvider from "@/provider/insert-sidebar-provider";

export default function Home() {
  return (
    <>
      <DeviceProvider>
        <InsertSidebarProvider>
          <EditorViewerProvider>
            <EditorBoard />
          </EditorViewerProvider>
        </InsertSidebarProvider>
      </DeviceProvider>
    </>
  );
}
