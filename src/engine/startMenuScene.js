var startMenuScene = function () {
	let scene = new BABYLON.Scene( engine );

	let camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, BABYLON.Vector3.Zero(), scene);
	let univers = initUniversSimple(scene);
	var meshisin = BABYLON.AbstractMesh;
	var ball; 
	meshisin = BABYLON.SceneLoader.ImportMesh("", "resources/obj/ball/", "scene.gltf", scene, function (newMeshes) {	
		ball = newMeshes[0];
		ball.position.x = 100;
		ball.position.y = 100;
		ball.position.z = 100;
		camera.lockedTarget = ball;
	});
	return scene;
};
