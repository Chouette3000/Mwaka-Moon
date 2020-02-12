class BallControl {
    constructor( ball ){
        this.ball = ball
    }
    initControl(){
        const ball = this.ball;
        //ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 50));
        window.addEventListener("keypress", function(evt) {
            // Le keyCode 32 correspond à la bare espace
            //console.log(ball)
            if(evt.keyCode === 32){
                //sphere.physicsImpostor.restitution = 0

                ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 150, 0), ball.getAbsolutePosition());
                console.log('Jumped !',ball.physicsImpostor.restitution )
    
            }
        }, false);
    }

}