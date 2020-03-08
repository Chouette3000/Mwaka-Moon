
var makeSphere = (newMeshes, scene, scaling = 1)=>{
    var physicsRoot = new BABYLON.Mesh.CreateSphere("physicsRoot", 16, 1.8, scene);
	physicsRoot.position.y += 1;

	newMeshes.forEach((m, i)=>{
		if(m.parent == null){
			physicsRoot.addChild(m)
		}
})
    // Scale the root object and turn it into a physics impsotor
    physicsRoot.scaling.scaleInPlace(scaling)
    return physicsRoot
}

var initBasketball = async function (scene, playerCamera) {
    // Initialize GizmoManager
    var gizmoManager = new BABYLON.GizmoManager(scene)

    // Initialize all gizmos
    gizmoManager.boundingBoxGizmoEnabled=true;
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true;

	var ball;

	var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/ball/", "scene.gltf", scene)).meshes;

    var sphere = makeSphere(newMeshes, scene)
    //var sphere2 = makeSphere(newMeshes, scene)
	sphere.position.y += 150
	sphere.position.z += 10
	sphere.checkCollisions = true;
  sphere.applyGravity = true;
	sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
        sphere,
        BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 8, restitution: 0.8  },
        scene
    );
	playerCamera.lockedTarget = sphere;


  //var levels = new Levels(scene, sphere, 1000, 1000, 0);

	return sphere;
}
