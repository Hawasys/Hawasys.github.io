const bgcolor = 'rgb(37, 41, 52)';
const hexcodes = [0x00, 0x10, 0x08, 0x04, 0x02, 0x14, 0x01, 0x11, 0x09, 0x19];

function setup() {
    let canvas = createCanvas(255, 100);
    canvas.parent("clock");
    frameRate(1);
    background(bgcolor);
}

function draw() {
    background(bgcolor);
    fill(200, 100, 100);
    rectMode(CENTER);
    stroke(0);

    let brokenHour = Array.from(hour().toString()).map(Number).reverse();
    let brokenMin = Array.from(minute().toString()).map(Number).reverse();
    
    while (brokenHour.length < 4){
        brokenHour.push(0);
    }
    while (brokenMin.length < 4){
        brokenMin.push(0);
    }

    push();
    translate(floor(width/2), height/2);
    
    square(0,20,20);
    square(0,-20,20);
    
    fill(bgcolor);
    square(0,20,15);
    square(0,-20,15);
    
    fill(200, 100, 100);
    translate(-floor(width/4), 0);
    rect(0,0, 5, 55);
    for (let index = 0; index < 4; index++){
        display(hexcodes[brokenHour[index]], index);
    }
    
    translate(floor(width/2), 0);
    rect(0,0, 5, 55);
    for (let index = 0; index < 4; index++){
        display(hexcodes[brokenMin[index]], index);
    }
    
    pop();
}

function display(val, valpos){
    push();
    noStroke();
    noFill();
    switch (valpos){
        case 1: applyMatrix(-1, 0, 0, 1, 0, 0); break;
        case 2: applyMatrix(1, 0, 0, -1, 0, 0); break;
        case 3: rotate(PI); break;
        default: 
    }
    
    fill(getColorFill(val, 4));
    stroke(getColorStroke(val, 4));
    rect(13, -30, 20, 5);
    
    fill(getColorFill(val, 3));
    stroke(getColorStroke(val, 3));
    rect(13, -10, 20, 5);
    
    fill(getColorFill(val, 2));
    stroke(getColorStroke(val, 2));
    beginShape();
    vertex(3, -13);
    vertex(3, -7);
    vertex(30, -27);
    vertex(23, -27);
    endShape(CLOSE);

    fill(getColorFill(val, 1));
    stroke(getColorStroke(val, 1));
    beginShape();
    vertex(3, -27);
    vertex(3, -20);
    vertex(13, -13);
    vertex(24, -13);
    endShape(CLOSE);


    fill(getColorFill(val, 0))
    stroke(getColorStroke(val, 0));
    rect(25, -20, 5, 15);
    
    pop();
}

function getColorFill(val, shift) {
    let a = 255 * ((val >> shift) & 1);
    return color(200, 100, 100, a);
}

function getColorStroke(val, shift) {
    let a = 255 * ((val >> shift) & 1);
    return color(0, 0, 0, a);
}

