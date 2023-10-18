const { test, expect } = require("@playwright/test");
const { email, password } = require("../user");

test("HappyPath", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("h2")).toHaveText(["Моё обучение"]);
  await page.screenshot({ path: "success.png", fullPage: true });
}, 60000);

test("FailedTest", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder="Email"]', "failed@mail.com");
  await page.fill('[placeholder="Пароль"]', "failedpass");
  await page.click('[data-testid="login-submit-btn"]');
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "failed.png", fullPage: true });
}, 60000);
