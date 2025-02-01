
$(document).ready(() => {
    $(".btn-toggle").click(() => {
        $("#panel").slideToggle();
    });

    $(".navbar-toggler .navbar-toggler-icon").click(() => {
        $(".navbar-response").slideToggle();
    });

    $(".offcanvas .offcanvas-close").click(function() {
        $(".offcanvas").toggleClass('active');
    })

});