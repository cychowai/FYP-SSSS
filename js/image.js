var input, output;
var imageSelector;

init = function(inputCanvasId, inputImageId) {
    input  = $("#" + inputCanvasId).get(0).getContext("2d");
    imageSelector = $("#" + inputImageId);
    updateInputImage();
}

updateInputImage = function() {
    var image = new Image();
    image.onload = function () {
        input.drawImage(image, 0, 0);
    }
    image.src = "images/" + imageSelector.val();
}

$(document).ready(function() {
    init("image-canvas", "input-image");
    $("#input-image").on("change", function() { updateInputImage(); });
});