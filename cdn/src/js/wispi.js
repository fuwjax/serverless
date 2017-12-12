$(function() {
  $.get('http://localhost:8123/people', function(data){
    $("#people").render(data);
  });
});
