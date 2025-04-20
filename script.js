// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Функция для отправки данных выбранного знака зодиака
function sendData(zodiacId) {
    try {
        // Проверяем, что WebApp инициализирован
        if (!tg || !tg.sendData) {
            console.error("Telegram WebApp не доступен.");
            return;
        }

        // Отправляем ID выбранного знака зодиака
        tg.sendData(zodiacId.toString());

        // (Опционально) Можно показать уведомление пользователю
        tg.showAlert(`Выбран знак зодиака: ${getZodiacName(zodiacId)}`);

    } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        tg.showAlert("Произошла ошибка. Попробуйте ещё раз.");
    }
}

// Вспомогательная функция для получения названия знака по ID
function getZodiacName(id) {
    const zodiacMap = {
        '1': 'Овен', '2': 'Телец', '3': 'Близнецы',
        '4': 'Рак', '5': 'Лев', '6': 'Дева',
        '7': 'Весы', '8': 'Скорпион', '9': 'Стрелец',
        '10': 'Козерог', '11': 'Водолей', '12': 'Рыбы'
    };
    return zodiacMap[id] || "Неизвестный знак";
}

// (Опционально) Инициализация WebApp при загрузке
tg.ready(); // Сообщаем Telegram, что WebApp готов к работе
tg.expand(); // Разворачиваем WebApp на весь экран