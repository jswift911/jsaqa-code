const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});

Given('I am on the booking page VIP', async () => {
    await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I enter the booking details VIP', async () => {
    await page.click('.page-nav__day');
    await page.type('.movie__title', 'Унесенные ветром');
    await page.type('.movie__data-origin', 'Америка');
});

When('I select an available time', async () => {
    const timeSelector = '.movie-seances__time:not(.acceptin-button-disabled)';
    await page.waitForSelector(timeSelector);
    await page.click(timeSelector);
});

When('I choose a VIP seat', async () => {
    const seatSelector = '.buying-scheme__chair.buying-scheme__chair_vip:not(.buying-scheme__chair_taken)';
    await page.waitForSelector(seatSelector);
    await page.click(seatSelector);
});

When('I submit the booking form VIP', async () => {
    await Promise.all([
        page.waitForNavigation(),
        page.click('.acceptin-button')
    ]);
});

Then('I should see a success message', async () => {
    const successMessage = await page.$eval('.ticket__hint', element => element.textContent);
    expect(successMessage).to.be.equal('После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.');
});