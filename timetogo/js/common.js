$(document).ready(function(){

/*Write code here*/

  //slider
  var sliderConfig = {
    navigation : false,
    slideSpeed : 1000,
    autoplay: true,
    autoPlayTimeout:1500,
    autoPlayHoverPause:true,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>", 
    "<i class='fa fa-angle-right'></i>"],
    gotofirst: true,
    paginationSpeed : 2000,
    items : 3,
    itemsDesktop : [991,2],
    itemsDesktopSmall : [468,1],
    itemsTablet: false,
    itemsMobile : false

  };
   $('#owl-demo').owlCarousel(sliderConfig);

   
  //E-mail Ajax Send
  $("add-class").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});