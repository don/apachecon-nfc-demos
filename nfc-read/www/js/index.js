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
            message = tag.ndefMessage,
            record = message[0],
            value;
    
        if (util.isType(record, ndef.TNF_WELL_KNOWN, ndef.RTD_URI)) {    
            value = ndef.uriHelper.decodePayload(record.payload);
                            
        } else if (util.isType(record, ndef.TNF_WELL_KNOWN, ndef.RTD_TEXT)) {
            value = ndef.textHelper.decodePayload(record.payload);    
            
        } else {
            value = JSON.stringify(record);    
            
        }
    
        alert(value);
    
    }
};
