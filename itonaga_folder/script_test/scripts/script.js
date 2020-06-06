// Load in the required modules
const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');

// Add the mouth openness signal to the watch view
Diagnostics.watch("Mouth Openness - ", FaceTracking.face(0).mouth.openness);

// @ts-ignore
const startPlane = Scene.root.findFirst('canvas0');
const plane = Scene.root.find('plane0');


var mouthIsValue = FaceTracking.face(0).mouth.openness;

var flag = true;

mouthIsValue.monitor().subscribe( function (e) { 
    if (e.newValue > 0.5 && flag) {
        Diagnostics.log("Mouth open");
        flag = false;
    }
    else {
        // Diagnostics.log("Mouth close");
    }
 })