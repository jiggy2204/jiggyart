$(document).ready(function(){

   $('a').click(function(e){
        e.preventDefault();
        if($('a').attr('data-target')){
            var pageTarget = $(this).attr('data-target');
            $(".jiggypage").removeClass("active");
            $("#"+pageTarget).addClass("active");
        }
    })
});