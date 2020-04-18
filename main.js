var li = document.getElementById("products");
var modal = document.getElementsByClassName("modal-container")[0];
var menuButton = document.getElementById("menu-logo-image");
var menu = document.getElementsByClassName("sidenav")[0];
var menuImage = "./img/menubar.png";
var closeImage = "./img/close.png";
var isModalActive = false;
var isMenuActive = false;

// Head over to click events...
li.addEventListener("click", displayModal);
menuButton.addEventListener("click", openMenu);

function displayModal() {
  if (isModalActive === false) {
    modal.style.top = "20%";
    isModalActive = true;
  } else {
    modal.style.top = "-500px";
    isModalActive = false;
  }
}

function openMenu() {
  console.log("open Menu();");
  if (isMenuActive === false) {
    console.log("Running...");
    menuButton.src = closeImage;
    menu.style.left = "0";
    isMenuActive = true;
  } else {
    console.log("Closing...");
    menuButton.src = menuImage;
    menu.style.left = "-230px";
    isMenuActive = false;
  }
}
