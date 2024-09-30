const loginForm = document.getElementById("loginForm");

// هندل کردن ارسال فرم
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // دریافت اطلاعات فرم
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email);

  if (email && password) {
    const fakeToken = Math.random().toString(36).substr(2);

    localStorage.setItem("token", fakeToken);
    localStorage.setItem("email", email);

    window.location.href = "../index.html";
  } else {
    alert("لطفاً ایمیل و رمز عبور را وارد کنید.");
  }
});
