$(document).ready(function() {

  // Counter

  var eventTime = moment($("#eventTime").attr('datetime'));

  console.log(eventTime.format());
  
  var updateCounter = function(duration) {
    $("#count-days .counter-value").text(duration.days());
    $("#count-hours .counter-value").text(duration.hours());
    $("#count-minutes .counter-value").text(duration.minutes());
    $("#count-seconds .counter-value").text(duration.seconds());
  }

  var currentTime = moment();
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime*1000, 'milliseconds');
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

});