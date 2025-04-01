function showAlert() {
    alert("You clicked a button!");
}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", showAlert);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav a");
    let currentPage = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.style.boxShadow = "0px 2px 20px rgba(255, 255, 255, 0.8)";
            link.style.fontWeight = "bold";
        }
    });
});
