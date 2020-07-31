
$(".close-btn").click(function(){
  $(".addall-popup").removeClass('popup-open');
});

$(".close-link").click(function(){
  $(".filters-container").removeClass('filter-open');
});

$(".filter-btn").click(function(){
  $(".filters-container").addClass('filter-open');
});