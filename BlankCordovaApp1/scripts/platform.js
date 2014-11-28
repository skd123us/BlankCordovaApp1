$(document).on('deviceready', function () {
    alert("entered platform.js");
    if (window.device && parseFloat(window.device.version) >= 7.0) {
        alert("found ios");
        $('body').addClass('iOS7');
    }
});