let angle = 0;
let vec = [];
let u = 0;
let k = 5;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
    background(100);
    rotateY(5*map(u, 0, (4*k + 2)*Math.PI, 0, 2*Math.PI));

    noFill();
    stroke(240, 10, 10);
    strokeWeight(4);

    x = cos(u)*[ 2 - cos(2*u/(2*k + 1)) ];
    y = sin(u)*[ 2 - cos(2*u/(2*k + 1)) ];
    z = -sin(2*u/(2*k + 1));
        
    vec.push(createVector(x, y, z).mult(100));

    beginShape();
    for(let ver in vec){
        vertex(vec[ver].x, vec[ver].y, vec[ver].z);
    }
    endShape();

    u += 0.03;
    angle += 0.03;

    if(u > (4*k + 2)*Math.PI){
        vec = [];
        u = 0;
    }
}
