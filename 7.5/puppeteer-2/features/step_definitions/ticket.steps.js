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
  
  Given("user is on {string} page", async function (string) {
    return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
      setTimeout: 20000,
    });
  });
  
  When("user chooses day {string}", async function (string) {
    return await clickElement(this.page, string);
  });

  When("user chooses movie {string}", async function (string) {
    return await clickElement(this.page, string);
  });

  When("user chooses seat {string}", async function (string) {
    return await clickElement(this.page, string);
  });

  When("user orders ticket {string}", async function (string) {
    return await clickElement(this.page, string);
  });

  
  Then("user sees {string}", async function (string) {
    const actual = await getText(this.page, "h2.ticket__check-title");
    const expected = await string;
    expect(actual).contains(expected);
  });

  Then("user can't order ticket ", async function () {
    const isDisabled = await page.$eval("button", (button) => button.disabled);
    expect(isDisabled).toEqual(true);
  });

