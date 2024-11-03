import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/')
  // Go to home page - should contain two buttons
  await expect(page.locator('main')).toContainText('Deploy now')
  await expect(page.locator('main')).toContainText('Read our docs')
})
