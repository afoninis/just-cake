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

// Marquee
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContainer = document.querySelector(".brands__list");

// Sliders
const swiperHeader = new Swiper(".header__swiper", {
  spaceBetween: 30,
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

// Init
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

sectionMain.addEventListener("click", function (e) {
  if (!e.target.closest(".scroll__link")) return;
  e.preventDefault();
  document
    .getElementById(
      e.target.closest(".scroll__link").getAttribute("href").slice(1)
    )
    .scrollIntoView({ behavior: "smooth" });
});
