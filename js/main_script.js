let productsData = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const itemsPerPage = 6;
let currentPage = 1;

// Загрузка данных из JSON
async function loadProducts() {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    productsData = data; // Загружаем данные из JSON
    renderProducts("all", currentPage);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
}

function renderProducts(category = "all", page = 1, products = productsData) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  let filteredProducts = products;
  if (category !== "all") {
    filteredProducts = products.filter((p) =>
      category === "sec_1"
        ? ["computers", "laptops"].includes(p.category)
        : category === "sec_2"
        ? ["tablets", "phones"].includes(p.category)
        : p.category === category
    );
  }

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  paginatedProducts.forEach((product) => {
    const isFavorite = favorites.includes(product.name);
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <div class="category">${product.category}</div>
        <p id="description">${product.description}</p>
        <p class="price">${formatPrice(product.price)}</p>
        <div class="actions">
          <button class="open-reviews" onclick="openModal(${
            product.id
          })"><img src="imgs/svg/svg_review.svg"></button>
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
  });

  document.getElementById("currentPage").textContent = page;
  updatePaginationButtons(filteredProducts.length);
}

function updatePaginationButtons(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
  document.getElementById("firstPage").disabled = currentPage === 1;
  document.getElementById("lastPage").disabled = currentPage === totalPages;
}

function changePage(newPage) {
  currentPage = newPage;
  renderProducts(document.getElementById("categorySelect").value, currentPage);
}

function toggleButtons(showCategories, hideCategories) {
  const allButtons = document.querySelectorAll("aside button");

  if (showCategories.length === 1) {
    return;
  }

  allButtons.forEach((button) => {
    const category = button.getAttribute("onclick").match(/'([^']+)'/)[1];

    if (hideCategories.includes(category)) {
      button.style.display = "none"; // Скрываем ненужные категории
    } else if (showCategories.includes(category) || category === "all") {
      button.style.display = "block"; // Показываем нужные категории + "Все"
    }
  });
}

function openModal(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (product) {
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-description").textContent =
      product.description;
    document.getElementById("modal-price").textContent = formatPrice(
      product.price
    );
    document.getElementById("modal").style.display = "flex";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (product) {
    let cartItem = cart.find((item) => item.id === productId);
    cartItem ? cartItem.quantity++ : cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Товар "${product.name}" добавлен в корзину!`);
  }
}

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(input)
  );
  renderProducts("all", 1, filteredProducts); // Передаем отфильтрованные продукты
}

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
}

function toggleFavorite(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (product) {
    const index = favorites.indexOf(product.name);
    index === -1 ? favorites.push(product.name) : favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderProducts();
  }
}

function sortProducts(by, order) {
  let sortedProducts = [...productsData]; // Создаем копию массива товаров

  if (by === "price") {
    sortedProducts.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
  } else if (by === "name") {
    sortedProducts.sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  renderProducts("all", currentPage, sortedProducts); // Обновляем отображение
}

function filterByMultipleCategories() {
  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((cb) => cb.value);
  const filteredProducts =
    selectedCategories.length > 0
      ? productsData.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : productsData;
  renderProducts("all", currentPage, filteredProducts); // Обновляем отображение
}

function filterBySpecialOffers() {
  const selectedSpecials = Array.from(
    document.querySelectorAll('input[name="special"]:checked')
  ).map((cb) => cb.value);
  const filteredProducts =
    selectedSpecials.length > 0
      ? productsData.filter((product) =>
          selectedSpecials.some((special) => product[special])
        )
      : productsData;
  renderProducts("all", currentPage, filteredProducts); // Обновляем отображение
}

document.addEventListener("DOMContentLoaded", () => renderProducts("all"));
document
  .getElementById("firstPage")
  .addEventListener("click", () => changePage(1));
document
  .getElementById("prevPage")
  .addEventListener("click", () => changePage(currentPage - 1));
document
  .getElementById("nextPage")
  .addEventListener("click", () => changePage(currentPage + 1));
document
  .getElementById("lastPage")
  .addEventListener("click", () =>
    changePage(Math.ceil(productsData.length / itemsPerPage))
  );
document.addEventListener("click", (event) => {
  if (
    event.target === document.getElementById("modal") ||
    event.target.classList.contains("close")
  )
    closeModal();
});

function changeCategory(category) {
  currentPage = 1; // Сбрасываем страницу на первую при смене категории
  renderProducts(category, currentPage);
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
