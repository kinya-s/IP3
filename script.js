//show and hide paragraphs by clicking on the icons
event.preventDefault();
$(document).ready(function(){
  $(".icon").click(function(){
  $(".Design").toggle();
  $(".Design").toggle();
});
});

$(document).ready(function(){
  $(".icon").click(function(){
  $(".Development").toggle();
  $(".Development").toggle();
});
});

$(document).ready(function(){
  $(".icon").click(function(){
  $(".icon").toggle();
  $(".icon").toggle();
 });
});

document.getElementById("paragraph").innerHTML="Your message has been received.Thankyou."