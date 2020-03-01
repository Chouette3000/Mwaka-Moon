var canvas = document.getElementById("canvas");
var initPlayerCamera = function (scene, cible) {
	//
	// Camera
	//
	let camera = new BABYLON.ArcRotateCamera("Camera", 3* Math.PI / 2, Math.PI / 8, 10, BABYLON.Vector3(0, 0, 0), scene);
/* 
	// Parameters: name, position, scene
	//let camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);

	// The goal distance of camera from target
	camera.radius = 30;

	// The goal height of camera above local origin (centre) of target
	camera.heightOffset = 40;

	// The goal rotation of camera around local origin (centre) of target in x y plane
	camera.rotationOffset = 0;

	// Acceleration of camera in moving from current to goal position
	camera.cameraAcceleration = 0.005

	// The speed at which acceleration is halted
	camera.maxCameraSpeed = 10
*/
	// This attaches the camera to the canvas
	console.log('canvas', canvas)
	camera.attachControl(canvas, true);
	return camera;
}