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

  $('#doc-filter-list').on('change', function(e) {
    e.preventDefault();
    var cat = $(this).val();
    $('.row.doctor').removeAttr('data-aos');
    if(cat != 0) {
      $('.row.doctor').fadeOut(300);
      setTimeout(function() {
        $('.row.doctor[data-cat="'+cat+'"]').fadeIn(300);
      }, 300);
    } else {
      $('.row.doctor').fadeIn(300);
    }
  });

  $('.row.prices').css('display', 'none');
  $('.row.prices').eq(0).css('display', 'flex')

  $('#prices-filter').on('change', function(e) {
    e.preventDefault();
    var cat = $(this).val();
    $('.row.prices').removeAttr('data-aos');
    if(cat != 0) {
      $('.row.prices').fadeOut(300);
      setTimeout(function() {
        $('.row.prices[data-cat="'+cat+'"]').fadeIn(300);
      }, 300);
    } else {
      $('.row.doctor').fadeIn(300);
    }
  });

  function teamRowHeight() {
    if(windowWidth > 991) {
      $('.team').height($('.team__carousel_detail').height() + 10);
    } else {
      $('.team').removeAttr('style');
    }
  }

  // putLogoItemToNav();
  teamRowHeight();

  $('.review-form input[type=file]').on('change', function(e) {
    var filename = e.target.files[0].name;
    $('label[for="photo"] span').text(filename);
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.photo-preview').attr('src', e.target.result);
        $('.photo-preview').fadeIn(300);
      }
  
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  $('.reviews .btn_red').on('click', function(e) {
    e.preventDefault();
    $('.review-form-wrapper').fadeToggle(300);
  });

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