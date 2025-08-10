// Utility function to get translation from translations object
export const translate = (translations, key) => {
  if (!translations || !key) return key;
  
  // First try direct key access (for flattened keys like 'hero.title')
  if (translations.hasOwnProperty(key)) {
    return translations[key];
  }
  
  // Fallback: try nested key paths (for nested objects)
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
  }
  
  return value || key;
};

// Create a translation function bound to specific translations
export const createTranslator = (translations) => {
  return (key) => translate(translations, key);
};