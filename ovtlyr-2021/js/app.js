"use strict";

// check if touch device
function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

if (isTouchDevice()) {
  $('body').addClass('touch-device');
} // header


(function () {
  var header = $('.js-header'),
      items = header.find('.js-header-item'),
      burger = header.find('.js-header-burger'),
      wrap = header.find('.js-header-wrap'),
      search_head = header.find('.header__btns');
  items.each(function () {
    var item = $(this),
        head = item.find('.js-header-head'),
        body = item.find('.js-header-body');
    head.on('click', function (e) {
      e.stopPropagation();
      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
  burger.on('click', function (e) {
    e.stopPropagation();
    burger.toggleClass('active');
    wrap.toggleClass('visible');
    search_head.toggleClass('mobileSearch'); 
  });
})(); 

 // Notification Dropdown
(function () {
  var header_n = $('.js-notify'),
      items_n = header_n.find('.js-notify-item');
      items_n.each(function () {
    var item_n = $(this),
        head_n = item_n.find('.js-notify-head'),
        body_n = item_n.find('.js-notify-body');
        head_n.on('click', function (n) {
      n.stopPropagation();

      if (!body_n.hasClass('active')) {
        body_n.removeClass('active');
        body_n.addClass('active');
      } else {
        body_n.removeClass('active');
      }
    });
    body_n.on('click', function (n) {
      n.stopPropagation();
    });
    $('html, body').on('click', function () {
      body_n.removeClass('active');
    });
  });
})();
// select


(function () {
  var select = $('.js-select');

  if (select.length) {
    select.each(function () {
      var _this = $(this),
          head = _this.find('.js-select-head'),
          drop = _this.find('.js-select-drop'),
          option = _this.find('.js-select-option');

      head.on('click', function (e) {
        e.stopPropagation();

        if (_this.hasClass('open')) {
          _this.removeClass('open');
        } else {
          select.removeClass('open');

          _this.addClass('open');
        }
      });
      option.on('click', function (e) {
        e.preventDefault();
        head.find('span').text($(this).text());
      });
      $(document).on('click', function () {
        select.removeClass('open');
      });
    });
  }
})(); // height windows for ios


var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // toggle body theme

(function () {
  var switchTheme = $('.js-theme'),
      body = $('body');
  switchTheme.on('change', function () {
    if (!body.hasClass('dark')) {
      body.addClass('dark');
      localStorage.setItem('darkMode', "on");
    } else {
      body.removeClass('dark');
      localStorage.setItem('darkMode', "off");
    }
  });
})(); // global variables


var prevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z" fill="#777e91"/></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z" fill="#23262f"/></svg></button>';
$(document).ready(function () {
  // slider learn
  $('.js-slider-learn').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 500,
    infinite: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 100000,
      settings: "unslick"
    }, {
      breakpoint: 1179,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // slider popular

  $('.js-slider-popular').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    infinite: false,
    speed: 500,
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: true,
        infinite: false
      }
    }]
  }); // slider news

  $('.js-slider-news').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [{
      breakpoint: 1023,
      settings: {
        adaptiveHeight: true
      }
    }]
  }); // slider contact

  $('.js-slider-contact').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [{
      breakpoint: 1339,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(window).on('resize orientationchange', function () {
    $('.js-slider-resize').slick('resize');
  });
}); // nice select

$(document).ready(function () {
  $('.select').niceSelect();
}); // footer menu

(function () {
  var category = $('.footer__category'),
      menu = $('.footer__menu');
  category.on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
})(); // scroll down


$(".js-scroll").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 1000
  });
  return false;
}); // actions

(function () {
  var actions = $('.js-actions'),
      items = actions.find('.js-actions-item'),
      favorite = actions.find('.js-actions-favorite');
  items.each(function () {
    var item = $(this),
        button = item.find('.js-actions-button'),
        body = item.find('.js-actions-body');
    button.on('click', function (e) {
      e.stopPropagation();

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
  favorite.on('click', function () {
    $(this).toggleClass('active');
  });
})(); // faq


(function () {
  var item = $('.faq__item'),
      head = item.find('.faq__head'),
      body = item.find('.faq__body');
  head.on('click', function () {
    var thisHead = $(this);
    thisHead.parents('.faq__item').toggleClass('active');
    thisHead.parents('.faq__item').find('.faq__body').slideToggle();
  });
})(); // notifications filters show


(function () {
  var toggle = $('.notifications__toggle'),
      filters = $('.notifications__filters');
  toggle.on('click', function () {
    filters.toggleClass('visible');
  });
})(); // dateRangePicker


(function () {
  var dateRange = $('.js-date-range');

  if (dateRange.length) {
    dateRange.each(function () {
      var _this = $(this),
          single = _this.data('single-month'),
          container = _this.data('container');

      _this.dateRangePicker({
        inline: true,
        autoClose: true,
        format: 'DD MMM YYYY',
        separator: ' - ',
        container: container,
        singleMonth: single,
        showTopbar: false,
        stickyMonths: true,
        hoveringTooltip: false,
        alwaysOpen: true,
        customArrowPrevSymbol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.207 7.793a1 1 0 0 1 0 1.414L11.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0z" fill="#777e91"/></svg>',
        customArrowNextSymbol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.793 7.793a1 1 0 0 0 0 1.414L12.586 12l-2.793 2.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0z" fill="#777e91"/></svg>'
      });

      _this.dateRangePicker().bind('datepicker-change', function (event, obj) {
        _this.show();

        _this.next().removeClass('disabled');
      });
    });
  }
})(); // actions


(function () {
  var items = $('.js-activity-item');
  items.each(function () {
    var item = $(this),
        button = item.find('.js-activity-button'),
        body = item.find('.js-activity-body');
    button.on('click', function (e) {
      e.stopPropagation();

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
})();

$('.profile__top, .wallet__top').on('click', function () {
  $(this).parents('.profile__dropdown, .wallet__group').toggleClass('active');
}); 

// tabs 1
(function () {
  var tabs = $('.js-tabs');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link'),
        item = thisTabs.find('.js-tabs-item');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    });
  });
})(); 

// tabs 2
(function () {
  var tabs = $('.js-tabs2');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link2'),
        item = thisTabs.find('.js-tabs-item2');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    });
  });
})(); 

// tabs 2
(function () {
  var tabs = $('.js-tabs3');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link3'),
        item = thisTabs.find('.js-tabs-item3');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    });
  });
})(); 

// magnificPopup


(function () {
  var link = $('.js-popup-open');
  link.magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 200,
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
  });
})();

$('.balances__row').on('click', function () {
  $(this).parents('.balances__item').toggleClass('active');
}); // select currency

(function () {
  var currency = $('.currency'),
      input = currency.find('.currency__input'),
      value = currency.find('.currency__value'),
      price = currency.find('.currency__result'),
      button = currency.find('.currency__variants .currency__button');
  input.on('keyup', function () {
    var inputValue = input.val();
    button.removeClass('active');
    value.text(inputValue);
    price.text(inputValue);
  });
  button.on('click', function () {
    var _this = $(this),
        _thisText = _this.text(),
        inputValue = input.val(); // console.log(_thisText);


    button.removeClass('active');

    _this.addClass('active');

    value.text(_thisText.slice(0, -1));
    input.val(_thisText.slice(0, -1));
    price.text(_thisText.slice(0, -4));
  });
})(); // bidding


(function () {
  var bidding = $('.js-bidding'),
      step = bidding.find('.js-bidding-step'),
      item = bidding.find('.js-bidding-item'),
      button = bidding.find('.js-bidding-button'),
      back = bidding.find('.js-bidding-back');
  var counter = 0;
  button.on('click', function () {
    var currentNext = ++counter;
    step.eq(currentNext).addClass('next');
    step.eq(currentNext - 1).addClass('active');
    item.hide();
    item.eq(currentNext).show();
  });
  back.on('click', function () {
    var currentPrev = --counter;
    step.eq(currentPrev + 1).removeClass('next');
    step.eq(currentPrev).removeClass('active');
    item.hide();
    item.eq(currentPrev).show();
  });
})(); // slider


(function () {
  var slider = $('.js-slider');

  if (slider.length) {
    slider.each(function () {
      var _this = $(this),
          min = _this.data('min'),
          max = _this.data('max'),
          start = _this.data('start'),
          end = _this.data('end'),
          step = _this.data('step'),
          tooltips = _this.data('tooltips'),
          postfix = _this.data('postfix');

      var optionStart = [start],
          optionConnect = [true, false],
          optionTooltips = false;

      if (end) {
        optionStart = [start, end];
        optionConnect = true;
      }

      if (tooltips) {
        optionTooltips = [true];

        if (end) {
          optionTooltips = [true, true];
        }
      }

      noUiSlider.create(_this[0], {
        start: optionStart,
        connect: optionConnect,
        step: step,
        tooltips: optionTooltips,
        range: {
          'min': min,
          'max': max
        },
        format: wNumb({
          decimals: 0,
          postfix: postfix
        })
      });
    });
  }
})(); // bidding responsive


(function () {
  var wrapper = $('.js-bargaining-wrapper'),
      buy = $('.js-bargaining-buy'),
      sell = $('.js-bargaining-sell'),
      close = $('.js-bargaining-close');
  buy.on('click', function () {
    wrapper.addClass('show');
    $('.bargaining__col:first-child').show();
    $('.bargaining__col:nth-child(2)').hide();
  });
  sell.on('click', function () {
    wrapper.addClass('show');
    $('.bargaining__col:first-child').hide();
    $('.bargaining__col:nth-child(2)').show();
  });
  close.on('click', function () {
    wrapper.removeClass('show');
  });
})(); // exchange tabs responsive


(function () {
  var link = $('.js-exchange-link'),
      item = $('.js-exchange-item');
  link.on('click', function () {
    var dataId = $(this).data('id');
    link.removeClass('active');
    $(this).addClass('active');
    item.hide();
    $(".js-exchange-".concat(dataId)).show();
  });
})();