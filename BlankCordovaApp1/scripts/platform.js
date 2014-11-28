$(document).on('deviceready', function () {
    if (window.device && parseFloat(window.device.version) >= 7.0) {
        alert("found ios");
        $('body').addClass('iOS7');
    }
});