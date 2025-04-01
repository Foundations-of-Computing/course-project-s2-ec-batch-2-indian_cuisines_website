function showAlert() {
    alert("You clicked a button!");
}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", showAlert);
    });
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function (event) {
            changeColor(event, "gray");
        });
        link.addEventListener("mouseout", function (event) {
            changeColor(event, "gray");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let themeButton = document.getElementById("themeButton");

    themeButton.onclick = function () {
        if (document.body.style.backgroundColor === "black") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "aliceblue";
        }
    };
});
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav a"); // Select all nav links
    let currentPage = window.location.href; // Get the current page URL

    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)"; // Apply shadow effect
            link.style.fontWeight = "bold"; // Optional: Make text bold
        }
    });
});
