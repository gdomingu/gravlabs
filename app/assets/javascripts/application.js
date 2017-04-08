// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// $('input.autocomplete').autocomplete({
//         data: {
//           "Alabama": null,
//             "Alaska": null,
//             "Arizona": null,
//             "Arkansas": null,
//             "California": null,
//             "Colorado": null,
//             "Connecticut": null,
//             "Delaware": null,
//             "District of Columbia": null,
//             "Florida": null,
//             "Georgia": null,
//             "Hawaii": null,
//             "Idaho": null,
//             "Illinois": null,
//             "Indiana": null,
//             "Iowa": null,
//             "Kansas": null,
//             "Kentucky": null,
//             "Louisiana": null,
//             "Maine": null,
//             "Maryland": null,
//             "Massachusetts": null,
//             "Michigan": null,
//             "Minnesota": null,
//             "Mississippi": null,
//             "Missouri": null,
//             "Montana": null,
//             "Nebraska": null,
//             "Nevada": null,
//             "New Hampshire": null,
//             "New Jersey": null,
//             "New Mexico": null,
//             "New York": null,
//             "North Carolina": null,
//             "North Dakota": null,
//             "Ohio": null,
//             "Oklahoma": null,
//             "Oregon": null,
//             "Pennsylvania": null,
//             "Rhode Island": null,
//             "South Carolina": null,
//             "South Dakota": null,
//             "Tennessee": null,
//             "Texas": null,
//             "Utah": null,
//             "Vermont": null,
//             "Virginia": null,
//             "Washington": null,
//             "West Virginia": null,
//             "Wisconsin": null,
//             "Wyoming": null
//         },
//         limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//         onAutocomplete: function(val) {
//           // Callback function when value is autcompleted.
//         },
//         minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
//       });
