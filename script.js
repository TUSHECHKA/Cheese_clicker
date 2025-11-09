document.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылки на элементы DOM
    const cookieBtn = document.getElementById('cookie-btn');
    const cookiesSpan = document.getElementById('cookies');
    const cpsSpan = document.getElementById('cps');
    const upgradeCursorBtn = document.getElementById('upgrade-cursor');
    const cursorCostSpan = document.getElementById('cursor-cost');
    const upgradeGrandmaBtn = document.getElementById('upgrade-grandma');
    const grandmaCostSpan = document.getElementById('grandma-cost');

    // Переменные игры
    let cookies = 0;
    let clickPower = 1; // Сколько печенек за один клик
    let cps = 0;        // Печенек в секунду
    let cursorCost = 10;
    let grandmaCost = 100;

    // Функция обновления интерфейса
    function updateUI() {
        cookiesSpan.textContent = Math.floor(cookies); // Показываем целые печеньки
        cpsSpan.textContent = cps;
        cursorCostSpan.textContent = cursorCost;
        grandmaCostSpan.textContent = grandmaCost;

        // Включаем/отключаем кнопки улучшений
        upgradeCursorBtn.disabled = cookies < cursorCost;
        upgradeGrandmaBtn.disabled = cookies < grandmaCost;
    }

    // Обработчик клика по печеньке
    cookieBtn.addEventListener('click', () => {
        cookies += clickPower;
        updateUI();
    });

    // Обработчик улучшения клика
    upgradeCursorBtn.addEventListener('click', () => {
        if (cookies >= cursorCost) {
            cookies -= cursorCost;
            clickPower++;
            cursorCost = Math.floor(cursorCost * 1.5); // Увеличиваем стоимость
            updateUI();
        }
    });

    // Обработчик покупки бабушки
    upgradeGrandmaBtn.addEventListener('click', () => {
        if (cookies >= grandmaCost) {
            cookies -= grandmaCost;
            cps++; // Увеличиваем печеньки в секунду
            grandmaCost = Math.floor(grandmaCost * 1.8); // Увеличиваем стоимость
            updateUI();
        }
    });

    // Игровой цикл для CPS (печенек в секунду)
    setInterval(() => {
        cookies += cps; // Добавляем печеньки по CPS
        updateUI();
    }, 1000); // Обновляем каждую секунду

    // Инициализация UI при загрузке страницы
    updateUI();
});
