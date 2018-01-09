function setup(){
    createCanvas(600,400);
    background(255);
    noStroke();
    num = 0;
    frameRate(10);
    
}

function draw(){
    if(num < 256){
        fill(num);
        ellipse(width/2, height/2, 250, 250);
        
        fill('#FF0000');
        textSize(25);
        
        textAlign(CENTER, CENTER);
        text(num, width/2, height/2);
        
        num = num + 1;
    }
}