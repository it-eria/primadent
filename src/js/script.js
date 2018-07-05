$(function() {
  var resizeDoneTimer;
  var windowWidth = $(window).innerWidth();
  var docDescr = [];
  
  function docPhoto() {
    var docSelected = $('select#doctor').val();
    var docPhoto = $('select#doctor option[value="' + docSelected + '"]').attr('data-doctor');
    $('.doc-photos-wraper img#'+docPhoto).fadeIn(300);
  }

  $('.content-block_registered').css('min-height', $(window).height() - $('.header').outerHeight() - $('.footer').outerHeight());

  $(window).on('resize', function() {
    $('.content-block_registered').css('min-height', $(window).height() - $('.header').outerHeight() - $('.footer').outerHeight());
  });

  docPhoto();

  $('select#doctor').on('change', function() {
    $('.doc-photos-wraper img').fadeOut(300);
    setTimeout(function() {
      docSelected = $('select#doctor').val();
      docPhoto = $('select#doctor option[value="' + docSelected + '"]').attr('data-doctor');
      $('.doc-photos-wraper img#'+docPhoto).fadeIn(300);
    }, 300);
  });

  // $('.row.prices').css('display', 'none');
  // $('.row.prices').eq(0).css('display', 'flex');

  AOS.init();

  $('.to-bottom').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(window).height()
    }, 300);
  });

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

  $('#doc-filter-list').on('change', function() {
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
      $('.row.prices').fadeOut(300);
      setTimeout(function() {
        $('.row.prices').fadeIn(300);
      }, 300);
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

  $('input[type=file]').on('change', function(e) {
    var filename = e.target.files[0].name;
    var parent = $(this).parent().parent();
    $(this).parent().parent().find('label[for="photo"] span').text(filename);
    $(this).parent().parent().find('label[for="resume"] span').text(filename);
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $(parent).find('.photo-preview').attr('src', e.target.result);
        $(parent).find('.photo-preview').fadeIn(300);
      }
  
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  $('.reviews .btn_red').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.review-form-wrapper').fadeToggle(300);
  });

  $('.btn_burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.header__main-nav, .header__languages, .mob-register-btn').toggleClass('uncollapsed');
  });

  $('#doctors-filter').on('change', function() {
    var val = $(this).val();
    $('.team__carousel_photo').slick('slickFilter', '.team__carousel_photo__slide');    
    $('.team__carousel_photo').slick('slickFilter', '.team__carousel_photo__slide[data-cat="'+val+'"]');
  });

  $('.btn_red.vacations').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.vacations-list').slideToggle(300);
    $('.vacations-list').parent().find('form').slideToggle(300);
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

  onElementHeightChange(document.body, function() {
    AOS.refresh();
  });

  // setTimeout(function() {
  //   $('.preloader').fadeOut(3000);
  // }, 3500);
  $('.preloader video').on('ended', function() {
    $('body').removeAttr('class');
    $('.preloader').fadeOut(300);
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

iteriaWatermark();

function onElementHeightChange(elm, callback) {
  var lastHeight = elm.clientHeight
  var newHeight;
  
  (function run() {
      newHeight = elm.clientHeight;      
      if (lastHeight !== newHeight) callback();
      lastHeight = newHeight;

      if (elm.onElementHeightChangeTimer) {
        clearTimeout(elm.onElementHeightChangeTimer); 
      }

      elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}

