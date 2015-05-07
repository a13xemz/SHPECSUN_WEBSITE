
$(document).ready(function() {
    $("letters").hover(function() {
    $("letters").css("padding-right","0px")
    $("stext").stop(true, false).show("slow");
},function(){
        $("letters").css("padding-right","20px")
        $("stext").stop(true, false).hide("slow");}
                      )});

$(document).ready(function() {
    $("letterh").hover(function() {
     $("letterh").css("padding-right","0px")
    $("htext").stop(true, false).show("slow");
},function(){
        $("letterh").css("padding-right","20px")
        $("htext").stop(true, false).hide("slow");}
                      )});

$(document).ready(function() {
    $("letterp").hover(function() {
     $("letterp").css("padding-right","0px")
    $("ptext").stop(true, false).show("slow");
},function(){
        $("letterp").css("padding-right","20px")
        $("ptext").stop(true, false).hide("slow");}
                      )});
$(document).ready(function() {
    $("lettere").hover(function() {
    $("etext").stop(true, false).show("slow");},function() {
    $("etext").stop(true, false).hide("slow");}
)});
