$(document).ready(function(){           
    $(".img1").mouseover(function(){
        $(this).animate({opacity: 1});
        "fast"
      });   
    $(".img1").mouseout(function(){
        $(this).animate({opacity: 0.5});
        "fast"
    });
    $(".img3").mouseover(function(){
        $(this).animate({zoom: "100%"});
        "fast"
      });
      $(".img3").mouseout(function(){
        $(this).animate({zoom: "50%"});
        "fast"
      });
    $(".img2").mouseover(function(){
        $(this).animate({width: "100%"});
    });  
    $(".img2").mouseout(function(){
        $(this).animate({width: "50%"});
    });          
  });


