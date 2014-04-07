var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        cameraButton.addEventListener('touchstart', app.takePicture, false);        
    },
    takePicture: function() {
        navigator.camera.getPicture(app.onCameraSuccess); // TODO failure
    },
    onCameraSuccess: function(imageURI) {
        cameraButton.hidden = true;
        statusDiv.innerHTML = "Tap another phone";

        var success = function() {
            cameraButton.hidden = false;
            statusDiv.innerHTML = "";
        };

        var failure = function() {
            alert("Failed to share message.");
        };

        nfc.handover(imageURI, success, failure);
    }
};
