(function($) {
$.fn.pagefade = function(fadein, fadeout) {
        this.css("display", "none");
        this.fadeIn(fadein);
  $("a").click(function(event) {
event.preventDefault();
linkLocation = this.href;
this.fadeOut(fadeout, redirectPage);
  });
  function redirectPage() {
window.location.disabled= linkLocation;
  }
  return this;
};
}(jQuery));