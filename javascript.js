//products
const products = [
  {
    id: 1,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 2,
    name: "لپ تاپ 15 اینچی مایکروسافت",
    price: "973,730",
    description:
      "لپ‌تاپ‌های سری Surface Laptop 4 شرکت مایکروسافت در سال 2021 برای اولین بار معرفی شدند. این لپ‌تاپ‌ها با استفاده از پردازنده قدرتمند و جدید، نسبت به نسل پیشین خود عملکرد بسیار بهتری دارند. لپ تاپ مورد نظر با پردازنده ساخت شرکت اینتل از سری Core i7 با مدل 1185G7 و فرکانس نهایی 4.8 گیگاهرتزی می‌تواند عملکرد بسیار مطلوبی در پردازش‌های سنگین داشته باشد.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e03a8fc586bb6ebc37288bca2ec6c6ab06222274_1708955841.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 3,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ 13.5 اینچی مایکروسافت مدل Surface Laptop 4 با پردازنده Intel Core i5 1135G7 یک دستگاه شیک و قدرتمند است. این مدل با 16 گیگابایت حافظه رم و 512 گیگابایت حافظه SSD فضای مناسبی برای کارهای روزانه و حرفه‌ای ارائه می‌دهد. صفحه نمایش PixelSense با کیفیت بالا و نسبت تصویر 3:2، تجربه بصری بهتری را فراهم می‌کند. طراحی سبک و باریک آن باعث حمل آسان‌تر می‌شود",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/75eeb43d9b080b1b740d8192586b37d59d161844_1706934056.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 4,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e03a8fc586bb6ebc37288bca2ec6c6ab06222274_1708955841.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 5,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 6,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 7,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 8,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 9,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "310,650",
    description:
      "لپ‌تاپ IdeaPad Slim 3 15IRU8-i3 با طراحی منحصربه‌فرد و ویژگی‌های برجسته ارائه می‌شود. پردازنده Intel Core i3-1305U با سرعت 2.8 گیگاهرتز و حافظه RAM LPDDR5 8 گیگابایت با سرعت 4800 مگاهرتز، به همراه انواع درگاه‌های ارتباطی، این لپ‌تاپ را به یک گزینه کاربردی و کارآمد برای کاربران تبدیل کرده است.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2d8b8d9b552115a4a955052d72068364f6805dc6_1705963724.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
];

const productsContainer = document.querySelector(".products");

const shoppTag = document.querySelector(".cardshop");

const bascet = document.querySelector(".cart-container");

shoppTag.addEventListener("click", () => {
  bascet.style.opacity = "1";
  displayCart();
});

let cart = [];

// بارگذاری سبد خرید از localStorage
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    cart.forEach((product) => {
      updateProductActions(product.id);
    });
  }
}

loadCartFromLocalStorage();

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

products.forEach((product) => {
  const productCard = `
    <div class="product-card">
     <img src="${product.image}"/>
     <h3>${product.name}</h3>
     <p>${product.price}</p>
     <p>${product.description}</p>
     <div class="product-actions" id="actions-${product.id}">
       <button class="add-to-cart" data-id="${product.id}">افزودن به سبد خرید</button>
     </div>
    </div>
    `;
  productsContainer.innerHTML += productCard;
});

// پیغام اضافه شدن به سبد خرید

let createDiv = document.createElement("div");

const showAlert = (alert) => {
  let createP = document.createElement("p");
  createDiv.appendChild(createP);
  document.body.append(createDiv);
  createP.innerText = alert;
  createDiv.classList.add("showalert");
};

// افزودن به سبد خرید
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// ذخیره سبد خرید در localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showAlert("به سبد خرید اضافه شد");

    setTimeout(() => {
      createDiv.style.opacity = "0";
    }, 2000);

    const productId = button.getAttribute("data-id");
    const selectedProduct = products.find((p) => p.id == productId);
    if (!cart.some((p) => p.id == productId)) {
      cart.push({ ...selectedProduct, quantity: 1 });
      updateProductActions(productId);
      displayCart();
      saveCartToLocalStorage();
    }
  });
});

// بروزرسانی اکشن‌های محصول (نمایش + و -)
function updateProductActions(productId) {
  const productInCart = cart.find((p) => p.id == productId);
  const actionsDiv = document.getElementById(`actions-${productId}`);

  // بررسی وجود عنصر
  if (!actionsDiv) {
    console.error(`Element with id 'actions-${productId}' not found.`);
    return; // اگر عنصر وجود ندارد، تابع را متوقف کنید
  }

  if (productInCart) {
    actionsDiv.innerHTML = `
            <button class="increase" data-id="${productId}">+</button>
            <span>${productInCart.quantity}</span>
            <button class="decrease" data-id="${productId}">-</button>
        `;

    actionsDiv.querySelector(".increase").addEventListener("click", () => {
      productInCart.quantity++;
      updateProductActions(productId);
      saveCartToLocalStorage();
    });

    actionsDiv.querySelector(".decrease").addEventListener("click", () => {
      if (productInCart.quantity > 1) {
        productInCart.quantity--;
      } else {
        // اگر تعداد محصول 1 باشد و کاربر بر روی دکمه - کلیک کند، آن را از سبد خرید حذف کنید
        const index = cart.indexOf(productInCart);
        if (index > -1) {
          cart.splice(index, 1);
        }
      }
      updateProductActions(productId);
      saveCartToLocalStorage();
    });
  }
}

// کاهش تعداد
function decreaseQuantity(productId) {
  const productInCart = cart.find((p) => p.id == productId);
  productInCart.quantity -= 1;

  if (productInCart.quantity <= 0) {
    cart.splice(cart.indexOf(productInCart), 1); // حذف محصول از سبد خرید
  }

  updateProductActions(productId);
  displayCart();
}

// افزایش تعداد
function increaseQuantity(productId) {
  const productInCart = cart.find((p) => p.id == productId);
  productInCart.quantity += 1;
  updateProductActions(productId);
  displayCart();
}

function displayCart() {
  bascet.innerHTML = ""; // پاک کردن محتوای قبلی
  cart.forEach((item) => {
    const cartItem = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <div class="quantity-controls">
            <button class="decrease-qty" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="increase-qty" data-id="${item.id}">+</button>
          </div>
        </div>
      </div>
    `;
    bascet.innerHTML += cartItem;
  });

  function updateQuantity(productId, action) {
    const productIndex = cart.findIndex((item) => item.id == productId);
    if (productIndex !== -1) {
      if (action === "increase") {
        cart[productIndex].quantity += 1;
      } else if (action === "decrease") {
        cart[productIndex].quantity = Math.max(
          1,
          cart[productIndex].quantity - 1
        ); // حداقل مقدار 1
      }
      saveCartToLocalStorage(); // ذخیره به روز رسانی در localStorage
      displayCart(); // به روز رسانی نمایش سبد خرید
    }
  }

  const increaseButtons = document.querySelectorAll(".increase-qty");
  const decreaseButtons = document.querySelectorAll(".decrease-qty");

  console.log(increaseButtons, decreaseButtons);

  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      updateQuantity(productId, "increase");
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      updateQuantity(productId, "decrease");
    });
  });

  // ایجاد و نمایش محصولات موجود در سبد خرید
  cart.forEach((product) => {
    const cartItem = `
        <div class="cart-item">
        <img src=${product.image}/>
          <h4>${product.name}</h4>
          <p>قیمت: ${product.price} تومان</p>
          <p>تعداد: ${product.quantity}</p>
        </div>
      `;
    cartContainer.innerHTML += cartItem;
  });
}
