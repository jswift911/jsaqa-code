const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');


Given('I am on the booking page', async () => {
    await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I enter the booking details', async () => {
    await page.click('.page-nav__day');
    await page.type('.movie__title', 'Зверополис');
    await page.type('.movie__data-origin', 'США');
});

Then('I should see the ticket button blocked', async () => {
    const timeBlockedSelector = '.movie-seances__time.acceptin-button-disabled';
    await page.waitForSelector(timeBlockedSelector);

    const isButtonDisabled = await page.$eval(timeBlockedSelector, el => el.classList.contains('acceptin-button-disabled'));
    expect(isButtonDisabled).to.be.true;
});