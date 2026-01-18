// Astro utilities for nanostores
import type { WritableAtom } from 'nanostores'

// Helper to create a store listener script for Astro components  
export const createStoreListener = (storeName: string, callback: string) => `
  import { ${storeName} } from '/src/stores/index.ts';
  
  const unsubscribe = ${storeName}.subscribe((value) => {
    ${callback}
  });
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', unsubscribe);
`;

// Helper to create store update script for Astro components
export const createStoreUpdater = (actionName: string) => `
  import { ${actionName} } from '/src/stores/index.ts';
  window.${actionName} = ${actionName};
`;

// Generate initialization script for Astro pages
export const generateInitScript = (initialData: {
  language?: string;
  translations?: any;
  breakpoint?: string;
}) => `
  import { initializeStores } from '/src/stores/index.ts';
  
  initializeStores(${JSON.stringify(initialData)});
`;

// Helper to listen to store changes in Astro component scripts
export const storeScript = (imports: string[], callback: string) => `
  import { ${imports.join(', ')} } from '/src/stores/index.ts';
  
  ${callback}
`;