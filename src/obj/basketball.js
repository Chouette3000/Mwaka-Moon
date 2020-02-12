
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
	var ball;

	var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/ball/", "scene.gltf", scene)).meshes;

	console.log('ball', ball)
	var sphere = makeSphere(newMeshes, scene)
	sphere.position.y += 150
	sphere.position.z += 10
	sphere.checkCollisions = true;

	//sphere.checkCollisions = true;
	sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
        sphere,
        BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 8, restitution: 0.8  },
        scene
    );
	playerCamera.lockedTarget = sphere;

	window.addEventListener("keypress", function(evt) {
        // Le keyCode 32 correspond à la bare espace
        console.log(sphere)
        if(evt.keyCode === 32){
			//sphere.physicsImpostor.restitution = 0
            //sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 150, 0), sphere.getAbsolutePosition());
			console.log('Jumped!',sphere.physicsImpostor.restitution )

        }
	}, false);

	window.addEventListener("keyup", function(evt) {
        const vitesse = 5
        switch(evt.keyCode){
            case 37:
			sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(-1 * vitesse, 0, 0), sphere.getAbsolutePosition());
            //sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-1 * vitesse, 0, 0));
            break;
            case 38:
			sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 0, 1 * vitesse), sphere.getAbsolutePosition());
            //sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 1 * vitesse));
            break;
            case 39:
			//sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(1 * vitesse, 0, 0));
			sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(1 * vitesse, 0, 0), sphere.getAbsolutePosition());
            break;
            case 40:
			sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 0, -1 * vitesse), sphere.getAbsolutePosition());
            //sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, -1 * vitesse));
            break;
            case 32:
            sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 50, 0), sphere.getAbsolutePosition());
            break;
        }
    }, false);
	console.log('balll ,',ball);
	return ball;
}
