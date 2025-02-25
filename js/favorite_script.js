let productsData = JSON.parse(localStorage.getItem("productsData")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
  function formatPrice(price) {
    return price.toLocaleString("ru-RU") + " ₽";
  }

  function createProductCard(product) {
    const isFavorite = favorites.includes(product.name);

    if (!isFavorite) return; // Убираем карточки, которые не избранные

    return `
      <div class="card" data-id="${product.id}">
          <img src="${
            product.image
          }" alt="${product.name}" class="product-image">
          <h3>${product.name}</h3>
          <div class="category">${product.category}</div>
          <p id="description">${product.description}</p>
          <p class="price">${formatPrice(product.price)}</p>
          <div class="actions">
              <button class="open-reviews" onclick="openModal(${product.id})">
                <img src="imgs/svg/svg_review.svg">
              </button>
              <button class="add-to-cart" onclick="addToCart(${
                product.id
              })">В корзину</button>
              <button class="add-to-favorite" onclick="toggleFavorite(${
                product.id
              })">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${
                    isFavorite ? "red" : "none"
                  }" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
              </button>
          </div>
      </div>
  `;
  }

  function renderProducts() {
    const productHTML = productsData.map(createProductCard).join("");
    document.querySelector("#products").innerHTML = productHTML;
  }

  renderProducts();

  // Делает функции глобальными
  window.addToCart = function (productId) {
    const product = productsData.find((p) => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Товар "${product.name}" добавлен в корзину!`);
  };

  window.toggleFavorite = function (productId) {
    const product = productsData.find((p) => p.id === productId);
    if (!product) return;

    const productCard = document.querySelector(`.card[data-id="${productId}"]`);
    const heartIcon = productCard.querySelector(".heart-icon");

    const index = favorites.indexOf(product.name);
    if (index === -1) {
      favorites.push(product.name);
      heartIcon.setAttribute("fill", "red");
    } else {
      favorites.splice(index, 1);
      heartIcon.setAttribute("fill", "none");
      productCard.remove(); // Удаляем карточку из DOM

      // Удаляем имя продукта из массива favorites
      const favoriteIndex = favorites.indexOf(product.name);
      if (favoriteIndex !== -1) {
        favorites.splice(favoriteIndex, 1);
      }

      // Обновляем localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    // Обновляем localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
});

function openModal(productId) {
  const product = productsData.find((p) => p.id === productId);

  if (product) {
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-description").textContent =
      product.description;
    document.getElementById("modal-price").textContent = product.price;

    document.getElementById("modal").style.display = "flex";
  } else {
    console.error("Продукт не найден");
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target === modal || event.target.classList.contains("close")) {
    closeModal();
  }
});
