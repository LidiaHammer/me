$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'left',
        trigger: 'hover'
    });
});

$('#body .navbar-nav a').on('click', function() {
    $('#body .navbar-nav').find('a.active').removeClass('active');
    $(this).parent('a').addClass('active');
});