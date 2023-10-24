import ScrollReveal from "scrollreveal";

ScrollReveal({
  duration: 1000,
});

ScrollReveal().reveal(".header__wrapper");
ScrollReveal().reveal(".blog", { origin: "right", distance: "20px" });
ScrollReveal().reveal(".landing__title", {
  distance: "60px",
  origin: "left",
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".landing__subtitle", {
  distance: "60px",
  origin: "right",
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".landing__button", {
  distance: "30px",
  origin: "bottom",
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".footer__wrapper");

document.addEventListener("DOMContentLoaded", function () {
  function duplicateSVG(element) {
    const container = document.getElementsByClassName(element);
    const children = container[0].children;
    if (children) {
      for (let i = 0; i < 2; i++) {
        Array.from(children).forEach(function (child) {
          const duplicate = child.cloneNode(true); // true to clone all child elements recursively
          duplicate.setAttribute("aria-hidden", true);
          container[0].appendChild(duplicate);
        });
      }
    } else {
      console.error("Source or destination container not found.");
    }
  }
  duplicateSVG("lines__first");
  duplicateSVG("lines__second");
  duplicateSVG("lines__third");

  const buttonLang = document.querySelector(".button-lang");
  const buttonText = document.querySelector(".button-lang__text");
  if (!buttonLang) return console.log("error to find btn");

  buttonLang.addEventListener("click", function () {
    if (buttonText.textContent === "en") {
      buttonText.textContent = "рус"; // Change the text to "рус"
    } else {
      buttonText.textContent = "en"; // Change the text back to "en"
    }
  });

  const buttonsBurger = document.querySelectorAll(".button-burger");
  const buttonBurgerOpen = document.querySelector(".button-burger--open");
  const buttonBurgerClose = document.querySelector(".button-burger--close");
  const bodyElement = document.body;

  buttonsBurger.forEach((buttonBurger) => {
    buttonBurger.addEventListener("click", () => {
      const menuList = document.querySelector(".menu__list");
      if (menuList.classList.contains("menu__list-open")) {
        menuList.classList.remove("menu__list-open");
        buttonBurgerOpen.style.display = "flex !important";
        buttonBurgerClose.style.display = "none !important";
        bodyElement.style.overflow = "auto";
      } else {
        menuList.classList.add("menu__list-open"); // Add the regular style
        bodyElement.style.overflow = "hidden";
        buttonBurgerOpen.style.display = "none !important";
        buttonBurgerClose.style.display = "flex !important";
      }
    });
  });
});
