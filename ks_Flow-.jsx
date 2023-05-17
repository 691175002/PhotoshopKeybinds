// This script increases or decreases a given brush Property by Amount.
// If the property is less than Threshold, instead of incrementing by Amount
// it will increase or decrease 1 unit at a time.

var Amount = -10;
var Threshold = 15;
var Property = "flow";

try {
	var actRef = new ActionReference();
	var toolTypeID = stringIDToTypeID("tool");
	var ordnTypeID = charIDToTypeID("Ordn");
	actRef.putProperty(stringIDToTypeID("property"), toolTypeID);
	actRef.putEnumerated(charIDToTypeID("capp"), ordnTypeID, charIDToTypeID("Trgt"));
	
	var actionGet = executeActionGet(actRef);
	var curOpts = actionGet.getObjectValue(stringIDToTypeID("currentToolOptions"));
	var curTool = actionGet.getEnumerationType(toolTypeID);
	var propTypeID = stringIDToTypeID(Property);

	function updateProperty(value) {
		var actDsc = new ActionDescriptor();
		var subActRef = new ActionReference();
		subActRef.putClass(curTool);
		actDsc.putReference(charIDToTypeID("null"), subActRef);
		curOpts.putUnitDouble(propTypeID, stringIDToTypeID("percentUnit"), value);
		actDsc.putObject(charIDToTypeID("T   "), ordnTypeID, curOpts);
		executeAction(stringIDToTypeID("set"), actDsc, DialogModes.NO);
	}

	var curValue = curOpts.getInteger(propTypeID);
	var sign = Amount / Math.abs(Amount);

	// Change to increments of 1 below threshold
	if (curValue < Threshold + (Amount < 0)){
		updateProperty(Math.min(Math.max(curValue + sign, 0), 100));
	} else {
		updateProperty(Math.min(Math.max(curValue + Amount, 0), 100));
	}
	
} catch (err) {
	alert("Current Tool doesn't have parameter: " + Property);
}
