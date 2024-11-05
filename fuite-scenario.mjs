
/**
 * REQUIRED: Run a single iteration against a page – e.g., click a link and then go back
 * @param { import("puppeteer").Page } page
 * @param { any } data
 */
export async function iteration(page, data) {
    await page.click('button#enter');
    await page.keyboard.press('Escape');
}
