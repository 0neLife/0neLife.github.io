$(document).ready(function(){

    //  Switch button. You can go to the menu (three strips)
  $('.burger-btn').on('click', function(){
    $(this).toggleClass('active');
      if($(this).data('menu') === true)$('.burger-menu').toggleClass('active');
  });

  $('.burger-menu ul li a').on('click', function (e) {
    e.preventDefault();
    $('.burger-btn').click();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });


  $('.mob-burger-btn').on('click', function(){
      $(this).toggleClass('active');
      $('.fixed-scroll-menu nav').slideToggle('fast');
    });

      

  //arrow-down
    $('.animation-arrow').on('click',function(){
    $('body,html').animate({scrollTop: $(window).height()+5}, '1200');
  });

  //show wrap-menu after scrolling:
  $(document).on('scroll', function() {
    if ($(this).scrollTop() > $(window).height()-20) {
      $('.fixed-scroll-menu').addClass('active');
    } else {
      $('.fixed-scroll-menu').removeClass('active');
    };
  });

  //   $('.fixed-nav-menu ul li a').on('click', function (e) {
  //   e.preventDefault();
  //     var id  = $(this).attr('href'),
  //       top = $(id).offset().top;
  //   $('body,html').animate({scrollTop: top}, 1000);
  // });

    //waypoints
  //down
  $('.wp-zone').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('disable-click');
    // form the selector dynamically.
    // "this" keyword refers waypoint object and the element is located at "this.element"
    // using "this.element.id", get the nav anchor you want to target
    // example: "nav a[href='#landing']"
    var selector = "nav a[href='#" + this.element.id + "']"; 
    $(selector).addClass('disable-click');
  }
  }, {
  offset: '30%'
});
//up
  $('.wp-zone').waypoint(function(direction) {
    if (direction === 'up') {
      $('nav a').removeClass('disable-click');
      var selector = "nav a[href='#" + this.element.id + "']"; 
      $(selector).addClass('disable-click');
    }
  }, {
    offset: '-30%'
}); 

//Tabs for cube-title
  $('#about .tab').click(function() {
  $('#about.title-section').removeClass('active');
  $(this).addClass('active');
  $('#about .title-section').hide();
  var tab = $(this).data('filter');
  $('#about .title-section[data-index=' + tab + ']').fadeIn(2000).show();
});

//tabs for cube
  $('.tab').click(function() {
    $('.svg-progress-skill').trigger("destroy");
    $('.tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.tab-item').removeClass('active').eq($(this).index()).addClass('active');
    if($(this).hasClass('skills')){
      $('.svg-progress-skill').trigger("redraw");
    }
  }).eq(0).addClass('active');

  $('.svg-progress-skill').svgprogress({
    figure: "hexagon",
    emptyFill: "#ccc",
    progressFillGradient: ['#38ef7d', '#3fada8'],
    progressWidth: 3
  });

  //tabs for cord
  $('.tab').click(function() {
    $('.cord-wrap').addClass('active');
});
  $('.tab:nth-child(1)').click(function() {
    $('.cord-wrap').removeClass('active');
});

//copies code for article 
// $('.btn-clipboard').click(function(){
//   var clipboard =  new Clipboard('.btn-clipboard');
//   $(this).addClass('active');
//   var copy = setInterval(function(){
//      $('.btn-clipboard').removeClass('active');
//      clearInterval(copy);
//    }, 1500);
// });

//E-mail Ajax Send
$('.send-form').submit(function() { //Change
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