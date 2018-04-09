$(document).ready(function() {
  $("#product-view").slick({
    autoplay: false,
    arrows: true,
    dots: true,
    fade: true,
    cssEase: "linear"
  });

  $("#related-slider").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $(".product-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true
  });

  var sw = screen.width;
  console.log(sw);
  if (sw <= 767) {
    $(".slide").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    });
  } else {
    $(".slide").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    });
  }
});
