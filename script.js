let menuButton = document.getElementById("menubutton")
let menuItems = document.getElementsByClassName("menuitem")

// Initialize collapsible menu on phones
var menuOpen = true
if (getComputedStyle(menuItems[0]).display === "none") {
  menuOpen = false
}

function openMenu() {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = "block"
  }
  menuButton.innerHTML = "close"
  menuOpen = true
}
function closeMenu () {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = "none"
  }
  menuButton.innerHTML = "menu"
  menuOpen = false
}

function toggleMenu () {
  if (menuOpen === true) {
    closeMenu()
  }
  else {
    openMenu()
  }
}

window.onresize = () => {
  if (getComputedStyle(menuButton).display === "none") {
    openMenu()
  }
  else {
    closeMenu()
  }
}