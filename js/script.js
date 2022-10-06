// Root
const root = document.documentElement;

// Form
const formCta = document.querySelector(".cta__form");

// Sections
const sectionMain = document.getElementById("main");
const sectionHeader = document.getElementById("header");
const sectionShowroom = document.getElementById("showroom");
const sectionWeAre = document.getElementById("we-are");
const sectionAdvantages = document.getElementById("advantages");
const sectionResults = document.getElementById("results");
const sectionCustomers = document.getElementById("customers");
const sectionBrands = document.getElementById("brands");
const sectionCta = document.getElementById("cta");

// Buttons
const btnBurger = document.querySelector(".header__burger-box");

// States
let stateMenu = false;

// Marquee
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContainer = document.querySelector(".brands__list");

// Sliders
const swiperHeader = new Swiper(".header__swiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperShowroom = new Swiper(".showroom__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperCustomers = new Swiper(".customers__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".customers__swipe-next",
    prevEl: ".customers__swipe-back",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Functions
const marqueeInit = () => {
  root.style.setProperty(
    "--marquee-elements",
    marqueeContainer.children.length
  );

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContainer.appendChild(marqueeContainer.children[i].cloneNode(true));
  }
};
const chooseEmail = () => {
  document
    .querySelector(".cta__form-label--phone")
    .closest(".cta__form-field")
    .classList.add("hidden");
  document
    .querySelector(".cta__form-label--email")
    .closest(".cta__form-field")
    .classList.remove("hidden");
};
const choosePhone = () => {
  document
    .querySelector(".cta__form-label--phone")
    .closest(".cta__form-field")
    .classList.remove("hidden");
  document
    .querySelector(".cta__form-label--email")
    .closest(".cta__form-field")
    .classList.add("hidden");
};

const showMenu = () => {
  stateMenu = true;
  document.querySelector(".header__state").checked = stateMenu;
};
const hideMenu = () => {
  stateMenu = false;
  document.querySelector(".header__state").checked = stateMenu;
};

// Init
root.style.setProperty(
  "--marquee-elements-width",
  `${document.body.offsetWidth}px`
);
marqueeInit();

document
  .querySelector(".results")
  .setAttribute(
    "scroll-margin",
    `${
      document.querySelector(".results__note").getBoundingClientRect().height /
      2
    }px`
  );

// Event listeners
formCta.addEventListener("click", function (e) {
  if (e.target.dataset.contact === "phone") choosePhone();
  else if (e.target.dataset.contact === "email") chooseEmail();
});

btnBurger.addEventListener("click", function (e) {
  e.preventDefault();
  stateMenu === false ? showMenu() : hideMenu();
});

sectionMain.addEventListener("click", function (e) {
  if (e.target.closest(".header__list") !== null) return;
  if (
    document.body.offsetWidth >= 800 &&
    e.target.closest(".header__list") === null
  )
    return;
  if (
    e.target.closest(".header__list") === null &&
    window.getComputedStyle(document.querySelector(".header__list"), null)
      .display === "none"
  )
    return;

  if (e.target.closest(".header__burger-box") === btnBurger) return;

  e.preventDefault();
  if (e.target.closest(".scroll__link"))
    document
      .getElementById(
        e.target.closest(".scroll__link").getAttribute("href").slice(1)
      )
      .scrollIntoView({ behavior: "smooth" });
  if (!e.target.closest(".header__list"))
    stateMenu === false ? showMenu() : hideMenu();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && stateMenu) hideMenu();
});

window.addEventListener("resize", function () {
  root.style.setProperty(
    "--marquee-elements-width",
    `${document.body.offsetWidth}px`
  );
});
