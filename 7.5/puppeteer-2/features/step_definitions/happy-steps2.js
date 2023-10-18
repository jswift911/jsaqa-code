const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');

Given('I am on the booking page VIP', async () => {
    await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I enter the booking details', async () => {
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