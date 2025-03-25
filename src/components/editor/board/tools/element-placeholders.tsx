// API Endpoint for fetching components
const CUSTOM_COMPONENTS_API = "/api/custom-component/getcomponent";

// Type definition for fetched components
interface CustomComponent {
  id: string;
  title: string;
}

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Function to dynamically import a custom component
async function importCustomComponent(title: string) {
  try {
    const titlesmall = title.toLowerCase();
    return await import(`../../elements/CustomComponent/${titlesmall}`);
  } catch (error) {
    console.warn(`⚠️ Failed to import component '${title}':`, error);
    return null;
  }
}

// Function to fetch and load dynamic placeholders with IDs
export async function fetchDynamicPlaceholders() {
  try {
    const response = await fetch(CUSTOM_COMPONENTS_API, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const components: CustomComponent[] = await response.json();
    const dynamicPlaceholders: Record<string, { component: any; id: string }> = {};

    await Promise.all(
      components.map(async (comp) => {
        const title = capitalizeFirstLetter(comp.title);
        const module = await importCustomComponent(title);

        if (module) {
          const PlaceholderComponent = module[`${title}Placeholder`] || module.default;
          if (PlaceholderComponent) {
            dynamicPlaceholders[`${title}Placeholder`] = {
              component: PlaceholderComponent,
              id: comp.id, // Include ID in the object
            };
          } else {
            console.warn(`⚠️ Placeholder '${title}Placeholder' not found in module.`);
          }
        }
      })
    );

    return { ...dynamicPlaceholders };
  } catch (error) {
    console.error("Error fetching custom placeholders:", error);
  }
}
