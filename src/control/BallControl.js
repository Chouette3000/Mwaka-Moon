var controlOn = false;
class BallControl {
    constructor( ball, playerCamera ){
        this.ball = ball;
        this.playerCamera = playerCamera;
        this.angle = Math.PI / 2
        this.speed = 0
    }
    listenerPosition(){
        this.dy = this.ball.position.y
        this.dx = this.ball.position.x
        this.dz = this.ball.position.z
        //console.log('d == ',this.dx, this.dy , this.dz);
        setTimeout(()=>{
            this.listenerPosition()
        },500)
    }
    isOnGround(){
        return Math.abs(this.ball.position.y - this.dy ) < 0.1
    }

    turnCamera(angle , angleMax, i , dir = 1 , speed = 50){

        if(i <= angleMax){
            setTimeout(()=>{
                //console.log(i)
                this.playerCamera.alpha += angle * dir
                this.turnCamera(angle, angleMax, i + angle , dir , speed)
            },speed)
        }
        //else this.playerCamera.alpha = (this.angle - Math.PI)
        else {
            const speed = 80
            this.turnBall()
        }
    }

    turnBall(){
        this.angle = this.playerCamera.alpha + Math.PI;
        let xSpeed = Math.cos(this.angle ) * this.speed
        let zSpeed = Math.sin(this.angle ) * this.speed

        let bf_x = this.ball.physicsImpostor.getLinearVelocity().x;
        let bf_y = this.ball.physicsImpostor.getLinearVelocity().y;
        let bf_z = this.ball.physicsImpostor.getLinearVelocity().z;
        //console.log('before :', bf_x , bf_z)
        //console.log('beforeSpeed :', xSpeed , zSpeed)
        this.ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, bf_y, 0));
        this.ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(xSpeed, 0, zSpeed) , this.ball.getAbsolutePosition());
        //console.log('after :', ball.physicsImpostor.getLinearVelocity())
    }

    initControl(){
        var jumpAllow = true;
        var barreEspaceKeyUp = true;
        const ball = this.ball;
        const playerCamera = this.playerCamera;
        playerCamera.setPosition(new BABYLON.Vector3(0, 3.5, -11.5));
        playerCamera.lockedTarget = this.ball;
        controlOn = true;

        document.getElementById("canvas").addEventListener('onGround', function(){
          jumpAllow = true;
        });


        window.addEventListener("keyup", function(evt) {
          if(evt.keyCode == 32){
            barreEspaceKeyUp = true;
            jumpAllow = false;
          }
        });

        window.addEventListener("keydown", function(evt) {
          if(controlOn){
            // Le keyCode 32 correspond à la bare espace
            if(evt.keyCode == 32 && jumpAllow && barreEspaceKeyUp){
              jumpAllow = false;
              barreEspaceKeyUp = false;
              ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 100, 0), ball.getAbsolutePosition());
            }

            // var event = new Event('restartGame');
        		// document.getElementById("endMenu").dispatchEvent(event);

            // Keys Left & Rigth
            if(evt.keyCode === 37){
                this.turnCamera(0.01,0.1,0)
            }

            if(evt.keyCode === 39){
                this.turnCamera(0.01,0.1,0,-1)

            }

            if(evt.keyCode === 40){ //key down
                this.speed = 0
                this.turnBall()
                //this.turnCamera(0.02,Math.PI,0,1,5)

                //ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));

            }
            if(evt.keyCode === 38){ //key up
                this.speed = 80
                this.turnBall()
            }
          }
        }.bind(this), false);
    }




}
