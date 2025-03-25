"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EditorBoard from "@/components/editor/board/editor";
import DeviceProvider from "@/provider/device-provider";
import EditorViewerProvider from "@/provider/editor-viewport-provider";
import InsertLayerProvider from "@/provider/insert-layer-provider";
import InsertSidebarProvider from "@/provider/insert-sidebar-provider";

const CustomComponentEditor = () => {
  const { id } = useParams(); // ✅ Get ID from URL
  const [componentData, setComponentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // ✅ Prevents running before id is available

    const fetchComponent = async () => {
      try {
        const res = await fetch(`/api/custom-component/comp/${id}`);
        if (!res.ok) throw new Error("Failed to fetch component");

        const data = await res.json();
        setComponentData(data);
      } catch (error) {
        console.error("Error fetching component:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComponent();
  }, []);

  if (loading) return <p>Loading component...</p>;
  if (!componentData) return <p>Component not found.</p>;

   

  return (
    <DeviceProvider>
      <InsertSidebarProvider>
        <InsertLayerProvider>
          <EditorViewerProvider>
            <EditorBoard 
            componentData={componentData}
             />
          </EditorViewerProvider>
        </InsertLayerProvider>
      </InsertSidebarProvider>
    </DeviceProvider>
  );
};

export default CustomComponentEditor;
