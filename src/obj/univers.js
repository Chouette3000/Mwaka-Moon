var makeCrater =  async (newMeshes, scene)=>{
   // Create physics root and position it to be the center of mass for the imported mesh
  /*  var physicsRoot = new BABYLON.Mesh.CreateGround("physicsRoot",450, 400, 2, scene);
	//physicsRoot.position.y += 40;

    // For all children labeled box (representing colliders), make them invisible and add them as a child of the root object

	newMeshes.forEach((m, i)=>{
		console.log(m.name)
        if(m.name.indexOf('root') != -1){
            //m.isVisible = false
            physicsRoot.addChild(m)
            m.checkCollisions = true;
            m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 8, restitution: 0.9 }, scene);
        }
    })

    // Add all root nodes within the loaded gltf to the physics root
    newMeshes.forEach((m, i)=>{
        if(m.parent == null){
            physicsRoot.addChild(m)
            m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 8, restitution: 0.9 }, scene);
        }
    })

    // Make every collider into a physics impostor
    physicsRoot.getChildMeshes().forEach((m)=>{
        if(m.name.indexOf('root') != -1){
            m.scaling.x = Math.abs(m.scaling.x)
            m.scaling.y = Math.abs(m.scaling.y)
            m.scaling.z = Math.abs(m.scaling.z)
            m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 8, restitution: 0.9 }, scene);
        }
    })

   newMeshes.forEach((m, i)=>{
	if(m.parent == null){
    m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 8, restitution: 0.9 }, scene);
		physicsRoot.addChild(m)
	}
})
    // Scale the root object and turn it into a physics impsotor
    //physicsRoot.scaling.scaleInPlace(300)
    //physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
*/
    return ground;
}

var initUnivers = async function (scene) {
	//
	// Lighting
	//
	let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
	let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);
	//var ground = BABYLON.Mesh.CreateGround("ground1", 450, 400, 2, scene);

    //ground.physicsImpostor = new BABYLON.PhysicsImpostor(
        //ground,
       // BABYLON.PhysicsImpostor.BoxImpostor,
       // { mass: 0, restitution: 0.9 },
       // scene);

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

	//var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/moon/", "scene.gltf", scene)).meshes;




  var ground = await BABYLON.Mesh.CreateGroundFromHeightMap("ground", "resources/obj/moon/textures/Material_27_baseColor.png", 500, 500, 200, 0, 50, scene, false);

  //ar newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/moon/", "scene.gltf", scene)).meshes;

  setTimeout(function() {
    var ground2 = ground.clone();
    ground2.material = new BABYLON.StandardMaterial("wire", scene);
    ground2.material.diffuseColor = BABYLON.Color3.White();
    ground2.material.wireframe = true;

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.1 }, scene);
    ground.convertToFlatShadedMesh();

    ground.material = new BABYLON.StandardMaterial("green", scene);
    ground.material.diffuseColor = BABYLON.Color3.Green();
    ground.material.specularColor = BABYLON.Color3.Black();
  }, 3000);



	//var crater = makeCrater(newMeshes, scene);
  //crater.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);
//  crater.physicsImpostor = new BABYLON.PhysicsImpostor(crater, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
//  crater.material = new BABYLON.StandardMaterial("groundMat", scene);
//	crater.position.y = 4
	//crater.checkCollisions = true;
	//crater.scaling = new BABYLON.Vector3(300, 300, 300);
//  crater.showBoundingBox = true;

	/*setTimeout(function() {

		//let mat =  new BABYLON.StandardMaterial( "mat", scene );
		//mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
		//mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
		//crater.material = mat;


		//playerCamera.lockedTarget = crater;
	}, 2000);*/

	return skybox;
}
