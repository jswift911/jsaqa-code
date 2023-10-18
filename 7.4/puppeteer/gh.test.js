let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/jswift911");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 2000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 1000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 700);
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.goto("https://github.com/marketplace");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub Marketplace · to improve your workflow · GitHub"
    );
  }, 2000);
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.goto("https://github.com/netology-code");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("Netology.Code · GitHub");
  }, 2000);
});

test("The h1 header content'", async () => {
  const firstLink = await page.$("header div div a");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("jswift911 (Александр) · GitHub");
}, 2000);
