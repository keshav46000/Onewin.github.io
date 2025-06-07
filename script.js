const slider = document.getElementById("slider");
const loginBtn = document.getElementById("loginBtn");

slider.addEventListener("input", function () {
    if (slider.value == 100) {
        loginBtn.disabled = false;
        loginBtn.classList.add("enabled");
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove("enabled");
    }
});