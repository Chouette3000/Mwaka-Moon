
var getParticlesSmoke = function(plateform, scene){
	//Smoke
	var smokeSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
	smokeSystem.particleTexture = new BABYLON.Texture("resources/textures/flare.png", scene);
	smokeSystem.emitter = plateform; 
	// emit from a area 
    smokeSystem.minEmitBox = new BABYLON.Vector3(-2, -2, -2); 
    smokeSystem.maxEmitBox = new BABYLON.Vector3(7, 7, 7);
	
	// particles color
	smokeSystem.color1 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    smokeSystem.color2 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
	
	smokeSystem.minSize = 1;
    smokeSystem.maxSize = 3;

    smokeSystem.minLifeTime = 0.3;
    smokeSystem.maxLifeTime = 1.5;

    smokeSystem.emitRate = 300;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    smokeSystem.direction1 = new BABYLON.Vector3(-0, 0, -0);
    smokeSystem.direction2 = new BABYLON.Vector3(5.5, 8, 5.5);

    smokeSystem.minAngularSpeed = 0;
	smokeSystem.maxAngularSpeed = Math.PI;

    smokeSystem.minEmitPower = 0.5;
    smokeSystem.maxEmitPower = 1.5;
    smokeSystem.updateSpeed = 0.005;
	
	return smokeSystem;
}

var getParticlesFire = function(plateform, scene){
  // Create a particle system
    var fireSystem = new BABYLON.ParticleSystem("particlesFire", 8000, scene);

    //Texture of each particle
    fireSystem.particleTexture = new BABYLON.Texture("resources/textures/flare.png", scene);

    // Area
    fireSystem.emitter = plateform; 
    fireSystem.minEmitBox = new BABYLON.Vector3(-6.5, 1, -6.5); 
    fireSystem.maxEmitBox = new BABYLON.Vector3(6.5, 4, 6.5); 
	
	// Direction of each particle after it has been emitted
    fireSystem.direction1 = new BABYLON.Vector3(-0, 0, -0);
    fireSystem.direction2 = new BABYLON.Vector3(2, 6, 2);

    // Colors of all particles
    fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    fireSystem.minSize = 0.5;
    fireSystem.maxSize = 1;

    // Life time of each particle (random between...
    fireSystem.minLifeTime = 0.2;
    fireSystem.maxLifeTime = 0.4;

    // Emission rate
    fireSystem.emitRate = 6000;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    // Angular speed, in radians
    fireSystem.minAngularSpeed = 0;
    fireSystem.maxAngularSpeed = Math.PI;

    // Speed
    fireSystem.minEmitPower = 1.5;
    fireSystem.maxEmitPower = 3;
    fireSystem.updateSpeed = 0.007;

	return fireSystem;
}


var getParticlesFireRocket = function(plateform, scene){
  // Create a particle system
    var fireSystem = new BABYLON.ParticleSystem("particlesFire", 4000, scene);

    //Texture of each particle
    fireSystem.particleTexture = new BABYLON.Texture("resources/textures/flare.png", scene);

    // Area
    fireSystem.emitter = plateform; 
    fireSystem.minEmitBox = new BABYLON.Vector3(0, -2, 0); 
    fireSystem.maxEmitBox = new BABYLON.Vector3(0, -15, 0); 
	
	// Direction of each particle after it has been emitted
    fireSystem.direction1 = new BABYLON.Vector3(0, -10, 0);
    fireSystem.direction2 = new BABYLON.Vector3(0, -12, 0);

    // Colors of all particles
    fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    fireSystem.minSize = 2;
    fireSystem.maxSize = 3;

    // Life time of each particle (random between...
    fireSystem.minLifeTime = 0.2;
    fireSystem.maxLifeTime = 0.4;

    // Emission rate
    fireSystem.emitRate = 10000;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    // Angular speed, in radians
    fireSystem.minAngularSpeed = 0;
    fireSystem.maxAngularSpeed = Math.PI;

    // Speed
    fireSystem.minEmitPower = 1.5;
    fireSystem.maxEmitPower = 3;
    fireSystem.updateSpeed = 0.010;

	return fireSystem;
}

var getParticlesSmokeRocket = function(plateform, scene){
	//Smoke
	var smokeSystem = new BABYLON.ParticleSystem("particles", 4000, scene);
	smokeSystem.particleTexture = new BABYLON.Texture("resources/textures/flare.png", scene);
	smokeSystem.emitter = plateform; 
	// emit from a area 
    smokeSystem.minEmitBox = new BABYLON.Vector3(0, -2, 0); 
    smokeSystem.maxEmitBox = new BABYLON.Vector3(0, -15, 0); 
	
	// particles color
	smokeSystem.color1 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    smokeSystem.color2 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
	
	smokeSystem.minSize = 2;
    smokeSystem.maxSize = 3;

    smokeSystem.minLifeTime = 0.3;
    smokeSystem.maxLifeTime = 1.5;

    smokeSystem.emitRate = 3000;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    smokeSystem.direction1 = new BABYLON.Vector3(0, -10, 0);
    smokeSystem.direction2 = new BABYLON.Vector3(0, -12, 0);

    smokeSystem.minAngularSpeed = 0;
	smokeSystem.maxAngularSpeed = Math.PI;

    smokeSystem.minEmitPower = 1.5;
    smokeSystem.maxEmitPower = 2;
    smokeSystem.updateSpeed = 0.007;
	
	return smokeSystem;
}