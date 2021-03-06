
class Level2 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+100, positionDebutLvl.y+50, positionDebutLvl.z+100, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var ecartX = this.plateSize + 3;
		var ecartXSmall = this.getWidth("small") + 7;
		var ecartZSmall = this.getWidth("small") + 7;
		var ecartY = 3;
		var ecartZ = this.plateSize + 3;
		var typeDef = "normal";
		// 5 plateformes en X (à partir de la position initiale)
		var pos = this.positionInitLvl;
		for(var i = 0; i < 5 ; i++){
			pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z);
			this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
			//this.plateforms
		}
		
		// 4 plateformes en quinconce (à partir de la dernière plateforme)
		pos = this.plateforms[this.plateforms.length-1].boxPlateforme.position;
		pos = new BABYLON.Vector3(pos.x, pos.y + ecartY, pos.z + ecartZ);
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		pos = new BABYLON.Vector3(pos.x - ecartX, pos.y + ecartY, pos.z + ecartZ);	
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z + ecartZ);	
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		pos = new BABYLON.Vector3(pos.x - ecartX, pos.y + ecartY, pos.z + ecartZ);	
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		this.setFirePlateform(this.plateforms[this.plateforms.length-1]);
		pos = this.borderPlateforms[1].boxPlateforme.position;
		pos = new BABYLON.Vector3(pos.x - 3, pos.y - 4, pos.z - ecartZ);	
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		
		// 5 plateformes en Z (à partir de la 2ème plateforme)
		pos = this.plateforms[0].boxPlateforme.position;
		var fauxCircuitDebut = this.plateforms.length;
		for(var i = 0; i < 6; i++){
			pos = new BABYLON.Vector3(pos.x, pos.y + ecartY, pos.z + ecartZ);
			this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
			//this.plateforms[i].boxPlateforme.position
		}
		// Faux circuit
		pos = this.plateforms[fauxCircuitDebut+3].boxPlateforme.position;
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x + ecartXSmall, pos.y + 1, pos.z);
			this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		}	
		pos = this.plateforms[fauxCircuitDebut+5].boxPlateforme.position;
		for(var i = 0; i < 2; i++){
			pos = new BABYLON.Vector3(pos.x + ecartXSmall, pos.y + 1.5, pos.z);
			this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		}	
		pos = this.plateforms[this.plateforms.length-1].boxPlateforme.position;
		pos = new BABYLON.Vector3(pos.x, pos.y-2, pos.z - (ecartZSmall+2));
		this.plateforms[this.plateforms.length] = new Plateforme(this.scene, this.getWidth("small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot);
		// Fin du faux circuit
	}
}
