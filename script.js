const GIST_ID = "d140f46b8d107ec73a1464221b7b21ba";
const GITHUB_TOKEN = "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";

const productsData = [
  {
    id: 1,
    name: "Ajazz AK820 Pro",
    category: "keyboard",
    brand: "Ajazz",
    switch: "gift switch",
    price: 150,
    rating: 5,
    description:
      "Механическая клавиатура с горячей заменой свитчей, RGB подсветкой и компактным дизайном. Идеально подходит для игр и работы.",
    image:
      "https://ajazzbrand.com/cdn/shop/files/00.jpg?v=1721640648&width=1450",
  },
  {
    id: 2,
    name: "Logitech G PRO X",
    category: "headphones",
    brand: "Logitech",
    switch: "проводные",
    price: 120,
    rating: 4,
    description:
      "Профессиональные игровые наушники с шумоподавлением и качественным звуком. Разработаны совместно с киберспортсменами.",
    image:
      "https://logitech.e-express.co.th/wp-content/uploads/2021/09/G-Pro-X-Wireless-Headset.jpg",
  },
  {
    id: 3,
    name: "Razer DeathAdder V3 Pro",
    category: "mouse",
    brand: "Razer",
    switch: "беспроводная",
    price: 80,
    rating: 5,
    description:
      "Легкая беспроводная мышь с сенсором 30K DPI, оптическими переключателями и временем работы до 90 часов.",
    image: "https://ir.ozone.ru/s3/multimedia-1-m/c1000/8132705806.jpg",
  },
  {
    id: 4,
    name: "Samsung Odyssey G7",
    category: "monitor",
    brand: "Samsung",
    switch: "240Hz",
    price: 450,
    rating: 4,
    description:
      "Игровой монитор с частотой 240 Гц, временем отклика 1 мс и QHD разрешением. Поддержка G-Sync и FreeSync Premium.",
    image:
      "https://kvanto.com.ua/content/images/17/1800x1800l80mc0/samsung-odyssey-g7-yhrovoi-monytor-26.9-99055206128735.jpg",
  },
  {
    id: 5,
    name: "Xbox Series X",
    category: "console",
    brand: "Microsoft",
    switch: "игровая консоль",
    price: 500,
    rating: 5,
    description:
      "Мощнейшая игровая консоль с поддержкой 4K, 120 FPS, SSD и обратной совместимостью с тысячами игр.",
    image:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/06/xbox-series-x-tag-page-cover-art-1.jpg",
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    category: "phone",
    brand: "Apple",
    switch: "256GB",
    price: 1200,
    rating: 5,
    description:
      "Флагманский смартфон с титановым корпусом, камерой 48 МП, чипом A17 Pro и USB-C портом.",
    image:
      "https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "headphones",
    brand: "Sony",
    switch: "беспроводные",
    price: 350,
    rating: 4,
    description:
      "Беспроводные наушники с лучшим шумоподавлением, до 30 часов работы и процессором V1.",
    image: "https://cdn1.ozone.ru/s3/multimedia-1-y/c600/7198689922.jpg",
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G16",
    category: "laptop",
    brand: "ASUS",
    switch: "игровой ноутбук",
    price: 1500,
    rating: 4,
    description:
      "Тонкий игровой ноутбук с процессором Intel Core i9, видеокартой RTX 4060 и экраном 240 Гц.",
    image:
      "https://my-live-02.slatic.net/p/a915e72f69664301ba682fa3e7ffda3f.jpg",
  },
  {
    id: 9,
    name: "PlayStation 5",
    category: "console",
    brand: "Sony",
    switch: "игровая консоль",
    price: 600,
    rating: 5,
    description:
      "Новое поколение игровых консолей с быстрым SSD, поддержкой 4K и уникальным контроллером DualSense.",
    image:
      "https://sammertechnology.co.ke/wp-content/uploads/2025/07/PS5-Slim-Digital-Edition-600x600.jpg",
  },
];

const exchangeRates = {
  BYN: 1,
  USD: 0.31,
  EUR: 0.29,
  RUB: 28.5,
  UAH: 11.8,
  KZT: 148,
};

const currencySymbols = {
  BYN: "BYN",
  USD: "$",
  EUR: "€",
  RUB: "₽",
  UAH: "₴",
  KZT: "₸",
};

const countryCurrency = {
  BY: "BYN",
  RU: "RUB",
  UA: "UAH",
  KZ: "KZT",
  US: "USD",
  GB: "USD",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  PL: "EUR",
  LT: "EUR",
  LV: "EUR",
  EE: "EUR",
};

const countryFlags = {
  BY: "🇧🇾",
  RU: "🇷🇺",
  UA: "🇺🇦",
  KZ: "🇰🇿",
  US: "🇺🇸",
  GB: "🇬🇧",
  DE: "🇩🇪",
  FR: "🇫🇷",
  IT: "🇮🇹",
  ES: "🇪🇸",
  PL: "🇵🇱",
  LT: "🇱🇹",
  LV: "🇱🇻",
  EE: "🇪🇪",
};

const countryNames = {
  BY: "Беларусь",
  RU: "Россия",
  UA: "Украина",
  KZ: "Казахстан",
  US: "США",
  GB: "Великобритания",
  DE: "Германия",
  FR: "Франция",
  IT: "Италия",
  ES: "Испания",
  PL: "Польша",
  LT: "Литва",
  LV: "Латвия",
  EE: "Эстония",
};

const reviewDescriptions = {
  5: "Отлично!",
  4: "Хорошо",
  3: "Средне",
  2: "Плохо",
  1: "Ужасно",
};

const EMAILJS_SERVICE_ID = "service_p7w76zm";
const EMAILJS_TEMPLATE_ID = "template_x1m270w";

let currentCurrency = "BYN";
let currentCategory = "all";
let currentPriceFilters = [];
let currentBrandFilters = [];
let currentRatingFilters = [];
let searchQuery = "";
let cart = [];
let currentPage = "home";
let currentUser = null;
let currentProductId = null;

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem("foxmarket_users") || "[]");
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("foxmarket_users", JSON.stringify(users));
}

async function loadReviews() {
  try {
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`);
    if (!response.ok) {
      console.error("Ошибка загрузки отзывов:", response.status);
      return [];
    }
    const data = await response.json();
    const content = JSON.parse(data.files["db.json"].content);
    return content.reviews || [];
  } catch (error) {
    console.error("Ошибка загрузки отзывов:", error);
    return [];
  }
}

async function saveReviews(reviews) {
  try {
    const data = { reviews };
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          "db.json": {
            content: JSON.stringify(data, null, 2),
          },
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка GitHub API:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`Ошибка GitHub: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка сохранения отзывов:", error);
    throw error;
  }
}

async function detectCountry() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data && data.country_code) {
      return data.country_code;
    }
    return null;
  } catch (error) {
    return null;
  }
}

function getFilteredProducts() {
  let filtered = productsData;

  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  if (currentPriceFilters.length > 0) {
    filtered = filtered.filter((p) => {
      return currentPriceFilters.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return p.price >= min && p.price <= max;
      });
    });
  }

  if (currentBrandFilters.length > 0) {
    filtered = filtered.filter((p) => currentBrandFilters.includes(p.brand));
  }

  if (currentRatingFilters.length > 0) {
    filtered = filtered.filter((p) => {
      return currentRatingFilters.some((rating) => {
        return p.rating >= parseInt(rating);
      });
    });
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query),
    );
  }

  return filtered;
}

async function renderProducts(containerId = "productsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = getFilteredProducts();
  const rate = exchangeRates[currentCurrency];
  const symbol = currencySymbols[currentCurrency];

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-products"><i class="fas fa-box-open"></i> Товаров не найдено</div>`;
    return;
  }

  let html = "";
  for (const product of filtered) {
    const convertedPrice = (product.price * rate).toFixed(2);
    const avgRating = await getAverageRating(product.id);
    const stars =
      "⭐".repeat(Math.round(avgRating)) +
      "☆".repeat(5 - Math.round(avgRating));
    const cartItem = cart.find((item) => item.id === product.id);
    const inCart = !!cartItem;
    const quantity = cartItem ? cartItem.quantity : 0;

    html += `
      <div class="product-card">
        <div class="product-card-content" onclick="openProduct(${product.id})">
          <img
            class="product"
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23f0f0f0%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-family=%22Arial%22 font-size=%2216%22%3EНет фото%3C/text%3E%3C/svg%3E'"
          />
          <h2 class="name-product">${product.name}</h2>
          <p class="name-switch">${product.switch}</p>
          <p style="font-size: 12px; color: #f5a623;">${stars}</p>
          <p class="Price">
            ${convertedPrice} <span class="currency-symbol">${symbol}</span>
          </p>
        </div>
        <div class="product-card-actions">
          ${
            inCart
              ? `
            <div class="cart-controls">
              <button class="cart-control-btn" onclick="event.stopPropagation(); updateCartQuantity(${product.id}, -1)">−</button>
              <span class="cart-quantity">${quantity}</span>
              <button class="cart-control-btn" onclick="event.stopPropagation(); updateCartQuantity(${product.id}, 1)">+</button>
            </div>
          `
              : `
            <button class="buy-button" onclick="event.stopPropagation(); addToCart(${product.id})">
              <i class="fas fa-shopping-cart"></i> Купить
            </button>
          `
          }
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
  add3DEffect();
}

async function renderCatalog() {
  await renderProducts("catalogContainer");
}

function add3DEffect() {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    card.removeEventListener("mousemove", card._mousemoveHandler);
    card.removeEventListener("mouseleave", card._mouseleaveHandler);

    const mousemoveHandler = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 20;
      const rotateX = (0.5 - y) * 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      card.style.transition = "transform 0.1s ease";
    };

    const mouseleaveHandler = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.transition =
        "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    };

    card._mousemoveHandler = mousemoveHandler;
    card._mouseleaveHandler = mouseleaveHandler;

    card.addEventListener("mousemove", mousemoveHandler);
    card.addEventListener("mouseleave", mouseleaveHandler);
  });
}

function updateCartQuantity(productId, change) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  const newQuantity = item.quantity + change;
  if (newQuantity <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  } else {
    item.quantity = newQuantity;
  }

  updateCartUI();
  renderProducts();
  renderCatalog();
}

async function getAverageRating(productId) {
  const reviews = await loadReviews();
  const productReviews = reviews.filter((r) => r.productId === productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((total, r) => total + r.rating, 0);
  return sum / productReviews.length;
}

async function getProductReviews(productId) {
  const reviews = await loadReviews();
  return reviews.filter((r) => r.productId === productId);
}

async function openProduct(productId) {
  currentProductId = productId;
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const rate = exchangeRates[currentCurrency];
  const symbol = currencySymbols[currentCurrency];
  const convertedPrice = (product.price * rate).toFixed(2);
  const avgRating = await getAverageRating(productId);
  const stars =
    "⭐".repeat(Math.round(avgRating)) + "☆".repeat(5 - Math.round(avgRating));
  const reviews = await getProductReviews(productId);
  const reviewCount = reviews.length;
  const ratingText =
    reviewCount > 0
      ? reviewDescriptions[Math.round(avgRating)] || "Нет оценки"
      : "Нет оценок";

  const modal = document.getElementById("productModal");
  const content = document.getElementById("productModalContent");
  const inCart = cart.some((item) => item.id === productId);

  let reviewsHtml = "";
  if (reviews.length === 0) {
    reviewsHtml = `<p style="color: #999; text-align: center; padding: 20px 0;">Пока нет отзывов. Будьте первым!</p>`;
  } else {
    reviewsHtml = reviews
      .map(
        (review) => `
      <div class="review-item">
        <div class="review-header">
          <strong>${review.name}</strong>
          <span style="color: #f5a623;">${"⭐".repeat(review.rating)}</span>
          <span style="color: #999; font-size: 12px;">${review.date}</span>
        </div>
        <p class="review-text">${review.text}</p>
      </div>
    `,
      )
      .join("");
  }

  const buyBtnText = inCart ? "Добавлено в корзину ✅" : "Добавить в корзину";

  content.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23f0f0f0%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-family=%22Arial%22 font-size=%2224%22%3EНет фото%3C/text%3E%3C/svg%3E'" />
      </div>
      <div class="product-modal-info">
        <h2>${product.name}</h2>
        <p style="color: #666; font-size: 14px;">Бренд: <strong>${product.brand}</strong> | Категория: <strong>${product.category}</strong></p>
        <p style="color: #f5a623; font-size: 18px;">${stars}</p>
        <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
          <span style="font-weight: 700; font-size: 18px; color: #e63946;">${avgRating.toFixed(1)}</span>
          <span style="color: #999; font-size: 14px;">(${reviewCount} ${reviewCount === 1 ? "оценка" : "оценок"})</span>
          <span style="background: #f0f2f5; padding: 2px 12px; border-radius: 20px; font-size: 13px; color: #666;">${ratingText}</span>
        </div>
        <p class="product-modal-price">${convertedPrice} ${symbol}</p>
        <p class="product-modal-description">${product.description}</p>
        <button class="product-modal-buy ${inCart ? "in-cart" : ""}" onclick="addToCartFromModal(${product.id})">${buyBtnText}</button>
        <button class="product-modal-share" onclick="shareProduct(${product.id})"><i class="fas fa-share-alt"></i> Поделиться</button>
      </div>
    </div>
    <div class="product-modal-reviews">
      <h3><i class="fas fa-comments"></i> Отзывы (${reviewCount})</h3>
      <div class="reviews-list">
        ${reviewsHtml}
      </div>
      <div class="review-form">
        <h4>Оставить отзыв</h4>
        ${
          currentUser
            ? `
          <div class="review-form-row">
            <input type="number" id="reviewRating" min="1" max="5" placeholder="Оценка (1-5)" />
            <textarea id="reviewText" placeholder="Ваш отзыв..."></textarea>
            <button onclick="addReview(${productId})"><i class="fas fa-paper-plane"></i> Отправить</button>
          </div>
        `
            : `
          <p style="color: #999; text-align: center; padding: 10px 0;"><a href="#" onclick="toggleAuth(); closeProduct(); return false;">Войдите</a>, чтобы оставить отзыв</p>
        `
        }
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  renderProducts();
  renderCatalog();
}

async function addReview(productId) {
  const rating = parseInt(document.getElementById("reviewRating").value);
  const text = document.getElementById("reviewText").value.trim();

  if (!rating || rating < 1 || rating > 5) {
    showNotification("Поставьте оценку от 1 до 5!", "error");
    return;
  }

  if (!text) {
    showNotification("Напишите текст отзыва!", "error");
    return;
  }

  if (!currentUser) {
    showNotification("Войдите в аккаунт, чтобы оставить отзыв!", "error");
    return;
  }

  try {
    const reviews = await loadReviews();

    reviews.push({
      id: Date.now(),
      productId: productId,
      name: currentUser.name,
      rating: rating,
      text: text,
      date: new Date().toLocaleDateString("ru-RU"),
    });

    await saveReviews(reviews);

    document.getElementById("reviewRating").value = "";
    document.getElementById("reviewText").value = "";

    showNotification("Отзыв добавлен! Спасибо!", "success");
    await openProduct(productId);
  } catch (error) {
    console.error("Ошибка добавления отзыва:", error);
    showNotification("Ошибка соединения с сервером!", "error");
  }
}

function shareProduct(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const text = `${product.name} - ${product.description} Цена: ${product.price} BYN`;
  const url = window.location.href;

  if (navigator.share) {
    navigator
      .share({
        title: product.name,
        text: text,
        url: url,
      })
      .catch(() => {});
  } else {
    navigator.clipboard
      .writeText(`${text}\n${url}`)
      .then(() => {
        showNotification("Ссылка скопирована в буфер обмена!", "success");
      })
      .catch(() => {
        prompt("Скопируйте ссылку:", `${text}\n${url}`);
      });
  }
}

function addToCartFromModal(productId) {
  const product = productsData.find((p) => p.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  renderProducts();
  renderCatalog();
  openProduct(productId);
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  renderProducts();
  renderCatalog();
}

function removeFromCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    if (existing.quantity > 1) {
      existing.quantity -= 1;
    } else {
      cart = cart.filter((item) => item.id !== productId);
    }
  }
  updateCartUI();
  renderProducts();
  renderCatalog();
}

function removeItemCompletely(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  renderProducts();
  renderCatalog();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Вы уверены, что хотите очистить корзину?")) {
    cart = [];
    updateCartUI();
    renderProducts();
    renderCatalog();
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }

  if (!currentUser) {
    showNotification(
      "Для оформления заказа необходимо войти в аккаунт!",
      "error",
    );
    toggleCart();
    setTimeout(() => toggleAuth(), 500);
    return;
  }

  const symbol = currencySymbols[currentCurrency];
  const rate = exchangeRates[currentCurrency];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalConverted = (total * rate).toFixed(2);

  const userName = currentUser.name;
  const userEmail = currentUser.email;

  let itemsText = "";
  cart.forEach((item) => {
    const price = (item.price * rate).toFixed(2);
    itemsText += `${item.name} x${item.quantity} - ${(price * item.quantity).toFixed(2)} ${symbol}\n`;
  });

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    order_items: itemsText,
    order_total: `${totalConverted} ${symbol}`,
    order_date: new Date().toLocaleString("ru-RU"),
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams).then(
    function (response) {
      alert(
        `✅ Заказ оформлен!\n📦 Товаров: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n💰 Итого: ${totalConverted} ${symbol}\n\n📧 Письмо отправлено!\nСпасибо за покупку!`,
      );
      cart = [];
      updateCartUI();
      renderProducts();
      renderCatalog();
      toggleCart();
    },
    function (error) {
      console.error("EmailJS Error:", error);
      alert(
        `✅ Заказ оформлен!\n📦 Товаров: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n💰 Итого: ${totalConverted} ${symbol}\n\n❌ Письмо не отправлено, но заказ принят!\nСпасибо за покупку!`,
      );
      cart = [];
      updateCartUI();
      renderProducts();
      renderCatalog();
      toggleCart();
    },
  );
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const symbol = currencySymbols[currentCurrency];
  const rate = exchangeRates[currentCurrency];

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<div class="empty-cart"><i class="fas fa-shopping-basket"></i> Корзина пуста</div>';
    cartTotal.innerHTML = `<i class="fas fa-calculator"></i> Итого: 0 ${symbol}`;
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const price = (item.price * rate).toFixed(2);
      return `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-details">${item.switch}</span>
        </div>
        <div class="cart-item-actions">
          <button class="cart-item-btn" onclick="removeFromCart(${item.id})">−</button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="cart-item-btn" onclick="addToCart(${item.id})">+</button>
          <button class="cart-item-btn remove" onclick="removeItemCompletely(${item.id})">✕</button>
          <span class="cart-item-price">${(price * item.quantity).toFixed(2)} ${symbol}</span>
        </div>
      </div>
    `;
    })
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalConverted = (total * rate).toFixed(2);
  cartTotal.innerHTML = `<i class="fas fa-calculator"></i> Итого: ${totalConverted} ${symbol}`;
}

function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.classList.toggle("active");
}

function updatePriceLabels() {
  const symbol = currencySymbols[currentCurrency];
  const labels = document.querySelectorAll("#priceFilters label");
  const texts = ["До 50", "50-200", "200-500", "От 500"];
  labels.forEach((label, index) => {
    const checkbox = label.querySelector('input[type="checkbox"]');
    if (checkbox) {
      const checked = checkbox.checked;
      label.innerHTML = `<input type="checkbox" value="${checkbox.value}" ${checked ? "checked" : ""}> ${texts[index]} ${symbol}`;
    }
  });
}

function applyFilters() {
  const priceCheckboxes = document.querySelectorAll(
    '#priceFilters input[type="checkbox"]:checked',
  );
  currentPriceFilters = Array.from(priceCheckboxes).map((cb) => cb.value);

  const brandCheckboxes = document.querySelectorAll(
    '#brandFilters input[type="checkbox"]:checked',
  );
  currentBrandFilters = Array.from(brandCheckboxes).map((cb) => cb.value);

  const ratingSection = document.querySelector(
    ".aside-section:nth-child(3) .filter-group",
  );
  if (ratingSection) {
    const ratingChecked = ratingSection.querySelectorAll(
      'input[type="checkbox"]:checked',
    );
    currentRatingFilters = Array.from(ratingChecked).map((cb) => cb.value);
  }

  renderProducts();
  renderCatalog();
}

function resetFilters() {
  document
    .querySelectorAll('#priceFilters input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll('#brandFilters input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll(
      '.aside-section:nth-child(3) .filter-group input[type="checkbox"]',
    )
    .forEach((cb) => (cb.checked = false));
  currentPriceFilters = [];
  currentBrandFilters = [];
  currentRatingFilters = [];
  renderProducts();
  renderCatalog();
}

function searchProducts() {
  const input = document.getElementById("searchInput");
  searchQuery = input.value.trim();
  renderProducts();
  renderCatalog();
}

function switchPage(page) {
  currentPage = page;

  document.querySelectorAll(".page-content").forEach((el) => {
    el.classList.remove("active");
  });

  const pageMap = {
    home: "page-home",
    catalog: "page-catalog",
    about: "page-about",
    contacts: "page-contacts",
  };

  const target = document.getElementById(pageMap[page]);
  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  const aside = document.getElementById("aside");
  if (page === "home" || page === "catalog") {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }

  if (page === "catalog") {
    renderCatalog();
  }
}

function toggleAuth() {
  const modal = document.getElementById("authModal");
  modal.classList.toggle("active");

  if (currentUser) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("profileInfo").style.display = "block";
    document.getElementById("profileName").textContent = currentUser.name;
    document.getElementById("profileEmail").textContent = currentUser.email;
    document.getElementById("authTitle").innerHTML =
      '<i class="fas fa-user"></i> Профиль';
  } else {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("profileInfo").style.display = "none";
    document.getElementById("authTitle").innerHTML =
      '<i class="fas fa-user"></i> Вход';
  }
}

function switchAuthForm(form) {
  if (form === "register") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("authTitle").innerHTML =
      '<i class="fas fa-user-plus"></i> Регистрация';
  } else {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("authTitle").innerHTML =
      '<i class="fas fa-user"></i> Вход';
  }
}

function register() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirm = document.getElementById("registerConfirm").value;

  if (!name || !email || !password || !confirm) {
    showNotification("Заполните все поля!", "error");
    return;
  }

  if (password.length < 6) {
    showNotification("Пароль должен быть не менее 6 символов!", "error");
    return;
  }

  if (password !== confirm) {
    showNotification("Пароли не совпадают!", "error");
    return;
  }

  const users = loadUsers();

  if (users.find((u) => u.email === email)) {
    showNotification("Пользователь с таким email уже существует!", "error");
    return;
  }

  users.push({
    id: Date.now(),
    name,
    email,
    password: password,
  });

  saveUsers(users);

  showNotification("Регистрация успешна! Теперь войдите.", "success");
  switchAuthForm("login");

  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("registerConfirm").value = "";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    showNotification("Заполните все поля!", "error");
    return;
  }

  const users = loadUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    showNotification("Неверный email или пароль!", "error");
    return;
  }

  currentUser = user;
  localStorage.setItem("foxmarket_current_user", JSON.stringify(user));
  showNotification(`Добро пожаловать, ${user.name}!`, "success");
  toggleAuth();
  updateAuthUI();

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";

  renderProducts();
  renderCatalog();
}

function logout() {
  currentUser = null;
  localStorage.removeItem("foxmarket_current_user");
  updateAuthUI();
  showNotification("Вы вышли из аккаунта", "info");
  toggleAuth();
}

function updateAuthUI() {
  const authBtn = document.getElementById("authBtn");
  if (currentUser) {
    authBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
    authBtn.title = currentUser.name;
  } else {
    authBtn.innerHTML = `<i class="fas fa-user"></i>`;
    authBtn.title = "Войти";
  }
}

function checkSavedUser() {
  const saved = localStorage.getItem("foxmarket_current_user");
  if (saved) {
    try {
      const user = JSON.parse(saved);
      const users = loadUsers();
      const exists = users.some((u) => u.email === user.email);
      if (exists) {
        currentUser = user;
        updateAuthUI();
      } else {
        localStorage.removeItem("foxmarket_current_user");
      }
    } catch (e) {
      localStorage.removeItem("foxmarket_current_user");
    }
  }
}

function showNotification(message, type = "info") {
  const existing = document.querySelector(".notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  const icons = {
    success: "fas fa-check-circle",
    error: "fas fa-exclamation-circle",
    info: "fas fa-info-circle",
  };

  notification.innerHTML = `<i class="${icons[type] || icons.info}"></i> ${message}`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100px)";
    notification.style.transition = "all 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", async function () {
  const currencySelect = document.getElementById("currency");
  const detectedFlag = document.getElementById("detected-flag");

  const countryCode = await detectCountry();

  let detectedCurrency = "BYN";

  if (countryCode && countryCurrency[countryCode]) {
    detectedCurrency = countryCurrency[countryCode];
    const flag = countryFlags[countryCode] || "";
    const name = countryNames[countryCode] || countryCode;
    detectedFlag.textContent = `📍 Определено: ${flag} ${name}`;
  } else {
    detectedFlag.textContent = "📍 По умолчанию: Беларусь";
  }

  currencySelect.value = detectedCurrency;
  currentCurrency = detectedCurrency;
  updatePriceLabels();
  await renderProducts();
  updateCartUI();

  currencySelect.addEventListener("change", function () {
    currentCurrency = this.value;
    updatePriceLabels();
    renderProducts();
    renderCatalog();
    updateCartUI();
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      switchPage(this.dataset.page);
    });
  });

  document.querySelectorAll(".aside-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".aside-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.dataset.category;
      renderProducts();
      renderCatalog();
    });
  });

  document
    .getElementById("applyFilters")
    .addEventListener("click", applyFilters);
  document
    .getElementById("resetFilters")
    .addEventListener("click", resetFilters);

  document
    .getElementById("searchBtn")
    .addEventListener("click", searchProducts);
  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchProducts();
      }
    });

  document.getElementById("cartModal").addEventListener("click", function (e) {
    if (e.target === this) {
      toggleCart();
    }
  });

  document.getElementById("authModal").addEventListener("click", function (e) {
    if (e.target === this) {
      toggleAuth();
    }
  });

  document
    .getElementById("productModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeProduct();
      }
    });

  const showMoreBtn = document.getElementById("showMoreBrands");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      const hiddenBrands = document.getElementById("hiddenBrands");
      if (hiddenBrands.style.display === "none") {
        hiddenBrands.style.display = "block";
        this.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть';
        this.classList.add("active");
      } else {
        hiddenBrands.style.display = "none";
        this.innerHTML = '<i class="fas fa-chevron-down"></i> Ещё';
        this.classList.remove("active");
      }
    });
  }

  checkSavedUser();
  switchPage("home");
});
