const { clickElement, getText } = require("./lib/commands.js");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Ordering tickets", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "body > nav > a:nth-child(2)");
  });

  test("Ordering standart ticket", async () => {
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Ordering VIP ticket", async () => {
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(3) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(4)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Disable ordering", async () => {
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
    const isDisabled = await page.$eval("button", (button) => button.disabled);
    expect(isDisabled).toEqual(true);
  });


});

