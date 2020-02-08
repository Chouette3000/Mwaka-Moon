var canvas = document.getElementById("canvas");

var engine = null;
var scene = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };

var createScene = function () {

	let scene = new BABYLON.Scene( engine );
	var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);

	//skybox.infiniteDistance = true; // <-- with this you can make the skybox of infinite size
			
	// create material for the skybox
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.disableLighting = true;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skybox.infiniteDistance = true;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;


				
	//
	// Camera
	//
	//let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 4,-2), scene);
	// Parameters: name, position, scene
	var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);

	// The goal distance of camera from target
	camera.radius = 30;

	// The goal height of camera above local origin (centre) of target
	camera.heightOffset = 10;

	// The goal rotation of camera around local origin (centre) of target in x y plane
	camera.rotationOffset = 0;

	// Acceleration of camera in moving from current to goal position
	camera.cameraAcceleration = 0.005

	// The speed at which acceleration is halted
	camera.maxCameraSpeed = 10

	// This attaches the camera to the canvas
	camera.attachControl(canvas, true);

	// NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
	// targetMesh created here.
	//camera.target = targetMesh;   // version 2.4 and earlier

	//camera.attachControl( canvas, false );

	//
	// Lighting
	//
	let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
	let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);

	//
	// Sphere
	//
	let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
	   diameter: 2,
	   segments: 16
	}, scene );

	let mat =  new BABYLON.StandardMaterial( "mat", scene );
	mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
	mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
	sphere.material = mat;
	camera.lockedTarget = sphere;


	var a = 0; 
	engine.runRenderLoop( () => {
		scene.render();
		a +=0.010;
		var sign = Math.cos(a)/Math.abs(Math.cos(a));
		sphere.position.x += 0.02 * sign;
	})  

    return scene;

};

engine = createDefaultEngine();
if (!engine) throw 'engine should not be null.';
scene = createScene();

engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});

//Evenement clavier
/*
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        sphere.position.x += 0.02;
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});
*/