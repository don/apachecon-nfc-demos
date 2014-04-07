var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        nfc.addNdefListener(app.onNfc);
    },
    onNfc: function(nfcEvent) {
        var tag = nfcEvent.tag,
            message = tag.ndefMessage;
    
        alert(JSON.stringify(message));
    }    
};
