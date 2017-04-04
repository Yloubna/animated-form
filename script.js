const changeWidth = function (){
  $(this).css({
    "width": "50vw",
    "transition": "width  0.1s"
  })     
 }


const rearangeWidth = function(){
  $(this).css({
    "width": "25vw",
    "transition": "width  0.1s",
  }) 
  
  
}

const removeHolder = function (){
  $(this).removeAttr('placeholder')
}

$("input").mouseenter(changeWidth).click(removeHolder)
$("input").mouseleave(rearangeWidth)


$("#b1").click(function(){
        $(".name").slideDown("swing");
        $(".second").slideUp("swing");
        $(".third").slideUp("swing");

})
 
$("#b2").click(function(){        
  
  $(".name").slideUp("swing")
  $(".second").removeClass(".second").slideDown("swing");
  $(".third").slideUp("swing");
        
        
})

$("#b3").click(function(){
       
  $(".name").slideUp("swing").removeClass(".third").addClass(".second");
   $(".second").slideUp("swing").removeClass(".third").addClass(".second");
     $('.third').slideDown("swing").removeClass(".third").addClass(".second");
        
})

$('#b4').click(function(){
   $(".name").slideDown("swing");
   $(".second").slideDown("swing");
    $(".third").slideDown("swing");
})

$( window ).scroll(function(){
  $("header").css({
    "background-color":"rgba(2, 2, 2, 0.6)",
    "transition":"1s"
  })
})


