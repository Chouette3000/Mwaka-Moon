var initUnivers = function (scene) {
	//
	// Lighting
	//
	let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
	let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);
	
	var skybox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);

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
	
	
	var meshisin = BABYLON.AbstractMesh;
	var crater;
	meshisin = BABYLON.SceneLoader.ImportMesh("", "resources/obj/moon/", "scene.gltf", scene, function (newMeshes) {	
		crater = newMeshes[0];
		crater.position.y = -5;
		crater.scaling = new BABYLON.Vector3(300, 300, 300);
	});
	
	/*setTimeout(function() {
		
		//let mat =  new BABYLON.StandardMaterial( "mat", scene );
		//mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
		//mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
		//crater.material = mat;
		
		
		//playerCamera.lockedTarget = crater;
	}, 2000);*/
	
	return skybox;
}