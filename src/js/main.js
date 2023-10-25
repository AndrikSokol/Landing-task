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
  const buttonText = document.querySelector(".button-lang-text");
  if (!buttonLang) return console.log("error to find btn");
  buttonLang.addEventListener("click", function () {
    if (buttonText.textContent === "en") {
      buttonText.textContent = "рус";
    } else {
      buttonText.textContent = "en";
    }
  });

  const headerBurgerElement = document.querySelector(".header__burger");
  const menuListElement = document.querySelector(".menu__list");
  const buttonSignUpElement = document.querySelector(".button-sign-up");
  const buttonLogInElement = document.querySelector(".button-log-in");
  headerBurgerElement.addEventListener("click", function () {
    menuListElement.classList.toggle("menu__list--open");
    if (menuListElement.classList.contains("menu__list--open")) {
      document.body.style.overflow = "hidden";
      headerBurgerElement.classList.add("header__burger-close");
      buttonSignUpElement.classList.add("button-sign-up--mobile");
      buttonLogInElement.classList.add("button-log-in--mobile");
    } else {
      document.body.style.overflow = "auto";
      headerBurgerElement.classList.remove("header__burger-close");
      buttonSignUpElement.classList.remove("button-sign-up--mobile");
      buttonLogInElement.classList.remove("button-log-in--mobile");
    }
  });
});
