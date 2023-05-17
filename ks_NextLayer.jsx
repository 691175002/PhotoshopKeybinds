// Setting the activeLayer in photoshop automatically makes it visible, so to
// traverse through the layer stack without changing it we need to check if a
// layer is hidden first, then restore its state after activation.

// Unfortunately any layer within a hidden group appears hidden through the api
// regardless of its state in the interface so navigating through a hidden
// group will change the state of its contents.

// I recommend simply skiping over the contents of hidden layer groups as
// navigating within a a hidden group has limited usefulness and skipping will
// leave its state intact.
// If WrapAround is true navigating past the top or the bottom of the layer
// stack will place you at the other end.

var SkipHiddenGroups = true;
var WrapAround = true;

var doc = app.activeDocument;
var currentLayer = doc.activeLayer;
var activateNext = false;

function traverseLayers(layers, inHiddenGroup) {
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];

        if (activateNext && !(inHiddenGroup && SkipHiddenGroups)) {
            activateLayer(layer, inHiddenGroup);
            activateNext = false;
        } else if (layer === currentLayer) {
            activateNext = true;
        }

        if (layer.typename === "LayerSet") {
            traverseLayers(layer.layers, (!layer.visible || inHiddenGroup));
        }
    }
}

function activateLayer(layer, inHiddenGroup) {
    var isVisible = layer.visible
    doc.activeLayer = layer

    if (inHiddenGroup) {
        // Ignore layers that are within a hidden group as we cannot know their true state.
    } else if (!isVisible) {
        doc.activeLayer.visible = false;
    }
}

traverseLayers(doc.layers, false);

if (activateNext && WrapAround) {
	activateLayer(doc.layers[0])
}
