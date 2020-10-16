$(document).ready(function(){
    $('.availability').on('click', function(){
        console.log("clicked")
        $(this).toggleClass('btn-success btn-danger')

    })
});