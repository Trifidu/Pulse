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

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
});
