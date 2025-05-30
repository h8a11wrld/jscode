const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "/img/discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "/img/discount_2.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "/img/gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "/img/delivery.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "/img/discount_3.svg"
    }
  ];
  
  // Функция для выбора случайного подарка
  function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * giftArr.length);
    return giftArr[randomIndex];
  }
  
  // Отображение карточки с подарком
  function showPopup() {
    const popup = document.getElementById('popup');
    const giftIcon = document.getElementById('gift-icon');
    const giftTitle = document.getElementById('gift-title');
    
    const randomGift = getRandomGift();
    giftIcon.src = randomGift.icon;
    giftTitle.textContent = randomGift.title;
  
    popup.classList.remove('hidden');
  }
  
  // Закрытие карточки
  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
  });
  
  // Таймер для показа карточки через 3 секунды
  setTimeout(showPopup, 3000);
