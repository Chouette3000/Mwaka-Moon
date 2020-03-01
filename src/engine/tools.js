BABYLON.Mesh.CreateGroundFromHeightMapAsync = function (a, b, c, d, e, f, g, scene, i) {
  return new Promise(resolve => {
    BABYLON.Mesh.CreateGroundFromHeightMap(a, b, c, d, e, f, g, scene, i, function (mesh){
      resolve(mesh);
    })
  });
}

var plateforms = [];
var myBall = null;
var controlOn = true;

var initOnGround = function(ball, plateform){
  myBall = ball;
  plateforms.push(plateform);
}

var onGroundEnd = false;
var initOnGroundEnd = function(ball, lastPlateform){
  function checkOnGroundEnd(){
    if (controlOn){
      if(ball.intersectsMesh(lastPlateform, false)){
        onGroundEnd = true;
      }
      else{
        setTimeout(checkOnGroundEnd, 100);
      }
    }
  }
  checkOnGroundEnd();
}

var checkOnGround = function(){

  if (controlOn){
    if(myBall){
      for(let i = 0; i < plateforms.length; i++){
        if (myBall.intersectsMesh(plateforms[i], false)){
          console.log("onTheGround");
          document.getElementById("canvas").dispatchEvent(new Event('onGround'));
          break;
        }
      }
    }
  }
  else {
    plateforms = [];
  }
  setTimeout(checkOnGround, 100);
}
checkOnGround();
