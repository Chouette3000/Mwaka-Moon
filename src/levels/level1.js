
class Level1 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+100, positionDebutLvl.y+35, positionDebutLvl.z+100, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var textureId = Math.floor(Math.random() * this.textures.length);
		var ecartXZ = this.plateSize+4;
		this.nbPlats = 4;
		var ecartY = 4;
		var index = 0;
		while(pos.y < (this.positionFinLvl.y-ecartY)){
		//for(var i = 0; i < this.nbPlats; i++){
			var textureId = Math.floor(Math.random() * this.textures.length);
			pos = new BABYLON.Vector3(pos.x + ecartXZ, pos.y + ecartY, pos.z + ecartXZ);
			if(this.positionFinLvl.x < pos.x || this.positionFinLvl.y < pos.y || this.positionFinLvl.z < pos.z)
				break;
			this.plateforms[index] = new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), this.textures[textureId], this.spherePivot);
			index++;
		}	
	}
}
