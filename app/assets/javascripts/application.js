// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require jquery.bxslider
//= require_tree .


$(document).ready(function() {
  // Answer check only one
  $("input[type=checkbox]").click(function(){
    $("input[type=checkbox]").not($(this)).prop('checked', false);
  })

  // Lesson slider
  $('.bxslider').bxSlider({
    captions: true,
    controls: true,
    nextText: "Next",
    prevText: "Prev"
  });
});

