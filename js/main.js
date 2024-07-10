// / <reference types="@types/jquery" />


$(".openbtn").on('click',function(){
    $(".menu").animate({ width:'250px'},500)
   $(".home-content").animate({marginLeft :'250px'},500)
})

$(".closebtn").on('click',function(){
    $(".menu").animate({ width:'0'},500)
   $(".home-content").animate({marginLeft :'0'},500)
})

// sec1

$('.sec1 h3').on('click',function(){
    $('.sec1 .inner').not($(this).next('.inner')).slideUp(); 
    $(this).next('.inner').slideToggle();
})


// sec2
window.onload = function() {
    countDown("10 October 2025 9:56:00");
};

function countDown(date) {
    let futureDate = new Date(date).getTime() / 1000;
    
    function updateCountdown() {
        let currentDate = new Date().getTime() / 1000;
        let difference = futureDate - currentDate;

        let days = Math.floor(difference / (24 * 60 * 60));
        let hours = Math.floor((difference - (days * 24 * 60 * 60)) / 3600);
        let mins = Math.floor((difference - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
        let secs = Math.floor(difference - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

        $('.days').html(`${days} d`);
        $('.hours').html(`${hours} h`);
        $('.min').html(`${mins} m`);
        $('.sec').html(`${secs} s`);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// footer
var maxLength = 100;
$('textarea').keypress(function() {
  var length = $(this).val().length;
  var lettersLeft = maxLength-length;
  if(lettersLeft<=0)
            {
                 $(".footer-text").text("your available character finished").css('color','red');
                
            }
        else{
        
        $("#num").text(lettersLeft);
        }
});
