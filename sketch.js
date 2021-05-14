var ball,database,position,ballreff;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
ballreff = database.ref("ball/position");
ballreff.on("value",readFunction,errorFunction);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       write(1,0);
    }
    else if(keyDown(UP_ARROW)){
       write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
       write(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readFunction(data){
position = data.val();
console.log(position)
ball.x = position.x;
ball.y = position.y;
}

function errorFunction(){
    console.log("error");
}

function write(x,y){
    database.ref("ball/position").update({
        x:position.x + x,
        y:position.y + y
    })
}