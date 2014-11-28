$(document).on('deviceready', function () {
    alert("windows.device: " + window.device);
    alert("windows.device.version: " + window.device.version);
    if (window.device && parseFloat(window.device.version) >= 7.0) {
        $('body').addClass('iOS7');
    }
});