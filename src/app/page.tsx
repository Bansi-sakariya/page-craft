import EditorBoard from "@/components/editor/board/editor";
import DeviceProvider from "@/provider/device-provider";
import InsertSidebarProvider from "@/provider/insert-sidebar-provider";

export default function Home() {
  return (
    <>
      <DeviceProvider>
        <InsertSidebarProvider>
          <EditorBoard />
        </InsertSidebarProvider>
      </DeviceProvider>
    </>
  );
}
