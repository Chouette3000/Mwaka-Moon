
class Level2 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+100, positionDebutLvl.y+45, positionDebutLvl.z+100, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var textureId = Math.floor(Math.random() * this.textures.length);
		var ecartX = this.plateSize + 6;
		var ecartY = 4;
		var ecartZ = this.plateSize + 6;
		
		for(var i = 0; i < 4; i++){
			var textureId = Math.floor(Math.random() * this.textures.length);
			pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z);
			this.plateforms[i] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), this.textures[textureId], this.spherePivot);
			//this.plateforms[i].boxPlateforme.position
		}

		var pos2 = this.plateforms[this.plateforms.length-1].boxPlateforme.position;
		var index = this.plateforms.length-1;
		
		while(pos2.y < (this.positionFinLvl.y-ecartY) && pos2.z < (this.positionFinLvl.z-ecartZ)){
		//for(var i = index; i < index+4; i++){
			var textureId = Math.floor(Math.random() * this.textures.length);
			pos2 = new BABYLON.Vector3(pos2.x, pos2.y + ecartY, pos2.z + ecartZ);
			if((this.positionFinLvl.z - pos2.z) < ecartZ)
				break;
			this.plateforms[index] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), this.textures[textureId], this.spherePivot);
			index++;
			//console.log(this.plateforms[i].boxPlateforme.position);
		}
	}
}
