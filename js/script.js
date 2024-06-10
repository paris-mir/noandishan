//------------------------about us------------------------//
$(document).ready(function(){
  $(".accomp__items:first").show();
  $(".accomp-nav:first").addClass("focus");
  $(".accomp-nav").click(function(event){
    index = $(this).index();
    $(".accomp-nav").removeClass("focus");
    $(this).addClass("focus");
    $(".accomp__items").hide();
    $(".accomp__items").eq(index).show()


  })
})


//------------------services section---------------------//
let slideCount =0;  
let servicesSlide = Array.from(document.getElementsByClassName("services-slide"))
let servicesNav = Array.from(document.querySelectorAll(".services_container .box"))
let nextSlide = document.querySelector(".services__next-arrow")
let prevSlide = document.querySelector(".services__prev-arrow")

function displayNone(){
  for(let i =0;i<servicesSlide.length;i++){
    servicesSlide[i].style.display
  }
}


$(document).ready(function(){
  $(".services_items:first").show();
  $(".services__details-list:first").addClass("focus");
  $(".services__details-list").click(function(event){
    index = $(this).index();
    $(".services__details-list").removeClass("focus");
    $(this).addClass("focus");
    $(".services_items").hide();
    $(".services_items").eq(index).show()


  })
})

$(document).ready(function(){
  $(".nav-details2:first").show();
  $(".nav-list2:first").addClass("focus");
  $(".nav-list2").click(function(event){
    index = $(this).index();
    $(".nav-list2").removeClass("focus");
    $(this).addClass("focus");
    $(".nav-details2").hide();
    $(".nav-details2").eq(index).show()
  })
})


$(document).ready(function(){
  $(".nav-details3:first").show();
  $(".nav-list3:first").addClass("focus");
  $(".nav-list3").click(function(event){
    index = $(this).index();
    $(".nav-list2").removeClass("focus");
    $(this).addClass("focus");
    $(".nav-details3").hide();
    $(".nav-details3").eq(index).show()
  })
})
$(document).ready(function(){
  $(".nav-details4:first").show();
  $(".nav-list4:first").addClass("focus");
  $(".nav-list4").click(function(event){
    index = $(this).index();
    $(".nav-list4").removeClass("focus");
    $(this).addClass("focus");
    $(".nav-details4").hide();
    $(".nav-details4").eq(index).show()
  })
})
$(document).ready(function(){
  $(".nav-details5:first").show();
  $(".nav-list5:first").addClass("focus");
  $(".nav-list5").click(function(event){
    index = $(this).index();
    $(".nav-list5").removeClass("focus");
    $(this).addClass("focus");
    $(".nav-details5").hide();
    $(".nav-details5").eq(index).show()
  })
})









//------------------career section---------------------//


$(document).ready(function () {
  $(".careers__list-nav ul li").click(function(){
    let index = $(this).index();
    $(".careers__item-list").hide()
    $(".careers__item-list").eq(index).show()
  })
});


//////mobile//////

$(document).ready(function () {
  $(".careers__list-nav2 > ul > li").click(function (e) {
      e.preventDefault();
        let index = $(this).index();
        $(".careers__list-nav2 > div").slideToggle();
      $(this).next().slideToggle();
      
  });
  console.log(index)
  console.log($(this).next())
});


///////comments///////

$(document).ready(function () {
  $(".slider-arrow-right").on("click",function(e){
    e.preventDefault();

    let currentActiveImage = $(".img-shown");
    let nextActiveImage = currentActiveImage.next();
    currentActiveImage.removeClass(".img-shown").addClass(".img-hidden").css("z-index",-10);
    nextActiveImage.addClass(".img-shown").removeClass(".img-hidden").css("z-index",20);
    $("#slider > li").not([currentActiveImage,nextActiveImage]).css("z-index",1)
  })

  
});






///////comment section////////

// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelector('#slider');
//     const slide = document.querySelectorAll('.slider-box');
//     const totalSlides = slide.length;
//     const prevButton = document.querySelector('.arrowRight');
//     console.log(prevButton)
//     const nextButton = document.querySelector('.arrowLeft');
//     let currentIndex = 0;

//     function goToSlide(index) {
//         slides.style.transform = 'translateX(' + (-index * 100) + '%)';
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         goToSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         goToSlide(currentIndex);
//     }

//     nextButton.addEventListener('click', nextSlide);
//     prevButton.addEventListener('click', prevSlide);

//     setInterval(nextSlide, 3000); // Change slide every 3 seconds
// });

// const Carousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
//     let leftPosition = 0;
//     let frame = document.querySelector(frameSelector);
//     let slides = document.querySelectorAll(slidesSelector);
//     let slidesNumber = slides.length;
//     let slider = document.querySelector(sliderSelector);

//     let leftButton = document.querySelector(btnLeftSelector);
//     let rightButton = document.querySelector(btnRightSelector);

//     frame.classList.add('frame');
//     slider.classList.add('slider');

//     leftButton.addEventListener("click", function() {
//         carousel.next();
//     });

//     rightButton.addEventListener("click", function() {
//         carousel.previous();
//     });

//     const moveSlide = function (value) {
//         leftPosition += value*400;
//         slider.style.left = leftPosition + 'px';
//     };

//     return {
//         next: function() {
//             if(leftPosition > (slidesNumber-1)*-400)
//             {
//                 moveSlide(+1);
//             } else {
//                 leftPosition = 0;
//                 slider.style.left = leftPosition + 'px';
//             }
//         },
//         previous: function() {
//             if(leftPosition !== 0) {
//                  moveSlide(-1);
//             } else {
//                 leftPosition = (slidesNumber-1)*-400;
//                 slider.style.left = leftPosition + 'px';
//             }
//         }
//     };
// };

// const carousel = new Carousel('#frame', '#slider', '#slider .slide', '.arrowLeft', '.arrowRight');

// console.log(careerItems.map(item => item.getAttribute('data-content')));
// careerList.forEach(item => (
//     item.addEventListener("click", function(x){
//         x.preventDefault();
//         const careerItem = careerItems.filter((item) => item.getAttribute('data-content') === x.target.getAttribute('data-content'));
//         if (careerItem.length) {
//             careerItem[0].classList.toggle('showed');

//         }
//         console.log(item)
//         console.log(x.target)

//     })
// ))
// console.log(careerList)

// console.log(careerItems)

// careerList.forEach(item => (
//     item.addEventListener("click", function(x){
//         x.preventDefault();

//     })
// ))

// function openCity(evt, cityName) {
//     let i;
//     const tabContent = document.getElementsByClassName("careers__list-nav-items");
//     for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }
//     const tabLinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

////////////jQuery////////////////////
// jQuery(document).ready(function ($) {
//   let slideCount = $("#frame ul li").length;
//   let slideWidth = $("#frame ul li").width();
//   let slideHeight = $("#frame ul li").height();
//   let sliderWidth = slideWidth * slideCount;
 
//   console.log(slideWidth)


//   $("#frame").css({ width: sliderWidth, height: slideHeight });
//   $("#frame ul").css({ minWidth: sliderWidth*2 });

// console.log($("#frame ul li"))

//   function moveLeft() {
//     $("#frame ul").animate(
//       {
//         left: +slideWidth/2,
//       },
//       200,
//       function () {
//         $("#frame ul li:first-child").appendTo($("#frame ul"));
//         $("#frame").css("left", "");
//       }
//     );
//   }
//   function moveRight() {
//     $("#frame ul").animate(
//       {
//         left: -slideWidth/2,
//       },
//       200,
//       function () {
//         $("#frame ul li:last-child").prependTo($("#frame ul"));
//         $("#frame").css("left", "");
//       }
//     );
//   }

//   $(".arrowLeft").on("click", function () {
//     moveLeft();
//   });
//   $(".arrowRight").on("click", function () {
//     moveRight();
//   });
// });
