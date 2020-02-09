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
	//
	// Sphere
	//
	/*let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
	   diameter: 2,
	   segments: 16
	}, scene );

	let mat =  new BABYLON.StandardMaterial( "mat", scene );
	mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
	mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
	sphere.material = mat;
	*/
	
	var meshisin = BABYLON.AbstractMesh;
	var ball; 
	
	var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/ball/", "scene.gltf", scene)).meshes;
	
	console.log('ball', ball)
	var sphere = makeSphere(newMeshes, scene)
	sphere.position.y += 150
	sphere.position.z += 10
	sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
        sphere,
        BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 8, restitution: 0.6  },
        scene
    );
	playerCamera.lockedTarget = sphere;
	console.log('sfr',sphere)
	console.log(meshisin)
	/*var angleX = Math.PI/4;
	var totalTicks = 1;
	function rot() {
		//console.log('test');
		ball.rotate(BABYLON.Axis.X, angleX/totalTicks, BABYLON.Space.WORLD);
		totalTicks += 5;
		setTimeout(rot, 100)
	}
	
	
	setTimeout(rot, 500);*/
	


	/*var a = 0; 
	engine.runRenderLoop( () => {
		scene.render();
		a +=0.010;
		var sign = Math.cos(a)/Math.abs(Math.cos(a));
		sphere.position.x += 1 * sign;
	})  */
	//BABYLON.SceneLoader.ImportMesh("bmw7", "scenes/", "bmw7.babylon", scene, function (newMeshes) {      
	
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
	console.log('balll ,',ball)
	return ball;
}