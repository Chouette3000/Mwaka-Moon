BABYLON.Mesh.CreateGroundFromHeightMapAsync = function (a, b, c, d, e, f, g, scene, i) {
  return new Promise(resolve => {
    BABYLON.Mesh.CreateGroundFromHeightMap(a, b, c, d, e, f, g, scene, i, function (mesh){
      resolve(mesh);
    })
  });
}
