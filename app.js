const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".item");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
});
