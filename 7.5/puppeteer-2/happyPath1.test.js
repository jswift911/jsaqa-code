const { expect } = require('chai');

it('Another day take STANDART ticket successfully', async () => {
    await page.goto('https://qamid.tmweb.ru/client/index.php');

    // Вводим данные для бронирования
    await page.click('.page-nav__day:nth-child(2)');
    await page.type('.movie__title', 'Зверополис');
    await page.type('.movie__data-origin', 'США');

    // Ожидаем появления доступного времени и выбираем его
    const timeSelector = '.movie-seances__time:not(.acceptin-button-disabled)';
    await page.waitForSelector(timeSelector);
    await page.click(timeSelector);

    // Выбираем место (первое свободное место или ищем другое свободное место, если выбранное место занято)
    const seatSelector = '.buying-scheme__chair.buying-scheme__chair_standart:not(.buying-scheme__chair_taken)';
    await page.waitForSelector(seatSelector);
    await page.click(seatSelector);

    // Отправляем форму бронирования
    await Promise.all([
        page.waitForNavigation(),
        page.click('.acceptin-button')
    ]);

    // Проверяем, что успешное бронирование завершено
    const successMessage = await page.$eval('.ticket__hint', element => element.textContent);
    expect(successMessage).to.be.equal('После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.');
});