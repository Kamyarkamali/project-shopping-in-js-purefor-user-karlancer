document.addEventListener("DOMContentLoaded", function () {
  // دریافت ایمیل از localStorage
  const userEmail = localStorage.getItem("email");

  // پیدا کردن عنصر span برای نمایش ایمیل
  const emailDisplay = document.getElementById("user-email");

  const logout = document.querySelector(".logout-btn");

  // پاک کردن توکن و خروج از   حساب کاربری
  logout.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location = "/index.html";
  });

  // بررسی اینکه ایمیل در localStorage وجود دارد
  if (userEmail) {
    // نمایش ایمیل در پنل کاربری
    emailDisplay.textContent = userEmail;
  } else {
    // اگر ایمیل در localStorage موجود نبود
    emailDisplay.textContent = "ایمیل یافت نشد.";
  }

  // دریافت محصولات از localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // نمایش محصولات در سبد خرید
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");
  let totalPrice = 0;

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<li>سبد خرید خالی است</li>";
    totalPriceContainer.innerHTML = ""; // پاک کردن نمایش مجموع قیمت
  } else {
    cartItems.forEach((item, index) => {
      // اطمینان از اینکه قیمت به عدد اعشاری تبدیل شود
      const price = parseFloat(item.price) || 0; // تبدیل قیمت به عدد اعشاری
      totalPrice += price; // جمع قیمت

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="product-name">${item.name}</span>
        <span class="product-price">${price.toFixed(2)} تومان</span>
        <button class="increase-btn" data-index="${index}">+</button>
        <button class="decrease-btn" data-index="${index}">-</button>
        <button class="remove-btn" data-index="${index}">حذف</button>
      `;
      cartItemsContainer.appendChild(listItem);
    });

    // نمایش مجموع قیمت
    totalPriceContainer.innerHTML = `<strong>مجموع: ${totalPrice.toFixed(
      2
    )} تومان</strong>`;
  }

  // مدیریت افزایش، کاهش و حذف محصولات
  cartItemsContainer.addEventListener("click", function (event) {
    const index = event.target.getAttribute("data-index");
    if (event.target.classList.contains("increase-btn")) {
      cartItems[index].price = parseFloat(cartItems[index].price) + 10000; // به قیمت 10,000 تومان اضافه کن
    } else if (event.target.classList.contains("decrease-btn")) {
      if (cartItems[index].price > 10000) {
        cartItems[index].price = parseFloat(cartItems[index].price) - 10000; // به قیمت 10,000 تومان کم کن
      }
    } else if (event.target.classList.contains("remove-btn")) {
      cartItems.splice(index, 1); // حذف محصول
    }
    localStorage.setItem("cart", JSON.stringify(cartItems)); // ذخیره تغییرات در localStorage
    location.reload(); // بارگذاری مجدد صفحه برای به‌روزرسانی نمایش
  });
});
