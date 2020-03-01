BABYLON.Mesh.CreateGroundFromHeightMapAsync = function (a, b, c, d, e, f, g, scene, i) {
  return new Promise(resolve => {
    BABYLON.Mesh.CreateGroundFromHeightMap(a, b, c, d, e, f, g, scene, i, function (mesh){
      resolve(mesh);
    })
  });
}

var initOnGround = function(ball, plateform){
  function checkOnGround() {
    if (controlOn){
      if (ball.intersectsMesh(plateform, false)){
        document.getElementById("canvas").dispatchEvent(new Event('onGround'));
      }
      setTimeout(checkOnGround, 500);
    }
  }
  checkOnGround();
}
