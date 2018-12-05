$(document).ready(function(){
    $('.spoiler-title').click(function(){
        $(this).parent().children('div.spoiler-content').toggle();
        return false;
    });
});