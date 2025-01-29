
$(document).ready(() => {
    $(".btn-toggle").click(() => {
        $("#panel").slideToggle();
    });

    $(".navbar-toggler .navbar-toggler-icon").click(() => {
        $(".navbar-response").slideToggle();
    })
})