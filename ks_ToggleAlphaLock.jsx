// Toggles alpha locking for the current layer.

var currentLayer = activeDocument.activeLayer;
currentLayer.transparentPixelsLocked = !currentLayer.transparentPixelsLocked;
