const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('I am on the client page', async function() {
    this.page = await this.browser.newPage();
    await this.page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I select a movie with title {string} and origin {string} on the {int} day', async function(title, origin, day) {
    const daySelector = `.page-nav__day:nth-child(${day})`; //исправлено
    await this.page.click(daySelector);
    await this.page.type('.movie__title', title);
    await this.page.type('.movie__data-origin', origin);
});

When('I select an available time for the movie', async function() {
    const timeSelector = '.movie-seances__time:not(.acceptin-button-disabled)';
    await this.page.waitForSelector(timeSelector);
    await this.page.click(timeSelector);
});

When('I select the first available STANDART seat', async function() {
    const seatSelector = '.buying-scheme__chair.buying-scheme__chair_standart:not(.buying-scheme__chair_taken)';
    await this.page.waitForSelector(seatSelector);
    await this.page.click(seatSelector);
});

When('I select an invalid STANDART seat', async function() {
    const seatSelector = '.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken';
    await this.page.waitForSelector(seatSelector);
    await this.page.click(seatSelector);
});

When('I submit the booking form STANDART', async function() {
    await Promise.all([
        this.page.waitForNavigation(),
        this.page.click('.acceptin-button')
    ]);
});

Then('I should see a success message with text {string}', async function(expectedMessage) {
    const successMessage = await this.page.$eval('.ticket__hint', element => element.textContent.trim());
    expect(successMessage).to.be.equal(expectedMessage);
});

Then('I should see an error message with text {string}', async function(expectedMessage) {
    const errorMessage = await this.page.$eval('.acceptin-form__error', element => element.textContent.trim());
    expect(errorMessage).to.be.equal(expectedMessage);
});