class Ball {
    constructor(scene, playerCamera){
        this.scene = scene;
        this.playerCamera = playerCamera;
    }
    makeSphere = (newMeshes, scene, scaling = 1) => {
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
	initBasketball = async function () {
        var ball;
        
        var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/ball/", "scene.gltf", this.scene)).meshes;
    
        console.log('ball', ball)
        var sphere = this.makeSphere(newMeshes, this.scene)
        sphere.position.y += 80
        sphere.position.z -= 20
        sphere.checkCollisions = true;
    
        //sphere.checkCollisions = true;
        sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
            sphere,
            BABYLON.PhysicsImpostor.SphereImpostor,
            { mass: 8, restitution: 0.8  },
            this.scene
        );
        this.playerCamera.lockedTarget = sphere;

        return sphere
    
    
}
}