AOS.init({
    offset : 400,
    duration : 1000,
  });

$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).toggleClass('fa-xmark')
        $('.nav-menu').slideToggle(500);
    })
})