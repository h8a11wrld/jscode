// Функция для добавления товаров в массив и обновления списка в DOM
function updateProductList(newProducts) {
    // Исходный массив с товарами
    const products = ["Мышка", "Клавиатура", "Наушники"];

    // Добавляем новые товары в массив
    products.push(...newProducts);

    // Находим элемент списка ul с классом products
    const productList = document.querySelector('.products');

    // Очищаем текущий список
    productList.innerHTML = '';

    // Создаём элементы списка для каждого товара и добавляем их в ul
    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
}

// Новые товары, которые нужно добавить
const newProducts = ["Монитор", "Принтер", "Флешка"];

// Обновляем список товаров
updateProductList(newProducts);
