//Toggle bar Js 

$(document).ready(function(){
  var cls =  document.getElementById("test")
  
  $('.menu-toggle').click(function(){
      $('nav').addClass('active');
  })
  
  $('#navclose').click(function(){
      $('nav').removeClass('active');
  })

  $("#popup-btn").click(function() {
      $(".popup").fadeIn();
  });

  $(".popup-close").click(function() {
      $(".popup").fadeOut();
  });
  
})

//Sticky Header
 
          window.addEventListener('scroll', function() { 
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('#header-sticky').addClass('sticky-header');
      } else {
         $('#header-sticky').removeClass('sticky-header');
      }
  });
    });




// 
          var copy = document.querySelector(".logos-slide").cloneNode(true);
         document.querySelector(".logo-slider").appendChild(copy);


         
// NEWS Section Slider 
        var swiper2 = new Swiper(".news-slider", {
         direction: "horizontal",
         loop: true,
         autoHeight: false,
         centeredSlides:false,
         slidesPerView: 1,
         spaceBetween: 20,
         navigation: {
         nextEl: "#swiper-news-next",
         prevEl: "#swiper-news-prev"
         },
         breakpoints: {
         640: {
         slidesPerView:2,
           spaceBetween: 40,
         },
         992: {
         slidesPerView: 2.8,
           spaceBetween: 30,
         },
         1400: {
         slidesPerView: 2.8,
           spaceBetween: 87,
         }
         },
         // Navigation arrows
         
         });

// Testimonial Section Slider

        var swiper = new Swiper(".mySwiper", {
              loop: true,
           navigation: {
             nextEl: "#testimonial-next",
             prevEl: "#testimonial-prev",
           },
         //     autoplay: {
         //   delay: 1500,
         // },
         });