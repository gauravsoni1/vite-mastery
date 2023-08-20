const signinBtn = document.getElementById("signin-btn");
const usernameTxt = document.getElementById("username-txt");
const passwordTxt = document.getElementById("password-txt");

signinBtn.addEventListener("click", function () {
    const username = usernameTxt.value;
    const password = passwordTxt.value;

    if (username === "admin" && password === "admin") {
        window.location.href = "/pages/dashboard.html";
    } else {
        alert("Wrong username or password");
    }
});
