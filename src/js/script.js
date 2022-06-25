//   controls: false,
//   nav: true,

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: 1,
  controlsContainer: "#customize-controls",
  navPosition: "bottom",
  touch: true,
  mouseDrag: true,
  preventScrollOnTouch: "auto",
  responsive: {
    993: {
      nav: false,
      controls: true,
    },
    992: {},
    767: {},
    100: {
      controls: false,
      nav: true,
      //   navContainer: "#customize-nav",
    },
  },
});
document.querySelector(".goto-button").onclick = function () {
  slider.goTo(3);
};
