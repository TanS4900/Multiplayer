var redball;

var database, position

function setup(){
    createCanvas(500,500);

     database = firebase.database();

    redball = createSprite(250,250,10,10);
    redball.shapeColor = "red";

 var redballPosition = database.ref("ball/position")

 redballPosition.on("value",readPosition)
 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data) {

position = data.val()

redball.x = position.x
redball.y = position.y

}

function writePosition(x,y) {

database.ref('ball/position').set( {

'x': position.x + x, 
'y': position.y + y

} )



}


