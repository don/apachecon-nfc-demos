var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {        
        var message = [
            ndef.uriRecord("http://cordova.io")
        ];
        
        nfc.share(message, app.onShare);
    },
    onShare: function() {
        statusDiv.innerHTML = "Message sent to peer.";
    }
};
