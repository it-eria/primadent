$(function() {
  var resizeDoneTimer;
  var windowWidth = $(window).innerWidth();
  var docDescr = [];

  // function putLogoItemToNav() {
  //   var logoItem = '<li style="max-width: 0; opacity: 0; top: 0;" class="logo-item d-none d-lg-inline-block"><a href="https://'+window.location.hostname+'/"><img src="assets/img/logo.png" alt="logo"></a></li>';
  //   var insertAfterObj = $('.header__main-nav ul li').eq($('.header__main-nav ul li').length / 2 - 1);
  //   $(logoItem).insertAfter(insertAfterObj);
  //   setInterval(function() {
  //     $('.header__main-nav ul .logo-item').css({
  //       'max-width': '100vw',
  //       'opacity': '1'
  //     });
  //   }, 300);
  // }

  function teamRowHeight() {
    if(windowWidth > 991) {
      $('.team').height($('.team__carousel_detail').height() + 10);
    } else {
      $('.team').removeAttr('style');
    }
  }

  // putLogoItemToNav();
  teamRowHeight();

  $('.btn_burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.header__main-nav, .header__languages, .mob-register-btn').toggleClass('uncollapsed');
  });

  $('#doctors-filter').on('change', function() {
    var val = $(this).val();
    console.log(val);
    $('.team__carousel_photo').slick('slickFilter', '.team__carousel_photo__slide');    
    $('.team__carousel_photo').slick('slickFilter', '.team__carousel_photo__slide[data-cat="'+val+'"]');
  });

  $(window).on('resize', function(e) {
    clearTimeout(resizeDoneTimer);
    resizeDoneTimer = setTimeout(function() {
      // Resize callback code
      windowWidth = $(window).innerWidth();
      
      if(windowWidth > 991) {
        $('.header__main-nav, .header__languages, .mob-register-btn').removeClass('uncollapsed');
        $('.btn_burger').removeClass('clicked');
      }
      
      teamRowHeight();
    }, 250);
  });
});

function iteriaWatermark() {
  console.log("            hMMMMMMMy       :MMMMMMMM`            ");
  console.log("            hMM                   yMM`            ");
  console.log("            hMM      /oooooo`     yMM`            ");
  console.log("            hMM      sdddddd`     yMM`            ");
  console.log("            hMM      sdddddd`     yMM`            ");
  console.log("            hMM      /oooooo`     yMM`            ");
  console.log("            hMM                   yMM`            ");
  console.log("            hMMMMMMMy       :MMMMMMMM`            ");
  console.log("                                                  ");
  console.log(".` .::::::::` -oooooo.  ooo++:    :.      /.      ");
  console.log("/-     :-     /+        m   `/m`  s:     /hd`     ");
  console.log("/-     :-     /+        m    `m-  s:    -d`:h     "); 
  console.log("/-     :-     /hoooo+   N+++yo-   s:   `m:``ys    ");
  console.log("/-     :-     /+        m   oy`   s:   do++++h/   ");
  console.log("/-     :-     /o        m    :d.  s:  yo     `m-  ");
  console.log(".`     ``     .//////\`  :     .:  -` `/       .: ");
}

// iteriaWatermark();

// Init AOS
AOS.init();