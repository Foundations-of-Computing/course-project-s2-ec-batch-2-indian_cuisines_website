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
            link.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
            link.style.fontWeight = "bold";
        }
    });
});
