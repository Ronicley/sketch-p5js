function setup() {
    createCanvas(800, 700);
    background("#fff");
}

function draw() {
    fill(255, 250, 0, 120);//Pinta o circulo maior de amarelo
    ellipse(400, 300, 500, 500);//desenha o circulo maior
    fill(0, 0, 0, 255);//pinta de preto os olhos 
    ellipse(300, 220, 90, 150);//olho 1
    ellipse(500, 220, 90, 150);//olho 2
    fill(10);//
    stroke(1);
    beginShape();
    curveVertex(200, 2);
    curveVertex(500, 400);
    curveVertex(300, 400);
    curveVertex(600, 50);
    endShape();
}

