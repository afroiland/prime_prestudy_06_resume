
$(document).ready(function(){
  $('#button').on('click', function(){
    $(this).find('.everything').toggle();
    $(this).find('.button').toggle();
  });
});
