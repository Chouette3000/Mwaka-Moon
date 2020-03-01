var endVictoireScene = function () {

	var scene = new BABYLON.Scene(engine);
	
    // Camera
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
	
	// Light
	var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
    var light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);
	
	// Sky
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/troll/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseTexture = new BABYLON.Texture("resources/textures/skybox/skybox_py.jpg", scene);
	skybox.material = skyboxMaterial;	
	
	var volee = null;
	BABYLON.SceneLoader.ImportMesh("", "resources/obj/canon/", "scene.gltf", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        //camera.target = newMeshes[0];
       // console.log(newMeshes[0]);
        //console.log(newMeshes[0].scaling);
		for(var i = 0; i < newMeshes.length; i++){
			if(newMeshes[i].name.includes("Sphere") || newMeshes[i].name.includes("Cube")){
				newMeshes[i].isVisible = false;
			}
			else{
				if(newMeshes[i].name.includes("polySurface3")){
					volee = newMeshes[i];
					volee.rotation.x = 133;
					//console.log(volee.position);
					//console.log(volee.rotation);
				}
				//console.log("node " + i +" : "+ newMeshes[i].name);
				//console.log(newMeshes[i]);
			}
		}
        //console.log(newMeshes);
        
		newMeshes[0].position = new BABYLON.Vector3(0, 4, 0);
		newMeshes[0].scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
		newMeshes[0].rotation = new BABYLON.Vector3(0, 0, 0);
		console.log(newMeshes[0].name);
		console.log(newMeshes[0].scaling);
		console.log(newMeshes[0]);
//		console.log(volee);
    });
	scene.debugLayer.show();
	
	testtrucrotation(camera, scene);
	initGround(scene);
	return scene;
};

var testtrucrotation = async function (camera, scene) {

	let sphere = await initBasketball(scene, camera);
	sphere.position.y = 10;
	var axis = new BABYLON.Vector3(2, 0, 4);
	scene.registerAfterRender(function () {
    sphere.rotate(axis, 0.01, BABYLON.Space.WORLD);
  });
}

var initGround =  async function(scene){
    ground = await BABYLON.Mesh.CreateGroundFromHeightMapAsync("ground", "resources/textures/moon.jpg", 1000, 1000, 100, 0, 5, scene, false);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.1 }, scene);
    ground.convertToFlatShadedMesh();

    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("resources/textures/moon.jpg", scene);
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;
  }