// React hooks for nanostores
import { useStore } from '@nanostores/react'
import { 
  languageState, 
  uiState, 
  navigationState,
  currentLanguage,
  currentTranslations,
  isMobileMenuOpen,
  isScrolled,
  currentBreakpoint
} from './index'

// React hooks for components that haven't been converted yet
export const useLanguage = () => useStore(currentLanguage)
export const useTranslations = () => useStore(currentTranslations)
export const useLanguageState = () => useStore(languageState)

export const useUIState = () => useStore(uiState)
export const useMobileMenu = () => useStore(isMobileMenuOpen)
export const useScrolled = () => useStore(isScrolled)
export const useBreakpoint = () => useStore(currentBreakpoint)

export const useNavigationState = () => useStore(navigationState)