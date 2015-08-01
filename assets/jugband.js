(function($) {

  var $body, $overlay;
  var SHOW_NAV = 'show-nav';

  $(function() {
    $body = $('body');

    $overlay = $('<div/>', {
      'class': 'overlay'
    }).insertBefore($body.find('header nav'));

    $body.on('click', '.hamburger', function(evt) {
      evt.stopPropagation();
      $body.addClass(SHOW_NAV);
    });

    $body.on('click touchstart', '.overlay', function(evt) {
      $body.removeClass(SHOW_NAV);
      return false;
    });

    $body.on('click', 'nav a:not(".active")', function(evt) {
      if ($body.hasClass(SHOW_NAV)) {
        $body.removeClass(SHOW_NAV);
      }
    });
  });

})(jQuery);
