const productsData = [
  {
    id: 1,
    name: "Ноутбук Acer Aspire 5",
    price: 52999,
    category: "laptops",
    image: "imgs/laptop1.jpg",
    description: '15.6", Intel Core i5, 8GB RAM, 512GB SSD',
  },
  {
    id: 2,
    name: "Ноутбук HP Pavilion 15",
    price: 63999,
    category: "laptops",
    image: "imgs/laptop2.jpg",
    description: '15.6", AMD Ryzen 5, 16GB RAM, 256GB SSD',
  },
  {
    id: 3,
    name: "Ноутбук Dell Inspiron 15",
    price: 69999,
    category: "laptops",
    image: "imgs/laptop3.jpg",
    description: '15.6", Intel Core i7, 16GB RAM, 1TB HDD',
  },
  {
    id: 4,
    name: "Ноутбук Lenovo IdeaPad 3",
    price: 41999,
    category: "laptops",
    image: "imgs/laptop4.jpg",
    description: '14", Intel Core i3, 4GB RAM, 128GB SSD',
  },
  {
    id: 5,
    name: "Ноутбук ASUS VivoBook 15",
    price: 74999,
    category: "laptops",
    image: "imgs/laptop5.jpg",
    description: '15.6", AMD Ryzen 7, 16GB RAM, 512GB SSD',
  },
  {
    id: 6,
    name: "Ноутбук MSI Modern 14",
    price: 57999,
    category: "laptops",
    image: "imgs/laptop6.jpg",
    description: '14", Intel Core i5, 8GB RAM, 512GB SSD',
  },
  {
    id: 7,
    name: "Ноутбук Samsung Galaxy Book",
    price: 59999,
    category: "laptops",
    image: "imgs/laptop7.jpg",
    description: '15.6", Intel Core i5, 8GB RAM, 256GB SSD',
  },
  {
    id: 8,
    name: "Ноутбук Razer Blade Stealth",
    price: 129999,
    category: "laptops",
    image: "imgs/laptop8.jpg",
    description: '13.3", Intel Core i7, 16GB RAM, 512GB SSD',
  },
  {
    id: 9,
    name: "Ноутбук Microsoft Surface Laptop 4",
    price: 109999,
    category: "laptops",
    image: "imgs/laptop9.jpg",
    description: '13.5", Intel Core i5, 8GB RAM, 256GB SSD',
  },
  {
    id: 10,
    name: "Ноутбук Gigabyte Aero 15",
    price: 139999,
    category: "laptops",
    image: "imgs/laptop10.jpg",
    description: '15.6", Intel Core i7, 32GB RAM, 1TB SSD',
  },
  {
    id: 11,
    name: "Ноутбук HP Omen 15",
    price: 124999,
    category: "laptops",
    image: "imgs/laptop11.jpg",
    description: '15.6", Intel Core i7, 16GB RAM, 1TB SSD',
  },
  {
    id: 12,
    name: "Ноутбук Lenovo ThinkPad X1 Carbon",
    price: 114999,
    category: "laptops",
    image: "imgs/laptop12.jpg",
    description: '14", Intel Core i5, 16GB RAM, 512GB SSD',
  },

  {
    id: 13,
    name: "Смартфон Apple iPhone 14",
    price: 84999,
    category: "phones",
    image: "imgs/phone1.jpg",
    description: '6.1", 128GB',
  },
  {
    id: 14,
    name: "Смартфон Samsung Galaxy S22",
    price: 79999,
    category: "phones",
    image: "imgs/phone2.jpg",
    description: '6.1", 256GB',
  },
  {
    id: 15,
    name: "Смартфон Google Pixel 6",
    price: 71999,
    category: "phones",
    image: "imgs/phone3.jpg",
    description: '6.4", 128GB',
  },
  {
    id: 16,
    name: "Смартфон Xiaomi Mi 11",
    price: 67999,
    category: "phones",
    image: "imgs/phone4.jpg",
    description: '6.81", 256GB',
  },
  {
    id: 17,
    name: "Смартфон OnePlus 9",
    price: 72999,
    category: "phones",
    image: "imgs/phone5.jpg",
    description: '6.55", 128GB',
  },
  {
    id: 18,
    name: "Смартфон Oppo Find X5",
    price: 75999,
    category: "phones",
    image: "imgs/phone6.jpg",
    description: '6.55", 256GB',
  },
  {
    id: 19,
    name: "Смартфон Sony Xperia 5 III",
    price: 81999,
    category: "phones",
    image: "imgs/phone7.jpg",
    description: '6.1", 128GB',
  },
  {
    id: 20,
    name: "Смартфон Vivo X70 Pro",
    price: 68999,
    category: "phones",
    image: "imgs/phone8.jpg",
    description: '6.56", 256GB',
  },
  {
    id: 21,
    name: "Смартфон Motorola Edge 20",
    price: 59999,
    category: "phones",
    image: "imgs/phone9.jpg",
    description: '6.7", 128GB',
  },
  {
    id: 22,
    name: "Смартфон Realme GT",
    price: 57999,
    category: "phones",
    image: "imgs/phone10.jpg",
    description: '6.43", 256GB',
  },
  {
    id: 23,
    name: "Смартфон Nokia X20",
    price: 48999,
    category: "phones",
    image: "imgs/phone11.jpg",
    description: '6.67", 128GB',
  },
  {
    id: 24,
    name: "Смартфон Honor 50",
    price: 51999,
    category: "phones",
    image: "imgs/phone12.jpg",
    description: '6.57", 256GB',
  },

  {
    id: 25,
    name: 'Планшет Apple iPad Pro 12.9"',
    price: 119999,
    category: "tablets",
    image: "imgs/tablet1.jpg",
    description: "128GB",
  },
  {
    id: 26,
    name: "Планшет Samsung Galaxy Tab S8",
    price: 89999,
    category: "tablets",
    image: "imgs/tablet2.jpg",
    description: "128GB",
  },
  {
    id: 27,
    name: "Планшет Microsoft Surface Pro 8",
    price: 109999,
    category: "tablets",
    image: "imgs/tablet3.jpg",
    description: "256GB",
  },
  {
    id: 28,
    name: "Планшет Lenovo Tab P11 Pro",
    price: 67999,
    category: "tablets",
    image: "imgs/tablet4.jpg",
    description: "128GB",
  },
  {
    id: 29,
    name: "Планшет Huawei MatePad Pro",
    price: 78999,
    category: "tablets",
    image: "imgs/tablet5.jpg",
    description: "256GB",
  },
  {
    id: 30,
    name: "Планшет Amazon Fire HD 10",
    price: 34999,
    category: "tablets",
    image: "imgs/tablet6.jpg",
    description: "64GB",
  },
  {
    id: 31,
    name: "Планшет Microsoft Surface Go 3",
    price: 55999,
    category: "tablets",
    image: "imgs/tablet7.jpg",
    description: "128GB",
  },
  {
    id: 32,
    name: "Планшет Xiaomi Pad 5",
    price: 62999,
    category: "tablets",
    image: "imgs/tablet8.jpg",
    description: "256GB",
  },
  {
    id: 33,
    name: "Планшет Apple iPad Air 5",
    price: 74999,
    category: "tablets",
    image: "imgs/tablet9.jpg",
    description: "64GB",
  },
  {
    id: 34,
    name: "Планшет Samsung Galaxy Tab A7",
    price: 42999,
    category: "tablets",
    image: "imgs/tablet10.jpg",
    description: "64GB",
  },
  {
    id: 35,
    name: "Планшет Lenovo Yoga Tab 13",
    price: 58999,
    category: "tablets",
    image: "imgs/tablet11.jpg",
    description: "128GB",
  },
  {
    id: 36,
    name: "Планшет Asus ZenPad 3S 10",
    price: 37999,
    category: "tablets",
    image: "imgs/tablet12.jpg",
    description: "32GB",
  },
];

// Сохраняем данные о продуктах в localStorage
localStorage.setItem("productsData", JSON.stringify(productsData));

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderProducts(category = "all") {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  let filteredProducts;

  if (category === "men") {
    // Показываем только Компьютеры и Ноутбуки
    filteredProducts = productsData.filter(
      (product) =>
        product.category === "computers" || product.category === "laptops"
    );
    toggleButtons(["computers", "laptops"], ["tablets", "phones"]);
  } else if (category === "women") {
    // Показываем только Планшеты и Телефоны
    filteredProducts = productsData.filter(
      (product) =>
        product.category === "tablets" || product.category === "phones"
    );
    toggleButtons(["tablets", "phones"], ["computers", "laptops"]);
  } else if (category === "all") {
    // Показываем все товары
    filteredProducts = productsData;
    toggleButtons(["computers", "laptops", "tablets", "phones"], []);
  } else {
    // Фильтрация по конкретной категории
    filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    toggleButtons(
      [category],
      ["computers", "laptops", "tablets", "phones"].filter(
        (c) => c !== category
      )
    );
  }

  filteredProducts.forEach((product) => {
    const isFavorite = favorites.includes(product.name);
    const card = document.createElement("div");
    card.classList.add("card");

    // Вставляем HTML-структуру с использованием шаблонной строки
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
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
    `;

    productsContainer.appendChild(card);
  });
}

// Функция для скрытия или показа кнопок
function toggleButtons(showCategories, hideCategories) {
  const allButtons = document.querySelectorAll("aside button");

  if (showCategories.length === 1) {
    return;
  }

  allButtons.forEach((button) => {
    const category = button.getAttribute("onclick").match(/'([^']+)'/)[1];

    if (hideCategories.includes(category)) {
      console.log(hideCategories.includes(category));
      console.log(category);
      button.style.display = "none"; // Скрываем ненужные категории
    } else if (showCategories.includes(category) || category === "all") {
      button.style.display = "block"; // Показываем нужные категории + "Все"
    }
  });
}

function changeCategory(category) {
  renderProducts(category);
}

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

  function addToCart(productId) {
    const product = productsData.find((p) => p.id === productId);
    if (!product) return;

    let cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Товар "${product.name}" добавлен в корзину!`);
  }

function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  let filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(input)
  );

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement("p");
    title.textContent = product.name;

    const button = document.createElement("button");
    button.textContent = "Обзор";
    button.onclick = () => openModal(product);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    productsContainer.appendChild(card);
  });
}

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
}

function toggleFavorite(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const index = favorites.indexOf(product.name);
  if (index === -1) {
    favorites.push(product.name);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderProducts();
}

// Загружаем все товары по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  changeCategory("all");
});
