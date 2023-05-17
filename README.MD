# Photoshop Scripts
Plundered, written, and wrung out of ChatGPT.

This is a set of clean and useful Photoshop scripts that implement features Adobe should have given us fifteen years ago. Most of the scripts have been prefixed with ks_ and are designed to be used as keyboard shortcuts or bound to a controller wheel/knob. 

This can be done by placing the scripts into /Program Files/Adobe/Adobe Photoshop/Presets/Scripts/ where they will then appear as bindable menu commands in Edit->Keyboard Shortcuts->Application Menus->File->Scripts.

To adjust any of the scripts, open them in notepad. User-configurable behavior is at the top of the script, take a look as I do not list all of the available behaviors.

### Included Scripts:
- ks_Flow+.jsx and ks_Flow-.jsx:  Will increase or decrease Flow by a configurable amount when run, similar to how [ and ] adjust brush size.

- ks_Opacity+.jsx and ks_Opacity-.jsx:  Will increase or decrease Opacity by a configurable amount when run, similar to how [ and ] adjust brush size.

- ks_NextLayer.jsx and ks_PrevLayer.jsx:  Will navigate to the next layer in the layer stack, correctly entering and exiting folders and without changing visibility states. By default it will skip over the contents of hidden folders, however this behavior is configurable.

- ks_ToggleVis:  Toggles the visibility of the currently selected layer or folder. Very useful when paired with NextLayer and PrevLayer.

- AddLayer.jsx:  Will start new files with a new layer, for those of us who accidentally work on the background. Add it as a "New Document" event in File->Scripts->Script Events Manager...

If any of the above instructions don't make sense Google should be able to help.
