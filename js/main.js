(function($){
    $(document).ready(function() {
      // Counter
      var eventTime = moment($("#eventTime").attr('datetime'));
      var updateCounter = function(duration) {
        $("#count-days .counter-value").text(Math.floor(duration.asDays()));
        $("#count-hours .counter-value").text(duration.hours());
        $("#count-minutes .counter-value").text(duration.minutes());
        $("#count-seconds .counter-value").text(duration.seconds());
      };

      var currentTime = moment();
      var diffTime = eventTime - currentTime;
      var duration = moment.duration(diffTime, 'milliseconds');
      var interval = 1000;
      updateCounter(duration);

      setInterval(function(){

        duration = moment.duration(duration - interval, 'milliseconds');
        updateCounter(duration);

      }, interval);

      // Font size
      $("[data-font]").click(function() {
        if (!$(this).hasClass("is_selected")) {

          $("html").removeClass("smaller larger");
          $("html").addClass($(this).data("font"));

          $("[data-font].is_selected").removeClass("is_selected");
          $(this).addClass("is_selected");

        }
      });

        $(function addCookieConsent() {
            var _accept = $.cookie("cookie-agreed");
            if (_accept !== undefined && _accept != null)
                return;

            div = $("<div class='cookie-consent'><div class='cookie-consent-text'>" +
            "<p>The EU-OSHA website uses cookies to gather information necessary for browsing the website, in accordance with the EU-OSHA privacy notice.</p>" +
            "<p>By clicking on any link in the EU-OSHA web pages you are giving your consent for the use of cookies.</p>" +
            "</div><div class='cookie-consent-buttons'></div><div class='clearfix'></div></div></div>");

            button_accept = $("<button type='button' class='btn-ok'>OK, I agree</button>").click(acceptCookie);
            button_deny = $('<button type="button" class="btn-decline"><a href="privacy.html">No, give me more info</button>');

            $("body").prepend(div);
            $('div.cookie-consent-buttons').append(button_accept).append(button_deny);
        });

        function acceptCookie() {
            $.cookie("cookie-agreed", 2, { path: '/' });
            $(".cookie-consent").slideUp();
        }
    });
})(jQuery);
