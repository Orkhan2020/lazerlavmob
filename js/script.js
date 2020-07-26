
$(document).ready(function() {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger,.header__menu,.header__link').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


jQuery(document).ready(function() {
jQuery("a.scrollto").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
return false;
	});
});



$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 641,
				settings: {
					slidesToShow:1,
          arrows:false
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow:1,
          arrows:false
				}
			}
		],
		appendDots:$('.dots-container')
	});
});
$(document).ready(function(){
  $('.testimonials__').slick({
    arrows:false,
    dots:false,
    slidesToShow:3,
    autoplay:true,
    speed:1000,
    autoplaySpeed:3000,
    adaptiveHeight: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ],
    appendDots:$('.dots-testimonial_')
  });
});



$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");





function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}


ibg();

function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");

  if (dots.style.display === "none") {
  	dots.style.display="inline";
  	btn.innerHTML="Читать далее";
  	more.style.display="none";
  }
  else {
  	dots.style.display="none";
  	btn.innerHTML="СКРЫТЬ";
  	more.style.display="inline";
  }
}


//magnificPopup
$(document).ready(function() {
$(".gallery").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
      }
    });
});
$(document).ready(function() {
  $('.popup-with-slider-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});

  

//accardion
$(document).ready(function() {
  $('.questions__title').click(function(event) {
    if($('.container_questions_accordion').hasClass('one')){
      $('.questions__title').not($(this)).removeClass('active');
      $('.questions__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
