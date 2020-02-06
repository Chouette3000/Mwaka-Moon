
import * as BABYLON from 'babylonjs';

let canvas : any = document.getElementById( "canvas" );

let engine = new BABYLON.Engine( canvas, true );
let scene = new BABYLON.Scene( engine );

var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);

//skybox.infiniteDistance = true; // <-- with this you can make the skybox of infinite size
	    
// create material for the skybox
var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.disableLighting = true;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/skybox", scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
skybox.infiniteDistance = true;
skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
skybox.material = skyboxMaterial;


			
//
// Camera
//
let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 4,-2), scene);
camera.setTarget( BABYLON.Vector3.Zero() ); 
camera.attachControl( canvas, false );

//
// Lighting
//
let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);

//
// Sphere
//
let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
   diameter: 2,
   segments: 16
}, scene );

let mat =  new BABYLON.StandardMaterial( "mat", scene );
mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
sphere.material = mat;

engine.runRenderLoop( () => {
    scene.render();
})   

window.addEventListener( 'resize', () => {
    engine.resize();
})
