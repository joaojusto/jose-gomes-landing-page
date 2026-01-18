import { atom, computed } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

// ===== TYPES =====
export interface Translations {
  [key: string]: any;
}

export type Language = 'pt' | 'en';
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export interface LanguageState {
  current: Language;
  translations: {
    pt: Translations;
    en: Translations;
  };
}

export interface UIState {
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  currentBreakpoint: Breakpoint;
}

export interface NavigationState {
  currentNewsIndex: number;
  currentGalleryIndex: number;
  currentEventIndex: number;
  selectedDate: Date | null;
}

// ===== STORES =====

// Language & Translations - persistent across sessions
export const languageState = persistentAtom<LanguageState>('app:language', {
  current: 'pt',
  translations: {
    pt: {},
    en: {}
  }
}, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// UI State - session only
export const uiState = atom<UIState>({
  isMobileMenuOpen: false,
  isScrolled: false,
  currentBreakpoint: 'desktop'
});

// Navigation State - session only  
export const navigationState = atom<NavigationState>({
  currentNewsIndex: 0,
  currentGalleryIndex: 0,
  currentEventIndex: 0,
  selectedDate: null
});

// ===== COMPUTED VALUES =====

// Current language shorthand
export const currentLanguage = computed(languageState, (state) => state.current);

// Current translations shorthand
export const currentTranslations = computed(languageState, (state) => 
  state.translations[state.current] || {}
);

// Mobile menu status
export const isMobileMenuOpen = computed(uiState, (state) => state.isMobileMenuOpen);

// Scroll status for navbar styling
export const isScrolled = computed(uiState, (state) => state.isScrolled);

// Current breakpoint
export const currentBreakpoint = computed(uiState, (state) => state.currentBreakpoint);

// ===== ACTIONS =====

// Language actions
export const setLanguage = (language: Language) => {
  const current = languageState.get();
  languageState.set({
    ...current,
    current: language
  });
  
  // Dispatch global event for React components that haven't been converted yet
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('languageChange', {
      detail: {
        language,
        translations: current.translations[language]
      }
    }));
  }
};

export const setTranslations = (translations: { pt: Translations; en: Translations }) => {
  const current = languageState.get();
  languageState.set({
    ...current,
    translations
  });
};

// UI actions
export const toggleMobileMenu = () => {
  const current = uiState.get();
  uiState.set({
    ...current,
    isMobileMenuOpen: !current.isMobileMenuOpen
  });
};

export const setMobileMenuOpen = (isOpen: boolean) => {
  const current = uiState.get();
  uiState.set({
    ...current,
    isMobileMenuOpen: isOpen
  });
};

export const setScrolled = (scrolled: boolean) => {
  const current = uiState.get();
  uiState.set({
    ...current,
    isScrolled: scrolled
  });
};

export const setBreakpoint = (breakpoint: Breakpoint) => {
  const current = uiState.get();
  uiState.set({
    ...current,
    currentBreakpoint: breakpoint
  });
};

// Navigation actions
export const setNewsIndex = (index: number) => {
  const current = navigationState.get();
  navigationState.set({
    ...current,
    currentNewsIndex: index
  });
};

export const setGalleryIndex = (index: number) => {
  const current = navigationState.get();
  navigationState.set({
    ...current,
    currentGalleryIndex: index
  });
};

export const setEventIndex = (index: number) => {
  const current = navigationState.get();
  navigationState.set({
    ...current,
    currentEventIndex: index
  });
};

export const setSelectedDate = (date: Date | null) => {
  const current = navigationState.get();
  navigationState.set({
    ...current,
    selectedDate: date
  });
};

// Navigation helpers
export const nextNews = (maxIndex: number) => {
  const current = navigationState.get();
  if (current.currentNewsIndex < maxIndex) {
    setNewsIndex(current.currentNewsIndex + 1);
  }
};

export const previousNews = () => {
  const current = navigationState.get();
  if (current.currentNewsIndex > 0) {
    setNewsIndex(current.currentNewsIndex - 1);
  }
};

export const nextGallery = (maxIndex: number) => {
  const current = navigationState.get();
  if (current.currentGalleryIndex < maxIndex) {
    setGalleryIndex(current.currentGalleryIndex + 1);
  }
};

export const previousGallery = () => {
  const current = navigationState.get();
  if (current.currentGalleryIndex > 0) {
    setGalleryIndex(current.currentGalleryIndex - 1);
  }
};

// ===== UTILITY FUNCTIONS =====

// Initialize stores with data from Astro props
export const initializeStores = (initialData: {
  language?: Language;
  translations?: { pt: Translations; en: Translations };
  breakpoint?: Breakpoint;
}) => {
  if (initialData.language || initialData.translations) {
    const current = languageState.get();
    languageState.set({
      current: initialData.language || current.current,
      translations: initialData.translations || current.translations
    });
  }
  
  if (initialData.breakpoint) {
    setBreakpoint(initialData.breakpoint);
  }
};

// Get translation helper (works like the existing translate function)
export const getTranslation = (key: string): string => {
  const translations = currentTranslations.get();
  const keys = key.split('.');
  
  let value: any = translations;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};