$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'left',
        trigger: 'hover'
    });
});

$('#home .navbar-nav a').on('click', function() {
    $('#home .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});