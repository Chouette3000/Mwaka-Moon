
class Spike{
	
	constructor(scene, position) {
		this.scene = scene;
		var mesh = this.initSpike(position);
		console.log(mesh);
	}

	async initSpike(position) {
	
		var newMeshes = await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/spike/files/gltf/", "Shiny_Migelo-Rottis.gltf", this.scene).meshes;
		return newMeshes;
		//newMeshes.position = position;
		//this.spike = newMeshes;
	}
}