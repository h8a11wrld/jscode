const promocodeArr = [
    { promocode: 'PROM10', gift: "Скидка 10%" },
    { promocode: 'PROM50', gift: "Скидка 50%" },
    { promocode: 'GIFT', gift: "Подарок в корзине" }
  ];
  
  // Вспомогательная функция для работы с cookie
  function getCookie() {
    return document.cookie.split("; ").reduce((acc, item) => {
      const [name, value] = item.split("=");
      acc[name] = value;
      return acc;
    }, {});
  }
  
  // Установить cookie
  function setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
  
  // Элементы DOM
  const form = document.getElementById("promo-form");
  const input = document.getElementById("promocode-input");
  const message = document.getElementById("promo-message");
  
  // Проверка промокода
  function applyPromoCode(code) {
    const foundPromo = promocodeArr.find(promo => promo.promocode === code);
  
    if (foundPromo) {
      message.textContent = `Промокод активирован: ${foundPromo.gift}`;
      message.classList.remove("error");
      message.classList.remove("hidden");
      form.classList.add("hidden");
  
      // Сохранить промокод в cookie
      setCookie("promocode", code);
    } else {
      message.textContent = "Неверный промокод!";
      message.classList.add("error");
      message.classList.remove("hidden");
    }
  }
  
  // Обработка отправки формы
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = input.value.trim();
    applyPromoCode(userInput);
  });
  
  // Проверка сохранённого промокода при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    const cookies = getCookie();
    const savedPromo = cookies.promocode;
  
    if (savedPromo) {
      applyPromoCode(savedPromo);
    }
  });
