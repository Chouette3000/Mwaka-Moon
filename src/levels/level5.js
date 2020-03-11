
class Level5 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+150, positionDebutLvl.y+70, positionDebutLvl.z+150, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var ecartX = this.plateSize + 6;
		var ecartY = 4;
		var ecartZ = this.plateSize + 5;
		var typeDef = "normal";
		var finalPlatSize = (difficulty > 1) ? this.getWidth("small") : this.plateSize; 
		
		pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z + ecartX);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}
		// tuile enflammée
		var pos2 = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z + ecartZ);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		this.setFirePlateform(this.plateforms[2]);
		pos2 = pos;
		
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		pos = new BABYLON.Vector3(pos.x-ecartX, pos.y + (ecartY-3), pos.z + (ecartZ-4));
		this.plateforms.push(new Plateforme(this.scene, this.getWidth("mi-small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		// chemin piégé
		pos2 = new BABYLON.Vector3(pos2.x, pos2.y + 1, pos2.z - ecartZ);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		// gravity tile
		pos2 = new BABYLON.Vector3(pos2.x + (ecartX-2), pos2.y + 1, pos2.z);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		this.setFallingPlateform(this.plateforms[this.plateforms.length-1]);	
		pos2 = new BABYLON.Vector3(pos2.x, pos2.y + 1, pos2.z + ecartZ);
		this.plateforms.push(new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		this.setFallingPlateform(this.plateforms[this.plateforms.length-1]);	
		// fin du chemin piégé
		pos = new BABYLON.Vector3(pos.x-4, pos.y + (ecartY-2), pos.z + (ecartZ-2));
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		this.setMovingAnimation(this.plateforms[this.plateforms.length-1], "Z");
		for(var i = 0; i < 3; i++){
			pos = new BABYLON.Vector3(pos.x, pos.y + ecartY, pos.z +ecartZ-2);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}
		this.setFallingPlateform(this.plateforms[this.plateforms.length-2]);
		// chemin piégé 2
		pos2 = pos;
		for(var i = 0; i < 2; i++){
			pos2 = new BABYLON.Vector3(pos2.x-ecartX, pos2.y + 1, pos2.z);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
			this.setMovingAnimation(this.plateforms[this.plateforms.length-1], "Y");
		}
		pos2 = new BABYLON.Vector3(pos2.x-ecartX, pos2.y - 1, pos2.z-ecartZ);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		// fin du chemin piégé 2
		for(var i = 0; i < 3; i++){
			pos = new BABYLON.Vector3(pos.x+ecartX, pos.y + ecartY, pos.z);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
			this.setFallingPlateform(this.plateforms[this.plateforms.length-1]);
		}
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x, pos.y + 1, pos.z-ecartZ);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}
		if(difficulty > 1)
			this.setMovingAnimation(this.plateforms[this.plateforms.length-2], "Y");
		this.setFallingPlateform(this.plateforms[this.plateforms.length-1]);
		// tuile enflammée
		var posTmp = new BABYLON.Vector3(pos.x, pos.y + 1, pos.z-ecartZ);
		this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		this.setFirePlateform(this.plateforms[this.plateforms.length-1]);
		
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x+ecartX, pos.y + 2, pos.z);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
			if(difficulty > 1)
				this.setMovingAnimation(this.plateforms[this.plateforms.length-1], "Z");
		}
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x, pos.y + 2, pos.z+ecartZ);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}
		this.setMovingAnimation(this.plateforms[this.plateforms.length-1], "Z");
		// dernière plateforme du parcours
		pos = new BABYLON.Vector3(pos.x-(this.plateSize+1), pos.y + 1, pos.z+(this.plateSize+1));
		this.plateforms.push(new Plateforme(this.scene, finalPlatSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		if(difficulty == 1){
			pos = this.borderPlateforms[1].boxPlateforme.position;
			pos = new BABYLON.Vector3(pos.x - 3, pos.y - 3, pos.z - ecartZ);	
			this.plateforms.push(new Plateforme(this.scene, finalPlatSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}
	}
}
