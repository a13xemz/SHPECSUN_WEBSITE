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
function clearCurrentLink(){
    var a = document.getElementsByTagName("A");
    for(var i=0;i<a.length;i++){
        if(a[i].href.split("#")[0] == window.location.href.split("#")[0]){
            removeNode(a[i]);
        }
    }
}

function removeNode(n){
    if(n.hasChildNodes()){
        for(var i=0;i<n.childNodes.length;i++){
            n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
        }
    }
    n.parentNode.removeChild(n);
}