$(document).ready(function() {
  $('select').material_select();
  $("#new_results").on("ajax:success", function(e, data, status, xhr) {
    return $("#results").html(xhr.responseText);
  }).on("ajax:error", function(e, xhr, status, error) {
    return $("#results").html("<p>ERROR</p>");
  }).on("ajax:complete", function(){
    $(document).scrollTop($(document).height(), 'slow');
  });
});
