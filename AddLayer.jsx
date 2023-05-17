// Adds a new layer to the document, but only if the document contains just a
// single Background layer. Configure this script to run upon creation of new
// documents and they will always start with an empty layer.

if (activeDocument.layers.length == 1) {
	if (activeDocument.layers[0].name == "Background") {
		activeDocument.artLayers.add(); 
	}
}
