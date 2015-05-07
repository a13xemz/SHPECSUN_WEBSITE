$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 281) {
    $("ScrollingNavBar").fadeIn();
  } else {
    $("ScrollingNavBar").fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 280 || y==0) {
    $("navbarmain").fadeIn();
  } else {
    $("navbarmain").fadeOut();
  }
});

