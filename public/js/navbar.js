$(document).ready(function() {
  var MQL = 1170;
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', { previousTop: 0 }, function() {
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        }
      } else {
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-fixed');
        }
      }
      this.previousTop = currentTop;
    });
  }
});
