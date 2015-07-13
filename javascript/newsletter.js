$(document).ready(function() {
            $("#sub").click(function() {
            $("formsub").slideToggle("slow");
            if ($('formsub').is(':visible')) $("formsub").css('display','block');
            if($(this).html() == 'Subscribe to our Newsletter'){
                var c_text = 'Hide';
            } else {
                var c_text = 'Subscribe to our Newsletter';
            }
            $(this).html(c_text);
            });
            });



