const { expect } = require('chai');

it('Today blocked button to take ticket', async () => {
    await page.goto('https://qamid.tmweb.ru/client/index.php');

    // Вводим данные для бронирования
    await page.click('.page-nav__day');
    await page.type('.movie__title', 'Зверополис');
    await page.type('.movie__data-origin', 'США');

    const timeBlockedSelector = '.movie-seances__time.acceptin-button-disabled';
    await page.waitForSelector(timeBlockedSelector);

    // Проверяем что кнопка заблокирована
    const isButtonDisabled = await page.$eval(timeBlockedSelector, el => el.classList.contains('acceptin-button-disabled'));
    expect(isButtonDisabled).to.be.true;
});