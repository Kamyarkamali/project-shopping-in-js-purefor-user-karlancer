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
    name: "لپ‌تاپ 13.5 اینچی مایکروسافت",
    price: "310,650",
    description:
      "لپ‌تاپ 13.5 اینچی مایکروسافت مدل Surface Laptop 4 با پردازنده Intel Core i5 1135G7 یک دستگاه شیک و قدرتمند است. این مدل با 16 گیگابایت حافظه رم و 512 گیگابایت حافظه SSD فضای مناسبی برای کارهای روزانه و حرفه‌ای ارائه می‌دهد. صفحه نمایش PixelSense با کیفیت بالا و نسبت تصویر 3:2، تجربه بصری بهتری را فراهم می‌کند. طراحی سبک و باریک آن باعث حمل آسان‌تر می‌شود",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/75eeb43d9b080b1b740d8192586b37d59d161844_1706934056.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 4,
    name: "لپ‌تاپ 15.6 اینچی اچ‌پی",
    price: "310,650",
    description:
      "لپ‌تاپ 15.6 اینچی اچ‌پی مدل G10 با پردازنده Athlon Silver 7120U، گزینه‌ای مناسب برای کارهای روزمره و تحصیلی است. این دستگاه دارای 8 گیگابایت حافظه رم و 256 گیگابایت حافظه SSD است که سرعت بالایی در بارگذاری برنامه‌ها و داده‌ها ارائه می‌دهد. صفحه نمایش بزرگ و با کیفیت آن، تجربه بصری خوبی را فراهم می‌کند. طراحی سبک و باتری با عمر طولانی، آن را برای استفاده در طول روز ایده‌آل می‌کند.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2efa980b64a5fa919af0170e5c0086855a84e291_1720457389.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 5,
    name: "لپ‌تاپ 15.6 اینچی لنوو مدل ",
    price: "2100,150",
    description:
      "لپ‌تاپ 15.6 اینچی لنوو مدل LOQ 15IRX9 با پردازنده Intel Core i7 13650HX، یک گزینه قدرتمند برای گیمرها و کاربران حرفه‌ای است. این دستگاه مجهز به 16 گیگابایت حافظه DDR5 و 512 گیگابایت حافظه SSD است که عملکرد سریع و قابل اعتمادی را فراهم می‌کند. کارت گرافیک RTX 4060، تجربه گیمینگ و کار با برنامه‌های گرافیکی سنگین را بهبود می‌بخشد. صفحه نمایش Full HD با کیفیت بالا، جزئیات واضح و رنگ‌های زنده‌ای را ارائه می‌دهد و طراحی مدرن آن نیز جلوه‌ای جذاب به لپ‌تاپ می‌بخشد.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/3fe318188a27c7941af723817bd8cc631d9ca90a_1713162171.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 6,
    name: "لپ تاپ 15.6 اینچی ایسوس ",
    price: "1100,320",
    description:
      "لپ‌تاپ 15.6 اینچی ایسوس مدل Expertbook B1 B1502CBA-NJ1761XA با پردازنده Intel Core i3 1215U، یک گزینه مناسب برای کاربران حرفه‌ای و دانشجویان است. این دستگاه دارای 16 گیگابایت حافظه DDR4 و 256 گیگابایت حافظه SSD است که عملکرد سریع و قابلیت اجرای همزمان چندین برنامه را فراهم می‌کند. صفحه نمایش با کیفیت و فناوری TN، وضوح خوبی را برای مشاهده محتوا ارائه می‌دهد. طراحی مقاوم و حرفه‌ای این لپ‌تاپ آن را برای استفاده در محیط‌های کاری مناسب می‌سازد. همچنین، باتری با عمر بالا و ویژگی‌های امنیتی مانند حسگر اثر انگشت، تجربه کاربری را بهبود می‌بخشد.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/70153591ea9f58758dcb26c876f3c74abd5a5e8e_1724143651.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 7,
    name: "لپ تاپ 15.6 اینچی اچ‌ پی",
    price: "220,150",
    description:
      "لپ‌تاپ 15.6 اینچی اچ‌پی مدل HP 15-FD0362NIA با پردازنده Intel Core i5 1334U، گزینه‌ای قدرتمند برای کاربرانی است که به عملکرد بالا نیاز دارند. این دستگاه دارای 8 گیگابایت حافظه رم و 512 گیگابایت حافظه SSD است که سرعت بارگذاری برنامه‌ها و فایل‌ها را به طور قابل توجهی افزایش می‌دهد. کارت گرافیک MX570A، تجربه گیمینگ و کار با نرم‌افزارهای گرافیکی را بهبود می‌بخشد. صفحه نمایش بزرگ و با کیفیت، جزئیات واضح و رنگ‌های زنده‌ای را ارائه می‌دهد. طراحی باریک و سبک این لپ‌تاپ، حمل و نقل آسان‌تری را فراهم می‌کند و باتری با عمر مناسب، امکان استفاده طولانی‌مدت را برای کاربران فراهم می‌سازد.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/f4679acc02cb7588bb2988f85c851fb4a284f753_1714343540.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 8,
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: "500,150",
    description:
      "لپ‌تاپ 15.6 اینچی لنوو مدل V15 G4 AMN با پردازنده Athlon Silver 7120U، گزینه‌ای مناسب برای کارهای روزمره و تحصیلی است. این دستگاه دارای 8 گیگابایت حافظه رم و 256 گیگابایت حافظه SSD می‌باشد که عملکرد خوبی را در اجرای نرم‌افزارها و بارگذاری سریع فایل‌ها ارائه می‌دهد. صفحه نمایش بزرگ و با کیفیت، تجربه بصری خوبی را برای تماشای محتوا و وب‌گردی فراهم می‌کند. طراحی ساده و مقاوم این لپ‌تاپ آن را برای استفاده در محیط‌های مختلف مناسب می‌سازد. همچنین، باتری با عمر طولانی و ویژگی‌های امنیتی، تجربه کاربری مطمئنی را برای کاربران فراهم می‌آورد.",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/f9d556a68cc4a507cc80981935cf68ae2e3d7711_1690028248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 9,
    name: "لپ تاپ 15.6 اینچی لنوو ",
    price: "100,650",
    description:
      "لپ‌تاپ 15.6 اینچی لنوو مدل V15 G4 ABP با پردازنده Ryzen 7 7730U، گزینه‌ای قدرتمند برای کاربران حرفه‌ای و گیمرهاست. این دستگاه مجهز به 16 گیگابایت حافظه DDR4 و 512 گیگابایت حافظه SSD است که عملکرد سریع و قابلیت اجرای همزمان چندین برنامه را فراهم می‌کند. صفحه نمایش TN با کیفیت خوب، تجربه بصری مناسبی را برای تماشای محتوا و انجام کارهای روزمره ارائه می‌دهد. طراحی مقاوم و باریک این لپ‌تاپ، حمل و نقل آسان‌تری را ممکن می‌سازد. باتری با عمر طولانی و ویژگی‌های امنیتی، این دستگاه را به انتخابی ایده‌آل برای استفاده‌های مداوم تبدیل می‌کند",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/da3529e71b0d3072509a41e7554e6060a62d6dec_1724419623.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
];

const productsContainer = document.querySelector(".products");

const shoppTag = document.querySelector(".cardshop");

const bascet = document.querySelector(".cart-container");

const logo = document.querySelector(".logo");

const navbars = document.querySelector(".navbar");

shoppTag.addEventListener("click", () => {
  bascet.style.opacity = "1";
  displayCart();
});

let cart = [];

// ذخیره سبد خرید در localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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
  const menu = document.getElementById("menu");
  const logo = document.querySelector(".logo");
  const hamburgers = document.querySelector(".hamburgers");
  hamburgers.addEventListener("click", () => {
    hamburgers.classList.toggle("activehamburger");
  });
  hamburgers.classList.toggle("activehamburger");

  logo.style.display = "none";
  // menu.classList.toggle("active");
}

// اضافه کردن رویداد کلیک به لینک‌ها
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const logo = document.querySelector(".logo");

    // بسته شدن منو
    menu.classList.remove("active");
    logo.style.display = "block"; // نمایش لوگو دوباره
  });
});

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

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addToCart(products[index]);
  });
});

// تابع افزودن محصول به سبد خرید
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // بررسی اینکه آیا محصول قبلا اضافه شده یا نه
  const existingProduct = cart.find((item) => item.id === product.id);

  if (!existingProduct) {
    cart.push({ ...product, quantity: 1 });
  } else {
    existingProduct.quantity++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

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

    console.log("محصول انتخاب شده:", selectedProduct); // لاگ برای بررسی

    if (!cart.some((p) => p.id == productId)) {
      cart.push({ ...selectedProduct, quantity: 1 });
      updateProductActions(productId);
      displayCart();
      saveCartToLocalStorage();
    } else {
      console.log("این محصول در سبد خرید موجود است."); // لاگ برای بررسی
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
      saveCartToLocalStorage();
      displayCart(); // به روز رسانی نمایش سبد خرید
    }
  }

  const increaseButtons = document.querySelectorAll(".increase-qty");
  const decreaseButtons = document.querySelectorAll(".decrease-qty");

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

const checkLogin = () => {
  const token = localStorage.getItem("token");

  let tagA = document.querySelector(".login");

  if (token) {
    tagA.innerHTML = "<a href='/pages/panelUser.html'>پنل کاربری</a>";
  } else {
    tagA.innerHTML = "<a href='/pages/login.html'>ثبت نام / ورود</a>";
  }
};

const checktokenHamburgerMenu = () => {
  let toke = localStorage.getItem("token");

  let tageA = document.querySelector(".panel");

  if (toke) {
    tageA.innerHTML = "<a href='/pages/panelUser.html'>پنل کاربری</a>";
  } else {
    tageA.innerHTML = "<a href='/pages/login.html'>ثبت نام / ورود</a>";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  checkLogin();
  checktokenHamburgerMenu();
});
