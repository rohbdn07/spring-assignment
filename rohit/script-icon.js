$(document).ready(function () {
    $('#share').click(function () {
        $('#share').toggleClass('rotate');
        $('.facebook').toggleClass('rotate-fb');
        $('.twitter').toggleClass('rotate-tw');
        $('.linkedin').toggleClass('rotate-li');
        $('.codepen').toggleClass('rotate-cp');


    });

});