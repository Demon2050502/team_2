let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Функция для обновления интерфейса корзины
function updateCartUI() {
  const cartItemsContainer = document.querySelector(".list-cart");
  cartItemsContainer.innerHTML = ""; // Очищаем контейнер

  cart.forEach((item, index) => {
    if (
      !item.price ||
      isNaN(item.price) ||
      !item.quantity ||
      isNaN(item.quantity)
    ) {
      console.warn("Ошибка в данных товара:", item);
      return;
    }

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart_item");

    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-info">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                </div>
                <div class="cart-quantity">
                    <div class="quantity-checkbox">
                        <button class="bt_minus" data-index="${index}">-</button>
                        <input type="text" class="quantity" value="${
                          item.quantity
                        }" data-max-count="100">
                        <button class="bt_plus" data-index="${index}">+</button>
                    </div>
                    <div class="cart-item-price">${formatPrice(
                      item.price * item.quantity
                    )}</div>
                </div>
            </div>
        `;

    cartItemsContainer.appendChild(cartItem);
  });

  updateTotalPrice();
}

// Функция для пересчёта общей стоимости
function updateTotalPrice() {
  let totalPrice = cart.reduce((sum, item) => {
    let itemTotal = parseFloat(item.price) * parseInt(item.quantity);
    return sum + (isNaN(itemTotal) ? 0 : itemTotal);
  }, 0);

  document.querySelector(".total-price p").innerText = `Итого: ${formatPrice(
    totalPrice
  )}`;
}

// Добавление товара в корзину
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    const productCard = event.target.closest(".product-card");

    // Получаем данные товара
    const product = {
      id: productCard.getAttribute("id"),
      name: productCard.getAttribute("name"),
      description: productCard.getAttribute("description"),
      price: parseFloat(productCard.getAttribute("price")),
      image: productCard.getAttribute("image").src,
      quantity: 1,
    };

    // Проверяем, есть ли товар уже в корзине
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
  }
});

// Обработка изменения количества товаров (увеличение/уменьшение)
document
  .querySelector(".list-cart")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("bt_plus")) {
      const index = event.target.getAttribute("data-index");
      cart[index].quantity += 1;

      // Сохраняем изменения в localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartUI();
    } else if (event.target.classList.contains("bt_minus")) {
      const index = event.target.getAttribute("data-index");
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;

        // Сохраняем изменения в localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartUI();
      } else {
        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartUI();
      }
    }
  });

// Инициализация корзины при первой загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartUI();
});

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
}
