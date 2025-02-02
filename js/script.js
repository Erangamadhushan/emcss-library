
$(document).ready(() => {
    $(".btn-toggle").click(() => {
        $("#panel").slideToggle();
    });

    $(".navbar-toggler .navbar-toggler-icon").click(() => {
        $(".navbar-response").slideToggle();
    });

    $(".offcanvas .offcanvas-close").click(function() {
        $(".offcanvas").removeClass('active');
    });
    $(".offcanvas-toggler").on("click", () => {
        $(".offcanvas").addClass('active');
    })
});