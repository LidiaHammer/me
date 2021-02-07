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

//navbar mobile 

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

//google analytics
// window.dataLayer = window.dataLayer || [];

// function gtag() {
//     dataLayer.push(arguments);
// }
// gtag('js', new Date());

// gtag('config', 'G-ELW4SPNLPX');