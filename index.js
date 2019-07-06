$(document).ready(function(){

    var page = $('div').data('target');

    page.click(function(cl){

        if(cl == $('div').attr('id')){
            console.log(page);
        }
    })
});