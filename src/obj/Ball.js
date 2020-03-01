class Ball {
  constructor(scene, playerCamera){
    this.scene = scene;
    this.playerCamera = playerCamera;
  }
  getScene(){
    return this.scene
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
    physicsRoot.scaling.scaleInPlace(scaling);
    return physicsRoot;
  }

  initBasketball = async function () {
    var ball;
    var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/ball/", "scene.gltf", this.scene)).meshes;
    newMeshes[2].material.diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.sphere = this.makeSphere(newMeshes, this.scene);
    this.sphere.position.y += 5;
    this.sphere.position.z -= 0;
    this.sphere.checkCollisions = true;
    //sphere.checkCollisions = true;
    this.sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
        this.sphere,
        BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 8, restitution: 0.8  },
        this.scene
    );


    //var levels = new Levels(this.scene, this.sphere, 1000, 1000, 0);

    return this.sphere;
  }


}
