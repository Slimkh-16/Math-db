var _events = '';

/*================================alert==========================*/
function alert(title, mess) {
    // $('#modal-thank').modal('close');
    $('#modal-thank .modal-head').html(title);
    $('#modal-thank .modal-body p').html(mess);
    setTimeout(function(){
      $('#modal-thank').modal('open');
    }, 300);
}
/*================================end-alert==========================*/

var isMobile = false,
    scrollTopPosition;
function getBrowser() {
    var ua = navigator.userAgent;
    var bName = function () {
        if (ua.search(/Edge/) > -1) return "edge";
        if (ua.search(/MSIE/) > -1) return "ie";
        if (ua.search(/Trident/) > -1) return "ie11";
        if (ua.search(/Firefox/) > -1) return "firefox";
        if (ua.search(/Opera/) > -1) return "opera";
        if (ua.search(/OPR/) > -1) return "operaWebkit";
        if (ua.search(/YaBrowser/) > -1) return "yabrowser";
        if (ua.search(/Chrome/) > -1) return "chrome";
        if (ua.search(/Safari/) > -1) return "safari";
        if (ua.search(/maxHhon/) > -1) return "maxHhon";
    }();
                                                                                                                                                                      
    var version;
    switch (bName) {
        case "edge":
            version = (ua.split("Edge")[1]).split("/")[1];
            break;
        case "ie":
            version = (ua.split("MSIE ")[1]).split(";")[0];
            break;
        case "ie11":
            bName = "ie";
            version = (ua.split("; rv:")[1]).split(")")[0];
            break;
        case "firefox":
            version = ua.split("Firefox/")[1];
            break;
        case "opera":
            version = ua.split("Version/")[1];
            break;
        case "operaWebkit":
            bName = "opera";
            version = ua.split("OPR/")[1];
            break;
        case "yabrowser":
            version = (ua.split("YaBrowser/")[1]).split(" ")[0];
            break;
        case "chrome":
            version = (ua.split("Chrome/")[1]).split(" ")[0];
            break;
        case "safari":
            version = ua.split("Safari/")[1].split("")[0];
            break;
        case "maxHhon":
            version = ua.split("maxHhon/")[1];
            break;
    }
    var platform = 'desktop';
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
    var browsrObj;
    try {
        browsrObj = {
            platform: platform,
            browser: bName,
            versionFull: version,
            versionShort: version.split(".")[0]
        };
    } catch (err) {
        browsrObj = {
            platform: platform,
            browser: 'unknown',
            versionFull: 'unknown',
            versionShort: 'unknown'
        };
    }
    return browsrObj;
};
var browserYou = getBrowser();
if (browserYou.platform == 'mobile') { isMobile = true;document.documentElement.classList.add('mobile')}else {document.documentElement.classList.add('desktop')}
if ((browserYou.browser == 'ie')) {document.documentElement.classList.add('ie');}
if ((browserYou.browser == 'firefox')) {document.documentElement.classList.add('firefox');}
if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
    alert('Обновите браузер','')
};
var locationHash = window.location.hash.replace('#','');
window.location.hash = '';
window.onload = function() {
  if(document.querySelector('.main-page') != undefined) {
    if(locationHash.length > 3){
      scrollTo(document.body, document.getElementById(locationHash).offsetTop - 55, 500);
    }
  } else {
    if(locationHash.length > 3){
      scrollTo(document.body, document.getElementById(locationHash).offsetTop + document.querySelector('.parent-scroll-element').offsetTop - 55, 500);
    }
  }
  // if(locationHash.length > 3){
  //   scrollTo(document.body, document.getElementById(locationHash).offsetTop + document.querySelector('.parent-scroll-element').offsetTop - 55, 500);
  // }
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.add('loading')
  if (isMobile == true) {body.parentNode.classList.add('mobile'); }
  setTimeout(function(){body.classList.add('loaded')},1000)
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},1500)
  // //PRELOADER
  var swiper = new Swiper('.main-slider', {
      loop:true,
      autoplay: 2000,
      speed: 1500,
      parallax:true,
      slidesPerView: 1,
      pagination: '.swiper-pagination',
              paginationClickable: true,
  });
  var swiper = new Swiper('.hire-slider', {
      loop:false,
      nextButton: '.hire-section .swiper-button-next',
      prevButton: '.hire-section .swiper-button-prev',
      parallax:true,
      spaceBetween: 30,
      slidesPerView: 3,
      onReachBeginning: function(){
        document.querySelector('.hire-slider').classList.remove('end-slider')
      },
      onReachEnd:function(){
        document.querySelector('.hire-slider').classList.add('end-slider')
      },
      breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1023: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
  });
  if($('.news-slider').length) {
    $('.news-slider').each(function(i,this_item){
      var swiper2 = new Swiper($(this_item), {
          loop:false,
          nextButton: $(this_item).parents('.news-section').find('.swiper-button-next'),
          prevButton: $(this_item).parents('.news-section').find(' .swiper-button-prev'),
          parallax:true,
          spaceBetween: 30,
          slidesPerView: 2,
          breakpoints: {
              600: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1023: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }
      });
    });
  }
  
  // mobile menu
  document.querySelector('.js_open_mob_menu').addEventListener('click',function(){
    document.querySelector('.mobile-menu').style.display = 'block';
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.body.classList.add('noscroll');
    setTimeout(function(){document.querySelector('.mobile-menu').className = 'mobile-menu visible vis-li'},200);
  })
  document.querySelector('.js_close_mob_nav').addEventListener('click',function(){
    document.querySelector('.mobile-menu').classList.remove('vis-li')
    setTimeout(function(){
        document.querySelector('.mobile-menu').classList.remove('visible');
        document.body.classList.remove('noscroll');
        document.body.style.paddingRight = 0;
    },1000);
    setTimeout(function(){document.querySelector('.mobile-menu').style.display = 'none'},1500);
  });
  // document.querySelector('.mobile-menu-drop').addEventListener('click',function(e){
  //   if(e.target.tagName == 'A') {
  //     document.querySelector('.mobile-menu').classList.remove('vis-li')
  //     setTimeout(function(){
  //         document.querySelector('.mobile-menu').classList.remove('visible');
  //         document.body.classList.remove('noscroll');
  //         document.body.style.paddingRight = 0;
  //     },1000);
  //     setTimeout(function(){
  //       document.querySelector('.mobile-menu').style.display = 'none';
  //       document.querySelector('.open-drop-menu').classList.remove('active');
  //       document.querySelector('.mobile-menu .mobile-menu-drop').style.display = 'none';
  //     },1500);
  //   }
  // });
  $('.mobile-menu-drop a').on('click',function(){
    $('.mobile-menu').removeClass('vis-li');
    setTimeout(function(){
        $('.mobile-menu').removeClass('visible');
        $('body').removeClass('noscroll');
        document.body.style.paddingRight = 0;
    },1000);
    setTimeout(function(){
      document.querySelector('.mobile-menu').style.display = 'none';
      $('.open-drop-menu').removeClass('active');
      document.querySelector('.mobile-menu .mobile-menu-drop').style.display = 'none';
    },1500);
  });
  // mobile menu
  // search
  document.querySelector('.js_open_search').addEventListener('click',function(){
    document.querySelector('.search-box').classList.add('visible');
    setTimeout(function(){
      document.querySelector('.search-box input').focus();
    },400);
  });
  document.querySelector('.js_close_search').addEventListener('click',function(){
    document.querySelector('.search-box').classList.remove('visible');
  });
  // search
  // map
  if(document.querySelector('#map') != undefined) {
      initialize()
  }
  // map
  // document scroll to
  if(document.querySelector('[data-scroll]') != undefined) {
    document.addEventListener('click',function(e){
      var elmentClick = e.target,
          elementScrollTo = elmentClick.getAttribute('data-scroll-to');
          elmentParent = elmentClick.parentNode;

      if(elmentClick.hasAttribute('data-scroll') === true) {
        scrollTo(document.body, document.getElementById(elementScrollTo).offsetTop + document.querySelector('.parent-scroll-element').offsetTop - 55, 500);
        e.preventDefault();
      }
    });
  }
  // document scroll to
  // file
  if(document.querySelector('input[type="file"]') != undefined) {
    document.querySelector('input[type="file"]').addEventListener('change',function(){
      var file = this.value.split(/\\/),
          fileLength = file.length;
      this.parentNode.nextElementSibling.innerText = file[fileLength - 1];
    });
  };
  // if(document.querySelector('.drop-menu-arrow') != undefined) {
  //   positionArrow()
  // }
  if(document.querySelector('.js_height') != undefined) {
    heightBlock('.js_height')
  }
}
window.onresize = function() {
  // if(document.querySelector('.drop-menu-arrow') != undefined) {
  //   positionArrow()
  // }
  if(document.querySelector('.js_height') != undefined) {
    heightBlock('.js_height')
  }
}
window.onscroll = function() {
  scrollTopPosition = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if (scrollTopPosition > 150) {
   document.querySelector('.header').classList.add('fix')
  }else {
    document.querySelector('.header').classList.remove('fix')
  }
}
function positionArrow() {
  [].slice.call(document.querySelectorAll('.with-drop')).forEach(function(item){
    var arrowleft = item.offsetLeft;
    item.children[1].children[0].style.left = arrowleft + 18 + "px";
  });
}
function scrollTo(element, to, duration) {
    var start = element.scrollTop ;
    if(browserYou.browser == 'firefox') {
      start = document.documentElement.scrollTop
    }
    var change = to - start,
        currentTime = 0,
        increment = 20,
        scrollTopPosition = document.documentElement.scrollTop ;
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(browserYou.browser == 'firefox') {
          document.documentElement.scrollTop = val;
        }
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
function initialize() {
  var myLatlng = new google.maps.LatLng(50, 35);
  var myCenter = new google.maps.LatLng(50, 35);
  var mapOptions = {
    zoom: 15,
    center: myCenter,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'images/marker.png'
  });
};
function heightBlock(ell){
  var elem = document.querySelectorAll(ell);
  var maxH = 0;
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = "";
    elem[i].removeAttribute("style");
    if (maxH < elem[i].offsetHeight) {
      maxH = elem[i].offsetHeight; 
    }
  }
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = maxH + "px";
  }
}
$(window).resize(function(){
  // puship sidebar
  if(document.querySelector('.page-left-fixed-nav') != undefined){
    pushipElement();
    var posLeft = $('.page-item>.container').offset().left + 15;
    $('.page-left-fixed-nav').css('left',posLeft);
  }
  // puship sideba
});
$(window).load(function(){
  // puship sidebar
  if(document.querySelector('.page-left-fixed-nav') != undefined){
    pushipElement();
    var posLeft = $('.page-item>.container').offset().left + 15;
    $('.page-left-fixed-nav').css('left',posLeft);
  }
  // puship sidebar
});
$(document).ready(function() {

    $("[data-active]").each(function(){
      _val = $(this).val();
      if(_val != '') {
        $(this).find("option").removeAttr("selected");
        $(this).find("option[value="+_val+"]").attr("selected", "selected");
      }
    });

  // filter box
  var _selectorInvestItem = '.js_invests-item';
      $(_selectorInvestItem).on('click', function (e) {
          e.preventDefault();
          var _$this = $(this);
          var _$progrSelect = $('.js_progr-select');

          _$this.siblings(_selectorInvestItem).removeClass('active').find('.js_invests-hide').text('choose');

          _$this.addClass('active').find('.js_invests-hide').text('chosen');

          _$progrSelect.val(+_$this.data('select-value'));
          _$progrSelect.material_select();

          $('html, body').animate({
              scrollTop: $('#js_about').offset().top
          }, 500);
      });

      function normalizeData(str) {
          return str.split(',').map(function (item) {
              return item.trim();
          });
      }

      $(".chosen-select").chosen();

      var _$contactForm = $('.js_contact-form');
      if (_$contactForm.size()) {
          $(document).on('click', '.js_sidebar-nav__item', function (e) {
              e.preventDefault();
              var _$this = $(this);
              var _$selectContactForm = _$contactForm.find('.' + normalizeData(_$this.data('contact-form'))[0]);
              var _val = normalizeData(_$this.data('contact-form'))[1];

              _$selectContactForm.val(_val);
              _$selectContactForm.material_select();
          });

          var _$contactFormTeam = _$contactForm.find('.js_contact-form__team-chosen');
          var _$sidebarNavFilter = $('.js_sidebar-nav__filter');

          function heandlerSidebarNavFilter(e) {
              var data = [];
              _$sidebarNavFilter.find('input:checked').each(function () {
                  data.push($(this).data('select-value'));
              });

              _$contactFormTeam.val(data);
              _$contactFormTeam.trigger("chosen:updated");
              // _$contactFormTeam.material_select();
          }

          heandlerSidebarNavFilter();

          _$sidebarNavFilter.on('click', 'input:checkbox', heandlerSidebarNavFilter);

          _$contactFormTeam.on('change', function (e) {
              var _dataArr = $(this).val();

              _$sidebarNavFilter.find('input:checkbox').prop('checked', false);
              if (Array.isArray(_dataArr)) {
                  _dataArr.forEach(function (item) {
                      _$sidebarNavFilter.find('input:checkbox[data-select-value="' + item + '"]').prop('checked', true);
                  })
              }
          })
      }
  // filter box
  $('.open-drop-menu').on('click',function(){
    $(this).parents('.with-menu').find('.mobile-menu-drop ').slideToggle(500);
    $(this).toggleClass('active');
  });
  $(document).on('click','.add-theme-title',function(){
    var themeTitle = $(this).attr('data-theme');
    $('.js_select_theme option').removeAttr('selected')
    $('.js_select_theme').material_select('destroy');
    $('.js_select_theme option[data-id='+ themeTitle+']').attr('selected','selected')
    $('.js_select_theme').material_select();
    $('body,html').animate({scrollTop: $('.contact-form').offset().top - 50},500);
    return false;
  });
  // menu drop
  $('.head-nav li.with-drop').hover(
    function(){
      var drop = $(this);
      $('.width-drop').removeClass('act');
      $('.header-bottom').find('.drop-menu').removeClass('visible');
      $(drop).find('.drop-menu').show();
      setTimeout(function(){
        $(drop).find('.drop-menu').addClass('visible');
        $(drop).addClass('act')
      },300);
    },
    function(){
      $('.header-bottom').find('.drop-menu').hide();
      $('.header-bottom').find('.drop-menu').removeClass('visible');
      $('.width-drop').removeClass('act');
    }
  );
  // menu drop
  // collapse
  $(document).on('click','.collapse-nav .js_collapse_nav',function(){
    var heightCollapseElement;
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().removeClass('active');
      $(this).parent().find('.collapse-box').slideUp(500,function(){
        heightCollapseElement = 0;
        $('.page-left-fixed-nav').animate({'marginTop': -heightCollapseElement},300);
      });
      
    }else {
      $('.collapse-box').slideUp(500)
      $('.js_collapse_nav').removeClass('active');
      $('.collapse-nav .collapse-butt').removeClass('active');
      $('.collapse-nav').removeClass('active');
      $(this).addClass('active');
      $(this).parent().addClass('active');
      $(this).parent().find('.collapse-box').slideDown(500,function(){
        heightCollapseElement = $(this).parent().find('.collapse-box').height();
        if($('.page-left-fixed-nav').hasClass('pinned') || $('.page-left-fixed-nav').hasClass('pin-bottom')) {
          $('.page-left-fixed-nav').animate({'marginTop': -heightCollapseElement},300);
        }
      });
    }
    
    return false;
  });
  // collapse
  $('input[data-validate="phone"]').mask("+38(999)999 99 99"); 
  $('.sub-head-menu--partner ul, .tab-list').autocolumnlist({
      columns: 2
  });
  $('.product-info p').liTextLength({
      length: 120,        
      afterLength: '...',         
      fullText:false
  });
  $('.hire-info p').liTextLength({
      length: 120,        
      afterLength: '...',         
      fullText:false
  });
  $('.event-item-info p').liTextLength({
      length: 70,        
      afterLength: '...',         
      fullText:false
  });
  $('.service-txt').liTextLength({
      length: 35,        
      afterLength: '...',         
      fullText:false
  });
  $('.education-info__head ').liTextLength({
      length: 37,        
      afterLength: '...',         
      fullText:false
  });
  $('.js_validate button[type="submit"]').on("click", function(){
    return validate($(this).parent(".js_validate"));
  }); 
  $('.dropdown-button').dropdown();
  $('ul.tabs').tabs();
  $('select').not('.my_select_box').material_select();
  $('.collapsible').collapsible();
  $('.main-page .scrollspy').scrollSpy({
    scrollOffset: 45
  });
  $('.product-page .scrollspy').scrollSpy({
    scrollOffset: 55
  });
  $('.modal').modal({
      opacity: 1,
  });
  $('input, textarea').placeholder();

  $('.project-report__txt p').liTextLength({
      length: 180,        
      afterLength: '...',         
      fullText:false
  });
  $('.project-report__head').liTextLength({
      length: 40,        
      afterLength: '...',         
      fullText:false
  });
  // calendar
  if(_events != undefined) {
    var initialLangCode = 'en';
    if($('[lang="ua"]').size() > 0) {
      initialLangCode = 'uk';
    }
    if($('[lang="ru"]').size() > 0) {
      initialLangCode = 'ru';
    }
    $('#calendar').fullCalendar({
      'locale': initialLangCode,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,listYear'
      },
      defaultDate: '2016-12-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      displayEventTime: false,
      eventLimit: true, // allow "more" link when too many events
      events: _events,
      eventClick: function(event) {
        console.log(event);
        var eventImg = event.img,
            eventTime = event.time,
            eventTitle = event.title,
            eDate = event.start,
            eventLink = event.link,
            eventDate = eDate._d.toString().split(' ');
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
        document.body.classList.add('noscroll');
        document.querySelector('.calendar-event').classList.add('visible');
        document.querySelector('.overlay').style.display = "block";
        setTimeout(function(){
          document.querySelector('.overlay').classList.add('visible');
        },100);
        document.querySelector('.calendar-item__img img').setAttribute('src',eventImg);
        document.querySelector('.calendar-item__info b').innerHTML = eventTitle;
        document.querySelector('.calendar-item__time').innerHTML = eventTime;
        document.querySelector('.calendar-body a').setAttribute('href', eventLink);
        document.querySelector('.calendar-title').innerHTML = eventDate[1] + ' , ' + eventDate[2] + ' , ' + eventDate[3];
      },
    });
    // calendar
    if(document.querySelector('.calendar-event') != undefined) {
      for (var i = 0; i < document.querySelectorAll('.js_close_calendar').length; i++) {
        document.querySelectorAll('.js_close_calendar')[i].addEventListener('click',function(){
          document.body.classList.remove('noscroll');
          document.body.style.paddingRight = 0;
          document.querySelector('.calendar-event').classList.remove('visible');
          document.querySelector('.overlay').classList.remove('visible');
          setTimeout(function(){
            document.querySelector('.overlay').style.display = "block";
          },600);
        });
      }
    }
  }
});
function pushipElement() {
  $('.page-left-fixed-nav').pushpin('remove');
  var offsetBottom = $('.puship-bottom-block').offset().top - $('.page-left-fixed-nav').outerHeight() - 20,
      offsetTop = $('.page-item').offset().top - 115;
  $('.page-left-fixed-nav').pushpin({
    top: offsetTop,
    bottom: offsetBottom,
    offset: 75
  });
}
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parents('.required-field').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            e++;
        } else
            object.parents('.required-field').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;$(function(window, document, $) {
 // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
 var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
 var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
 var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
 var prototype = $.fn;
 var valHooks = $.valHooks;
 var propHooks = $.propHooks;
 var hooks;
 var placeholder;
 if (isInputSupported && isTextareaSupported) {
  placeholder = prototype.placeholder = function() {
   return this;
  };
  placeholder.input = placeholder.textarea = true;
 } else {
  placeholder = prototype.placeholder = function() {
   var $this = this;
   $this
    .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
    .not('.placeholder')
    .bind({
     'focus.placeholder': clearPlaceholder,
     'blur.placeholder': setPlaceholder
    })
    .data('placeholder-enabled', true)
    .trigger('blur.placeholder');
   return $this;
  };
  placeholder.input = isInputSupported;
  placeholder.textarea = isTextareaSupported;
  hooks = {
   'get': function(element) {
    var $element = $(element);
    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value;
    }
    return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
   },
   'set': function(element, value) {
    var $element = $(element);
    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value = value;
    }
    if (!$element.data('placeholder-enabled')) {
     return element.value = value;
    }
    if (value == '') {
     element.value = value;
     // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
     if (element != safeActiveElement()) {
      // We can't use `triggerHandler` here because of dummy text/password inputs :(
      setPlaceholder.call(element);
     }
    } else if ($element.hasClass('placeholder')) {
     clearPlaceholder.call(element, true, value) || (element.value = value);
    } else {
     element.value = value;
    }
    // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
    return $element;
   }
  };
  if (!isInputSupported) {
   valHooks.input = hooks;
   propHooks.value = hooks;
  }
  if (!isTextareaSupported) {
   valHooks.textarea = hooks;
   propHooks.value = hooks;
  }
  $(function() {
   // Look for forms
   $(document).delegate('form', 'submit.placeholder', function() {
    // Clear the placeholder values so they don't get submitted
    var $inputs = $('.placeholder', this).each(clearPlaceholder);
    setTimeout(function() {
     $inputs.each(setPlaceholder);
    }, 10);
   });
  });
  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
   $('.placeholder').each(function() {
    this.value = '';
   });
  });
 }
 function args(elem) {
  // Return an object of element attributes
  var newAttrs = {};
  var rinlinejQuery = /^jQuery\d+$/;
  $.each(elem.attributes, function(i, attr) {
   if (attr.specified && !rinlinejQuery.test(attr.name)) {
    newAttrs[attr.name] = attr.value;
   }
  });
  return newAttrs;
 }
 function clearPlaceholder(event, value) {
  var input = this;
  var $input = $(input);
  if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
   if ($input.data('placeholder-password')) {
    $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
    // If `clearPlaceholder` was called from `$.valHooks.input.set`
    if (event === true) {
     return $input[0].value = value;
    }
    $input.focus();
   } else {
    input.value = '';
    $input.removeClass('placeholder');
    input == safeActiveElement() && input.select();
   }
  }
 }
 function setPlaceholder() {
  var $replacement;
  var input = this;
  var $input = $(input);
  var id = this.id;
  if (input.value == '') {
   if (input.type == 'password') {
    if (!$input.data('placeholder-textinput')) {
     try {
      $replacement = $input.clone().attr({ 'type': 'text' });
     } catch(e) {
      $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
     }
     $replacement
      .removeAttr('name')
      .data({
       'placeholder-password': $input,
       'placeholder-id': id
      })
      .bind('focus.placeholder', clearPlaceholder);
     $input
      .data({
       'placeholder-textinput': $replacement,
       'placeholder-id': id
      })
      .before($replacement);
    }
    $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
    // Note: `$input[0] != input` now!
   }
   $input.addClass('placeholder');
   $input[0].value = $input.attr('placeholder');
  } else {
   $input.removeClass('placeholder');
  }
 }
 function safeActiveElement() {
  // Avoid IE9 `document.activeElement` of death
  // https://github.com/mathiasbynens/jquery-placeholder/pull/99
  try {
   return document.activeElement;
  } catch (err) {}
 }
 
}(this, document, jQuery));
//textoverflow
jQuery.fn.liTextLength = function(options){
  // настройки по умолчанию
  var o = jQuery.extend({
      length: 150,                                    //Видимое кол-во символов
      afterLength: '...',                                //Текст после видимого содержания        
      fullText:true,                                    //Добавить ссылку для отображения скрытого текста
      moreText: '<br>полный&nbsp;текст',                //Текст ссылки до показа скрытого содержания
      lessText: '<br>скрыть&nbsp;полный&nbsp;текст'    //Текст ссылки после показа скрытого содержания
  },options);
  return this.each(function(){
      var 
      $el = $(this),
      elText = $.trim($el.text()),
      elLength = elText.length;
      if(elLength > o.length){ 
          var 
          textSlice = $.trim(elText.substr(0,o.length)),
          textSliced = $.trim(elText.substr(o.length));
          if(textSlice.length < o.length){
              var 
              textVisible = textSlice,
              textHidden = $.trim(elText.substr(o.length));
          }else{    
              var 
              arrSlice = textSlice.split(' '),
              popped = arrSlice.pop(),
              textVisible = arrSlice.join(' ') + ' ',
              textHidden = popped + textSliced  + ' ';
          };
          var 
          $elTextHidden = $('<span>').addClass('elTextHidden').html(textHidden),
          $afterLength = $('<span>').addClass('afterLength').html(o.afterLength + ' '),
          $more = $('<span>').addClass('more').html(o.moreText);
          $el.text(textVisible).append($afterLength).append($elTextHidden);
          var displayStyle = $elTextHidden.css('display');
          $elTextHidden.hide();
          if(o.fullText){
              $el.append($more);
              $more.click(function(){
                  if($elTextHidden.is(':hidden')){
                      $elTextHidden.css({display:displayStyle})    ;
                      $more.html(o.lessText);
                      $afterLength.hide();
                  }else{
                      $elTextHidden.hide();
                      $more.html(o.moreText);
                      $afterLength.show();
                  };
                  return false;
              });
          }else{
              $elTextHidden.remove();
          };
      };
  });
};

