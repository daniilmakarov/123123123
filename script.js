// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Словарь с прогнозами (аналогичный DISC из main.py)
const ZODIAC_FORECAST = {
    '1': '♈ Овен: День идеален для физических нагрузок и творчества.',
    '2': '♉ Телец: Удачное время для финансовых решений.',
    '3': '♊ Близнецы: Подходящий момент для общения и новых идей.',
    '4': '♋ Рак: Обратите внимание на внутренний мир и семью.',
    '5': '♌ Лев: День для лидерства и проявления себя.',
    '6': '♍ Дева: Хорошо заниматься планированием и деталями.',
    '7': '♎ Весы: Гармония и баланс будут на вашей стороне.',
    '8': '♏ Скорпион: Возможны важные открытия и перемены.',
    '9': '♐ Стрелец: Отличное время для путешествий и обучения.',
    '10': '♑ Козерог: Успех в карьере и решении задач.',
    '11': '♒ Водолей: День вдохновения и нестандартных идей.',
    '12': '♓ Рыбы: Полезно заняться творчеством и заботой о себе.'
};

// Функция для отправки данных и показа прогноза
function sendData(zodiacId) {
    try {
        if (!tg || !tg.sendData) {
            console.error("Telegram WebApp не доступен.");
            return;
        }

        // Отправляем ID выбранного знака боту
        tg.sendData(zodiacId.toString());

        // Показываем уведомление с прогнозом
        const forecast = ZODIAC_FORECAST[zodiacId] || "Прогноз для этого знака не найден.";
        tg.showAlert(forecast);

    } catch (error) {
        console.error("Ошибка:", error);
        tg.showAlert("Произошла ошибка. Попробуйте ещё раз.");
    }
}

// Инициализация
tg.ready();
tg.expand();
