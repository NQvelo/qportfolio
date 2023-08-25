const openMenu = (menu) => {
  const ExpansionMenu = document.getElementsByClassName("expansionMenu")[0];
  if (menu.classList.contains("open")) {
    ExpansionMenu.style.height = "0%";
    menu.classList.remove("open");
  } else {
    ExpansionMenu.style.height = "100%";
    menu.classList.toggle("open");
  }
};
export default openMenu;
