$(document).ready(function() {
        $("hidebutton").click(function() {
            $("row2").slideToggle("slow");
            if ($(this).html() == 'Hide') {
                var c_text = 'See More';
            } else {
                var c_text = 'Hide';
            }
            $(this).html(c_text);
        });
    }

);