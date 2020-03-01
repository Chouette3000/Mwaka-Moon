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
            //this.speed = this.speed == 0 ? 0 : 80 + this.ball.physicsImpostor.getLinearVelocity().y
        },500)
    }
    isOnGround(){
        return Math.abs(this.ball.position.y - this.dy ) < 0.1
    }

    turnCamera(angle , angleMax, i , dir = 1 , speed = 50, saut = 0){

        if(i <= angleMax){
            setTimeout(()=>{
                //console.log(i)
                this.playerCamera.alpha += angle * dir
                this.turnCamera(angle, angleMax, i + angle , dir , speed, saut)
            },speed)
        }
        //else this.playerCamera.alpha = (this.angle - Math.PI)
        else {
            console.log('saut = ', saut);
            
            this.turnBall(saut)
        }
    }

    turnBall(saut = 0){
        //console.log(this.ball.physicsImpostor);
        
        this.angle = this.playerCamera.alpha + Math.PI;
        let xSpeed = Math.cos(this.angle ) * this.speed
        let zSpeed = Math.sin(this.angle ) * this.speed

        let bf_x = this.ball.physicsImpostor.getLinearVelocity().x;
        let bf_y = this.ball.physicsImpostor.getLinearVelocity().y;
        let bf_z = this.ball.physicsImpostor.getLinearVelocity().z;
        //console.log('before :', bf_x , bf_z)
        //console.log('beforeSpeed :', xSpeed , zSpeed)
        this.ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, bf_y, 0));
        this.ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(xSpeed, saut, zSpeed) , this.ball.getAbsolutePosition());
        //console.log('after :', ball.physicsImpostor.getLinearVelocity())
    }

    animationFin(){
        console.log('animation fin');
        this.ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        this.turnCamera(0.1,2*Math.PI,0,-1,20);

    }

    decelerateBall(intensity){
        if(this.speed > 1 && !this.onAccelerate){
            setTimeout(()=>{
                this.speed *= intensity;
                this.turnBall()
                this.decelerateBall(intensity)
            },50)

        }
        
    }

    initControl(){
        this.listenerPosition()
        var jumpAllow = true;
        var barreEspaceKeyUp = true;
        const ball = this.ball;
        const playerCamera = this.playerCamera;
        playerCamera.setPosition(new BABYLON.Vector3(0, 3.5, -11.5));
        playerCamera.lockedTarget = this.ball;
        controlOn = true;

        document.getElementById("canvas").addEventListener('onGround', function(e){
          jumpAllow = true;
          //this.turnBall(100)
        }.bind(this));


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
              
              barreEspaceKeyUp = false;
              jumpAllow = false;
              this.turnBall(100)
              //ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 100, 0), ball.getAbsolutePosition());
            }

            // var event = new Event('restartGame');
        		// document.getElementById("endMenu").dispatchEvent(event);

            // Keys Left & Rigth
            if(evt.keyCode === 37){
                this.turnCamera(0.01,0.1,0)
            }

            if(evt.keyCode === 39){
                this.turnCamera(0.01,0.1,0,-1,20)

            }

            if(evt.keyCode === 40){ //key down
                //this.speed = Math.max(0 , this.speed)
                if(this.onAccelerate){
                    this.onAccelerate = false
                    this.decelerateBall(0.90)

                }
                //this.turnCamera(0.02,Math.PI,0,1,5)

                //ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));

            }
            if(evt.keyCode === 38){ //key up
                this.onAccelerate = true
                this.speed = Math.max(50 , Math.min(150, this.speed)) 
                this.speed*=1.1;
                this.turnBall()
            }
          }
        }.bind(this), false);

        window.addEventListener("keyup", function(evt) {
            if(evt.keyCode === 38){ //key up
                //this.onAccelerate = false
                //this.decelerateBall(0.90)
            }
        }.bind(this), false);

        window.addEventListener("mousemove", function(evt) {
            this.playerCamera.beta += evt.movementY * 0.001 * (800 / 250);
        }.bind(this), false);
    }




}
