$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'left',
        trigger: 'hover'
    });
});

$('#body .navbar-nav a').on('click', function() {
    $('#body .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});