var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        nfc.addNdefListener(app.onNfc); // TODO success, failure
    },
    onNfc: function(nfcEvent) {
        // message is an array of records
        var message = [
            ndef.uriRecord("http://cordova.io")
        ];
        nfc.write(message, app.onWriteSuccess);
    },
    onWriteSuccess: function() {
        statusDiv.innerHTML = "Wrote message to tag.";
    }
};
