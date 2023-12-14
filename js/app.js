$(document).ready(function () {
  AOS.init();

  $('img').attr('loading', 'lazy')
})
$(".hello p, .wrap-detikx p, .wrap-detikx .judul, .wrap-detikx .rutes").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".wrap-detikx .cardWrap, .wrap-detikx .gambar").attr({ "data-aos": "zoom-in", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".alls .img,.credit .jud, .alls .angka, .batagor").attr({ "data-aos": "fade-right", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".credit .nam").attr({ "data-aos": "fade-left", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".alls li").attr({ "data-aos": "fade-right", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

// .cardWrap
$('.w-kelas').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // fade: true,

  slidesToScroll: 1,
  // adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});