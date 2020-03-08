class Univers {
  constructor(scene) {
    this.scene = scene;
  }

   async init(ball) {
    this.initLight();
    this.initSkybox();
    await this.initGround();
    initOnGround(ball,  this.ground);
	
  }

  initLight(){
    this.light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), this.scene);
    this.light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), this.scene);
  }

  initSkybox(){
    this.skybox = BABYLON.Mesh.CreateBox("skyBox", 14000.0, this.scene);
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
    this.ground = await BABYLON.Mesh.CreateGroundFromHeightMapAsync("ground", "resources/textures/moon.jpg", 1000, 1000, 100, 0, 5, this.scene, false);
	this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.1 }, this.scene);
    this.ground.convertToFlatShadedMesh();

    var groundMaterial = new BABYLON.StandardMaterial("ground", this.scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("resources/textures/moon.jpg", this.scene);
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    this.ground.material = groundMaterial;
  }
}
