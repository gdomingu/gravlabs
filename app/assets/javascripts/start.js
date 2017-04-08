$(document).ready(function() {
  $("#new_results").on("ajax:success", function(e, data, status, xhr) {
    return $("#results").html(xhr.responseText);
  }).on("ajax:error", function(e, xhr, status, error) {
    return $("#results").html("<p>ERROR</p>");
  });
});
