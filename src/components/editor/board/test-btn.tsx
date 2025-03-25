import { Button } from "@/components/ui/button";
import { useEditor } from "@craftjs/core";
import React from "react";

const TestBtn = () => {
  const { query } = useEditor();

  // const handleSaveToLocalStorage = () => {
  //   try {
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
     
  //     // Save the modified HTML and styles to local storage
  //     // localStorage.setItem("data", clonedDOM.outerHTML);
  //     // localStorage.setItem("json", JSON.stringify(serialized)); 
  //     // localStorage.setItem("cssProperties", JSON.stringify(allCssProperties));

  //     console.log("Updated HTML:", clonedDOM.outerHTML);
  //     console.log("CSS Properties:", JSON.stringify(allCssProperties));
  //     console.log("Data successfully saved to local storage!");
  //   } catch (error) {
  //     console.error("Error saving to local storage:", error);
  //   }
  // };
 
  return (
    <div>
      <Button >Save</Button>
    </div>
  );
};

export default TestBtn;
