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

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContainer = document.querySelector(".brands__list");

root.style.setProperty("--marquee-elements", marqueeContainer.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContainer.appendChild(marqueeContainer.children[i].cloneNode(true));
}

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

const formCta = document.querySelector(".cta__form");

formCta.addEventListener("click", function (e) {
  if (e.target.dataset.contact === "phone") choosePhone();
  else if (e.target.dataset.contact === "email") chooseEmail();
});
