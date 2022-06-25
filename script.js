// $(window).scroll(function() {
//     if($(window).scrollTop()>30) {
//       $('.card-container').css('opacity', 1)
//       $('.card-container').addClass('animate__animated animate__fadeInUp ')
     
//     }
//  });  

function reSize(){  
  while($(window).width()<980) {
  $('.card-header').addClass('smaller')
$('.card-header').css('height', '200px')
.css('display', 'grid')
.css('justify-content', 'center')
.css('font-size', '100%')
.addClass('smaller')
$('.nkar').css('height', '150px');
break
}
while($(window).width()>980){
$('.card-header').css('height', '300px')
.css('display', 'flex')
.css('justify-content', 'start')
.css('font-size', '150%')
$('.nkar')
.removeClass('smaller')
.css('height', '80%');
break
}}
$(window).resize(reSize)
$( document ).ready(reSize)

