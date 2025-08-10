import { test, expect } from '@playwright/test';

const LEGACY_SITE_URL = 'http://joseeduardogomes.com';
const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 },
];

for (const viewport of viewports) {
  test.describe(`Visual comparison - ${viewport.name}`, () => {
    
    test(`Compare homepage - ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      // Screenshot legacy site
      await page.goto(LEGACY_SITE_URL);
      await page.waitForLoadState('networkidle');
      await page.screenshot({ 
        path: `tests/screenshots/legacy-${viewport.name}-homepage.png`,
        fullPage: true 
      });
      
      // Screenshot dev site
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ 
        path: `tests/screenshots/dev-${viewport.name}-homepage.png`,
        fullPage: true 
      });
      
      // Compare screenshots
      await expect(page).toHaveScreenshot(`${viewport.name}-homepage.png`);
    });

    if (viewport.name === 'mobile') {
      test(`Compare mobile menu - ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Screenshot legacy site mobile menu
        await page.goto(LEGACY_SITE_URL);
        await page.waitForLoadState('networkidle');
        
        // Try to find and click mobile menu button on legacy site
        const legacyMenuButton = page.locator('.menu-button, .burger, .hamburger, .mobile-menu, [class*="menu"], [class*="burger"]').first();
        if (await legacyMenuButton.isVisible()) {
          await legacyMenuButton.click();
          await page.waitForTimeout(500); // Wait for animation
        }
        
        await page.screenshot({ 
          path: `tests/screenshots/legacy-${viewport.name}-mobile-menu.png`,
          fullPage: true 
        });
        
        // Screenshot dev site mobile menu
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Click burger menu on dev site
        const devMenuButton = page.locator('.Burger');
        if (await devMenuButton.isVisible()) {
          await devMenuButton.click();
          await page.waitForTimeout(500); // Wait for animation
        }
        
        await page.screenshot({ 
          path: `tests/screenshots/dev-${viewport.name}-mobile-menu.png`,
          fullPage: true 
        });
        
        // Compare mobile menu screenshots
        await expect(page).toHaveScreenshot(`${viewport.name}-mobile-menu.png`);
      });
    }

  });
}