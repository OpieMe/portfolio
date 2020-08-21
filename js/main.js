new WOW().init = function () {};
new WOW().init();

new Swiper(".swiper-container", {
  pagination: {
    el: ".projects-pagination",
    bulletClass: "project-bullet",
    bulletActiveClass: "project-bullet-active",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
});
