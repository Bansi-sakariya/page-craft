import Root from "@/components/editor/elements/root";
import Div from "../elements/basic/div";
import H1 from "../elements/typography/h-one";
import H2 from "../elements/typography/h-two";
import H3 from "../elements/typography/h-three";
import H4 from "../elements/typography/h-four";
import H5 from "../elements/typography/h-five";
import H6 from "../elements/typography/h-six";
import Paragraph from "../elements/typography/paragraph";
import Dropdown from "../elements/basic/dropdown";


// Static components
const staticResolver = {
  Root,
  Div,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Dropdown
};

// Function to dynamically load components from API
export const fetchDynamicComponents = async () => {
  try {
    const response = await fetch("/api/custom-component/getcomponent",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    }); // Adjust API URL
    const components = await response.json();
    //  console.log("apapa",components);
    const dynamicResolver: Record<string, any> = {};

    for (const comp of components) {
      try {
        const module = await import(`../elements/CustomComponent/${comp.title}`);
        dynamicResolver[comp.title] = module.default;
      } catch (error) {
        console.error(`Error loading component ${comp.title}:`, error);
      }
    }
    
    return { ...staticResolver, ...dynamicResolver };
  } catch (error) {
    console.error("Error fetching custom components:", error);
    return staticResolver; // Fallback to static components
  }
};
