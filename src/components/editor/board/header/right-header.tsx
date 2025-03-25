"use client";

import { Button } from "@/components/ui/button";
import { useEditor } from "@craftjs/core";
import { Redo2, Undo2 } from "lucide-react";
import { IoMdEye, IoMdSettings } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useState } from "react";

interface ComponentData {
  title: any;
  serialize: string | undefined;

}
const RightHeader = ( { componentData }: { componentData: ComponentData }) => {
    const { query } = useEditor();
    const router = useRouter();
    const params = useParams();
    const comp_id = params?.id; 
     const componentName = componentData?.title;
    // console.log("componentaaaaasss",componentData.title);
     
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
   const pathname = usePathname();
   const [status, setStatus] = useState("");
   const [title, setTitle] = useState("");
 
     //  const createFile = async () => {
  //   try {
  //     const title = localStorage.getItem("title")?.trim();
  //     if (!title) {
  //       setStatus("Please enter a title");
  //       return;
  //     }
  
  //     const cssProperties =localStorage.getItem("cssProperties") || "{}";  
  //     const fileName = title.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "").toLowerCase();
  //     let data = localStorage.getItem("data") || "Default content";
  
  //     const placeholderTitle = title.charAt(0).toUpperCase() + title.slice(1) + "Placeholder";
  //     console.log("testcss", cssProperties);
  
  //     // Convert HTML to JSX and inject styles dynamically
  //     // const htmlToJsx = data
  //     //   ?.replaceAll('draggable="true"', "")
  //     //   .replace(/class=/g, "className=")
  //     //   .replace(/for=/g, "htmlFor=")
  //     //   .replace(/(<(img|input|br|hr|meta|link|source|area|base|col|embed|track|wbr)([^>]*)>)\s*/g, "$1 />")
  //     //   .replace(/style=/g, (_, id) => { return '  style={{...(cssProperties["${id}"]?.[currentViewport] || {}) }}'})
  //     //   .replace(/id="([^"]+)"/g, (_, id) => {
        
  //     //     return `id="${id}"  style={{...(cssProperties["${id}"]?.[currentViewport] || {}) }}`
  //     //   }
  //     //   )
  //     const htmlToJsx = data
  //     ?.replaceAll('draggable="true"', "")
  //     .replace(/class=/g, "className=")
  //     .replace(/for=/g, "htmlFor=")
  //     .replace(/(<(img|input|br|hr|meta|link|source|area|base|col|embed|track|wbr)([^>]*)>)\s*/g, "$1 />")
  //     // Remove existing inline styles completely
  //     .replace(/style="[^"]*"/g, "")
  //     // Inject only cssProperties dynamically per viewport
  //     .replace(/id="([^"]+)"/g, (_, id) => {
  //       return `id="${id}" style={{ ...(cssProperties["${id}"]?.[currentViewport] || {}) }}`;
  //     });
    

      
        
       
         
        
        
  
  //     const content = `import { cn } from "@/lib/utils";
  // import { DivElProps } from "@/types/element";
  // import React, { useContext } from "react";
  // import Placeholders from "../placeholders";
  // import { TbRectangle } from "react-icons/tb";
  // import { Element, useEditor, useNode } from "@craftjs/core";
  // import DeviceContext from "@/context/device-context";
  // import { useEditorViewPort } from "@/provider/editor-viewport-provider";
  
  // export const ${placeholderTitle} = () => {
  //   const {
  //     connectors: { create },
  //   } = useEditor();
  //   const { device } = useContext(DeviceContext);
  //   const { editorViewport } = useEditorViewPort();
    
  //   let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
  //   if (device.width >= 1024) {
  //     currentViewport = "laptop";
  //   } else if (device.width >= 500) {
  //     currentViewport = "tablet";
  //   } else {
  //     currentViewport = "mobile";
  //   }
  
  //   return (
  //     <Placeholders
  //       ref={(ref) => {
  //         if (ref) {
  //           create(ref as HTMLElement, <Element cssProperties={${cssProperties}} styles="p-3 border rounded-sm" is={${fileName}} canvas />);
  //         }
  //       }}
  //       icon={<TbRectangle className="text-3xl" />}
  //       text="${title}"
  //       element={<></>}
  //     />
  //   );
  // };
  //   type CustomCSSProperties = {
  //     [key: string]: {
  //       laptop: React.CSSProperties;
  //       tablet: React.CSSProperties;
  //       mobile: React.CSSProperties;
  //     };
  //   };
  // const ${fileName} = ({ children, styles, cssProperties = ${cssProperties}, ...props }: 
  //    DivElProps & { cssProperties: CustomCSSProperties }) => {
  //   const {
  //     connectors: { connect, drag },
  //   } = useNode();
  //   const { device } = useContext(DeviceContext);
  //   const { editorViewport } = useEditorViewPort();
  
  //   let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
  //   if (device.width >= 1024) {
  //     currentViewport = "laptop";
  //   } else if (device.width >= 500) {
  //     currentViewport = "tablet";
  //   } else {
  //     currentViewport = "mobile";
  //   }
  
  //   return (
  //     <div
  //       // style={{ ...(cssProperties[currentViewport] || {}) }}
  //       ref={(ref) => {
  //         if (ref) {
  //           connect(drag(ref as HTMLElement));
  //         }
  //       }}
  //       className={cn(styles)}
  //     >
  //       ${htmlToJsx}
  //     </div>
  //   );
  // };
  
  // // ${fileName}.craft = {
  // //   displayName: "${fileName}",
  // //   props: {
  // //     styles: "p-3 border rounded-sm",
  // //   },
  // //   related: {},
  // // };
  
  // export default ${fileName};
  // `;
  
  //     const response = await fetch("/api/custom-component/createfile", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ fileName: `${fileName}.tsx`, content }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to create file");
  //     }
  
  //     const result = await response.json();
  //     if (result.success) {
  //       setStatus(`File created: ${result.filePath}`);
  //     } else {
  //       setStatus(`Error: ${result.error}`);
  //     }
  //   } catch (error) {
  //     setStatus(`Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`);
  //   }
  // };
  
  //  async function saveCustomComponent() {
  //     const states = query.getState().nodes;
  
  //     // Get the root node
  //     const rootNode = states["ROOT"];
  //     if (!rootNode) {
  //       console.warn("No ROOT node found");
  //       return;
  //     }
  //     const serialized = query.serialize();
  //     console.log(serialized);
  
  //     // Get the first child of ROOT
  //     const firstChildNodeId = rootNode?.data?.nodes?.[0];
  //     if (!firstChildNodeId) {
  //       console.warn("No child nodes found under ROOT");
  //       return;
  //     }
  
  //     const firstChildNode = states[firstChildNodeId];
  //     if (!firstChildNode || !firstChildNode.dom) {
  //       console.warn("First child node has no associated DOM");
  //       return;
  //     }
  
  //     // Clone the DOM so we don't modify the original
  //     const clonedDOM = firstChildNode.dom.cloneNode(true) as HTMLElement;
  
  //     // Store all CSS properties with their corresponding node IDs
  //     const allCssProperties: { [key: string]: any } = {};
  
  //     // Recursive function to inject node IDs into the HTML elements and collect CSS
  //     const addIdsToElements = (element: HTMLElement, nodeId: string) => {
  //       if (!element) return;
  
  //       // Assign the nodeId as an id attribute
  //       element.setAttribute("id", nodeId);
  
  //       // Store the CSS properties of this node
  //       const node = states[nodeId];
  //       allCssProperties[nodeId] = node?.data?.props?.cssProperties || {}; // Ensure it's always an object
  
  //       // If this node has child nodes, update them recursively
  //       const childNodeIds = node?.data?.nodes || [];
  //       childNodeIds.forEach((childId, index) => {
  //         const childElement = element.children[index] as HTMLElement;
  //         if (childElement) {
  //           addIdsToElements(childElement, childId);
  //         }
  //       });
  //     }; 
  
  //     // Start adding IDs from the root of the HTML tree
  //     addIdsToElements(clonedDOM, firstChildNodeId);
  
  //     const response = await fetch("/api/custom-components/addcomponent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         title: ,
  //         cssProperties: JSON.stringify({ color: "red", fontSize: "16px" }),
  //         serialize: JSON.stringify({ type: "div", props: {} }),
  //         data: "<div>My Custom Component</div>",
  //       }),
  //     });
    
  //     const result = await response.json();
  //     console.log(result);
  //   }
   const createFileAndSaveComponent = async () => {
    try {
      // Ensure title is entered
      if (!title.trim()) {
        setStatus("Please enter a title");
        return;
      }
  
      const fileName = title
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/gi, "")
        .toLowerCase();
      
      const placeholderTitle = title.charAt(0).toUpperCase() + title.slice(1) + "Placeholder";
  
      // Get Craft.js state
      const states = query.getState().nodes;
      const rootNode = states["ROOT"];
      if (!rootNode) {
        console.warn("No ROOT node found");
        return;
      }
  
      const serialized = query.serialize(); // Get serialized data
      const firstChildNodeId = rootNode?.data?.nodes?.[0];
      if (!firstChildNodeId) {
        console.warn("No child nodes found under ROOT");
        return;
      }
  
      const firstChildNode = states[firstChildNodeId];
      if (!firstChildNode || !firstChildNode.dom) {
        console.warn("First child node has no associated DOM");
        return;
      }
  
      // Clone and process the DOM
      const clonedDOM = firstChildNode.dom.cloneNode(true) as HTMLElement;
      const allCssProperties: { [key: string]: any } = {};
  
      const addIdsToElements = (element: HTMLElement, nodeId: string) => {
        if (!element) return;
        element.setAttribute("id", nodeId);
        const node = states[nodeId];
        allCssProperties[nodeId] = node?.data?.props?.cssProperties || {};
        const childNodeIds = node?.data?.nodes || [];
        childNodeIds.forEach((childId, index) => {
          const childElement = element.children[index] as HTMLElement;
          if (childElement) {
            addIdsToElements(childElement, childId);
          }
        });
      };
      addIdsToElements(clonedDOM, firstChildNodeId);
  
      const updatedHtml = clonedDOM.outerHTML
        ?.replaceAll('draggable="true"', "")
        .replace(/class=/g, "className=")
        .replace(/for=/g, "htmlFor=")
        .replace(/(<(img|input|br|hr|meta|link|source|area|base|col|embed|track|wbr)([^>]*)>)\s*/g, "$1 />")
        .replace(/style="[^"]*"/g, "")
        .replace(/id="([^"]+)"/g, (_, id) => {
          return `id="${id}" style={{ ...(cssProperties["${id}"]?.[currentViewport] || {}) }}`;
        });
  
      // Construct the TSX file content
      const content = `import { cn } from "@/lib/utils";
  import { DivElProps } from "@/types/element";
  import React, { useContext } from "react";
  import Placeholders from "../placeholders";
  import { MdOutlineDashboardCustomize } from "react-icons/md";
  import { Element, useEditor, useNode } from "@craftjs/core";
  import DeviceContext from "@/context/device-context";
  import { useEditorViewPort } from "@/provider/editor-viewport-provider";
  
  export const ${placeholderTitle} = () => {
    const {
      connectors: { create },
    } = useEditor();
    const { device } = useContext(DeviceContext);
    const { editorViewport } = useEditorViewPort();
    
    let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
    if (device.width >= 1024) {
      currentViewport = "laptop";
    } else if (device.width >= 500) {
      currentViewport = "tablet";
    } else {
      currentViewport = "mobile";
    }
  
    return (
      <Placeholders
        ref={(ref) => {
          if (ref) {
            create(ref as HTMLElement, <Element cssProperties={${JSON.stringify(allCssProperties)}} styles="p-3 border rounded-sm" is={${fileName}} canvas />);
          }
        }}
        icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
        text="${title}"
        element={<></>}
      />
    );
  };
  
  type CustomCSSProperties = {
    [key: string]: {
      laptop: React.CSSProperties;
      tablet: React.CSSProperties;
      mobile: React.CSSProperties;
    };
  };
  
  const ${fileName} = ({ children, styles, cssProperties = ${JSON.stringify(allCssProperties)}, ...props }: 
     DivElProps & { cssProperties: CustomCSSProperties }) => {
    const {
      connectors: { connect, drag },
    } = useNode();
    const { device } = useContext(DeviceContext);
    const { editorViewport } = useEditorViewPort();
  
    let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
    if (device.width >= 1024) {
      currentViewport = "laptop";
    } else if (device.width >= 500) {
      currentViewport = "tablet";
    } else {
      currentViewport = "mobile";
    }
  
    return (
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref as HTMLElement));
          }
        }}
        className={cn(styles)}
      >
        ${updatedHtml}
      </div>
    );
  };
  
  export default ${fileName};
  `;
  
      // Send the API request
      const response = await fetch("/api/custom-component/addcomponent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: `${fileName}.tsx`,
          content,
          title,
          cssProperties: JSON.stringify(allCssProperties),
          serialize: JSON.stringify(serialized),
          data: clonedDOM.outerHTML,
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        setStatus(`Component Saved & File Created: ${result.filePath}`);
        router.push("/");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`);
    }
  };
   
  
   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const updatecomponent = async () => {

      // Get Craft.js state
      const states = query.getState().nodes;
      const rootNode = states["ROOT"];
      if (!rootNode) {
        console.warn("No ROOT node found");
        return;
      }
  
      const serialized = query.serialize(); // Get serialized data
      const firstChildNodeId = rootNode?.data?.nodes?.[0];
      if (!firstChildNodeId) {
        console.warn("No child nodes found under ROOT");
        return;
      }
  
      const firstChildNode = states[firstChildNodeId];
      if (!firstChildNode || !firstChildNode.dom) {
        console.warn("First child node has no associated DOM");
        return;
      }
  
      // Clone and process the DOM
      const clonedDOM = firstChildNode.dom.cloneNode(true) as HTMLElement;
      const allCssProperties: { [key: string]: any } = {};
  
      const addIdsToElements = (element: HTMLElement, nodeId: string) => {
        if (!element) return;
        element.setAttribute("id", nodeId);
        const node = states[nodeId];
        allCssProperties[nodeId] = node?.data?.props?.cssProperties || {};
        const childNodeIds = node?.data?.nodes || [];
        childNodeIds.forEach((childId, index) => {
          const childElement = element.children[index] as HTMLElement;
          if (childElement) {
            addIdsToElements(childElement, childId);
          }
        });
      };
      addIdsToElements(clonedDOM, firstChildNodeId);
      const updatedHtml = clonedDOM.outerHTML
      ?.replaceAll('draggable="true"', "")
      .replace(/class=/g, "className=")
      .replace(/for=/g, "htmlFor=")
      .replace(/(<(img|input|br|hr|meta|link|source|area|base|col|embed|track|wbr)([^>]*)>)\s*/g, "$1 />")
      .replace(/style="[^"]*"/g, "")
      .replace(/id="([^"]+)"/g, (_, id) => {
        return `id="${id}" style={{ ...(cssProperties["${id}"]?.[currentViewport] || {}) }}`;
      });
      const placeholderTitle = componentName.charAt(0).toUpperCase() + componentName.slice(1) + "Placeholder";
      const content = `import { cn } from "@/lib/utils";
      import { DivElProps } from "@/types/element";
      import React, { useContext } from "react";
      import Placeholders from "../placeholders";
      import { MdOutlineDashboardCustomize } from "react-icons/md";
      import { Element, useEditor, useNode } from "@craftjs/core";
      import DeviceContext from "@/context/device-context";
      import { useEditorViewPort } from "@/provider/editor-viewport-provider";
      
      export const ${placeholderTitle} = () => {
        const {
          connectors: { create },
        } = useEditor();
        const { device } = useContext(DeviceContext);
        const { editorViewport } = useEditorViewPort();
        
        let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
      
        if (device.width >= 1024) {
          currentViewport = "laptop";
        } else if (device.width >= 500) {
          currentViewport = "tablet";
        } else {
          currentViewport = "mobile";
        }
      
        return (
          <Placeholders
            ref={(ref) => {
              if (ref) {
                create(ref as HTMLElement, <Element cssProperties={${JSON.stringify(allCssProperties)}} styles="p-3 border rounded-sm" is={${componentName}} canvas />);
              }
            }}
            icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
            text="${componentName}"
            element={<></>}
          />
        );
      };
      
      type CustomCSSProperties = {
        [key: string]: {
          laptop: React.CSSProperties;
          tablet: React.CSSProperties;
          mobile: React.CSSProperties;
        };
      };
      
      const ${componentName} = ({ children, styles, cssProperties = ${JSON.stringify(allCssProperties)}, ...props }: 
         DivElProps & { cssProperties: CustomCSSProperties }) => {
        const {
          connectors: { connect, drag },
        } = useNode();
        const { device } = useContext(DeviceContext);
        const { editorViewport } = useEditorViewPort();
      
        let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
      
        if (device.width >= 1024) {
          currentViewport = "laptop";
        } else if (device.width >= 500) {
          currentViewport = "tablet";
        } else {
          currentViewport = "mobile";
        }
      
        return (
          <div
            ref={(ref) => {
              if (ref) {
                connect(drag(ref as HTMLElement));
              }
            }}
            className={cn(styles)}
          >
            ${updatedHtml}
          </div>
        );
      };
      
      export default ${componentName};
      `;

    // Update the component data
    const response = await fetch(`/api/custom-component/comp/${comp_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:

      JSON.stringify({ 
        cssProperties: JSON.stringify(allCssProperties),
        serialize: JSON.stringify(serialized),
        data: clonedDOM.outerHTML,
        content
      }),
    });
    if(response.ok){
      setStatus("Component Updated");
      router.push("/");

    }
    else{
      setStatus("Error");
    }
    

  
   
  };
  
  
  
  return (
    <div className="flex items-center  ">
      {pathname === "/custom-component" &&  
      <div className="mx-5"><label className="flex text-xs  text-muted-foreground">Title of the Component</label><input type="text" className="w-3/4 rounded-sm  "  onChange={(e)=> setTitle(e.target.value)}/></div>
    } 
      

      <Button
        disabled={!canUndo}
        onClick={() => actions.history.undo()}
        className="bg-transparent hover:bg-transparent px-1 h-8 group/layout"
      >
        <span className="rounded-lg p-1.5 bg-slate-100 group-hover/layout:bg-slate-200">
          <Undo2 className="h-5 w-5 text-primary" />
        </span>
      </Button>
      <Button
        disabled={!canRedo}
        onClick={() => actions.history.redo()}
        className="bg-transparent hover:bg-transparent px-1 h-8 group/layout"
      >
        <span className="rounded-lg p-1.5 bg-slate-100 group-hover/layout:bg-slate-200 mr-1.5">
          <Redo2 className="h-5 w-5 text-primary" />
        </span>
      </Button>
      <Button className="bg-transparent hover:bg-transparent px-1 h-8 group/layout mr-2">
        <span className="rounded-lg p-1.5 bg-blue-600 group-hover/layout:bg-slate-50 mr-1.5">
          <IoMdEye className="h-5 w-5 text-white group-hover/layout:text-primary" />
        </span>
      </Button>
     
      {pathname === "/" ? (
  <Button className="h-8 text-xs bg-slate-50 text-black hover:bg-blue-600 hover:text-white">
    Publish
  </Button>
) : pathname === "/custom-component" ? (
  <Button
  onClick={createFileAndSaveComponent}
  className="h-8 text-xs bg-slate-50 text-black hover:bg-green-600 hover:text-white"
>
  Save Component
</Button>
) : (

  <Button onClick={updatecomponent} className="h-8 text-xs bg-slate-50 text-black hover:bg-purple-600 hover:text-white">
    Update component
  </Button>
 
)}




    </div>
  );
};

export default RightHeader;
