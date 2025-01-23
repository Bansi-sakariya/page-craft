import { editorResolver } from '@/utils/editor-resolver';
import React from 'react'

const Preview = () => {

    let data = {"ROOT":{"type":{"resolvedName":"Root"},"isCanvas":true,"props":{"styles":"","data-cy":"root-container"},"displayName":"Root","custom":{},"hidden":false,"nodes":["W86-0kVRZH","Xj_Dot1pr8","WoJVbsGtoV","3xrA7Ol6_X","xQJCNmw9S7","ONRppNRhhC","1QRTdLF2f1"],"linkedNodes":{}},"ONRppNRhhC":{"type":{"resolvedName":"H1"},"isCanvas":false,"props":{"styles":"","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%"}},"displayName":"H-One","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"xQJCNmw9S7":{"type":{"resolvedName":"H2"},"isCanvas":false,"props":{"styles":"text-5xl font-bold","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"}},"displayName":"H-Two","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"3xrA7Ol6_X":{"type":{"resolvedName":"H3"},"isCanvas":false,"props":{"styles":"text-4xl font-bold","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"30px","fontWeight":"800","width":"100%"}},"displayName":"H-Three","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"WoJVbsGtoV":{"type":{"resolvedName":"H4"},"isCanvas":false,"props":{"styles":"text-3xl font-bold","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"}},"displayName":"H-Four","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"Xj_Dot1pr8":{"type":{"resolvedName":"H5"},"isCanvas":false,"props":{"styles":"text-2xl font-bold","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"20px","fontWeight":"800","width":"100%"}},"displayName":"H-Five","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"W86-0kVRZH":{"type":{"resolvedName":"H6"},"isCanvas":false,"props":{"styles":"text-xl font-bold","title":"Lorem Ipsum","cssProperties":{"fontFamily":"var(--font-poppins)","fontSize":"15px","fontWeight":"800","width":"100%"}},"displayName":"H-Six","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"1QRTdLF2f1":{"type":{"resolvedName":"Div"},"isCanvas":true,"props":{"styles":"p-3 border rounded-sm"},"displayName":"Div","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}

// Utility to get the component from the resolver
const getComponentByName = (name: string) => {
    const resolver = editorResolver.find((entry) => entry.name === name);
    return resolver ? resolver.component : null;
  };
  
  // Recursive rendering function
  function renderNode(nodeId: string, nodeMap: any) {
    const node = nodeMap[nodeId];
    if (!node) return null;
  
    const { type, props, nodes, displayName } = node;
  
    // Get the component from the resolver using `displayName`
    const Component = getComponentByName(displayName);
  
    // If a component is found in the resolver, render it
    if (Component) {
      return (
        <Component key={nodeId} styles={props.styles} cssProperties={props.cssProperties} {...props}>
          {nodes?.map((childId: string) => renderNode(childId, nodeMap))}
        </Component>
      );
    }
  
    // Fallback to `React.createElement` for unresolved components
    const children = nodes?.map((childId: string) => renderNode(childId, nodeMap));
    return React.createElement(type.resolvedName || "div", { ...props, key: nodeId }, children);
  }

//   console.log();
  
  return (
    <>
        <div>{renderNode("ROOT", data)}</div>;
    </>
  )
}

export default Preview