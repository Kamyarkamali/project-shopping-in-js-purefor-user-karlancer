document.addEventListener("DOMContentLoaded", function () {
  // دریافت ایمیل از localStorage
  const userEmail = localStorage.getItem("email");

  // پیدا کردن عنصر span برای نمایش ایمیل
  const emailDisplay = document.getElementById("user-email");

  // بررسی اینکه ایمیل در localStorage وجود دارد
  if (userEmail) {
    // نمایش ایمیل در پنل کاربری
    emailDisplay.textContent = userEmail;
  } else {
    // اگر ایمیل در localStorage موجود نبود
    emailDisplay.textContent = "ایمیل یافت نشد.";
  }
});
