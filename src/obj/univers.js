var ground;

class Univers {
  constructor(scene) {
    this.scene = scene;
    this.initLight();
    this.initSkybox();
    this.initGround();
  }

  initLight(){
    this.light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), this.scene);
    this.light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), this.scene);
  }

  initSkybox(){
    this.skybox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, this.scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/skybox", this.scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    this.skybox.infiniteDistance = true;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    this.skybox.material = skyboxMaterial;
  }

  async initGround(){
    this.ground = await BABYLON.Mesh.CreateGroundFromHeightMapAsync("ground", "resources/obj/moon/textures/Material_27_baseColor.png", 500, 500, 200, 0, 50, this.scene, false);

    this.ground2 = this.ground.clone();
    this.ground2.material = new BABYLON.StandardMaterial("wire", this.scene);
    this.ground2.material.diffuseColor = BABYLON.Color3.White();
    this.ground2.material.wireframe = true;

    this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.1 }, this.scene);
    this.ground.convertToFlatShadedMesh();

    this.ground.material = new BABYLON.StandardMaterial("green", this.scene);
    this.ground.material.diffuseColor = BABYLON.Color3.Green();
    this.ground.material.specularColor = BABYLON.Color3.Black();
  }

}



// var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "ground.png", 500, 500, 50, -100, 0, scene, false,
//   function(/*groundMesh*/) {
//     groundCSG = BABYLON.CSG.FromMesh(ground);
//     var subCSG = groundCSG.intersect(cubeCSG);
//     subCSG.toMesh("csg", new BABYLON.StandardMaterial("mat", scene), scene);
//     cube.dispose();
//     ground.dispose();
//   }
// );
