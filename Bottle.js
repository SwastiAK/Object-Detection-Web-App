img = "Bottle (2).jpg";

function preload()
{
    img = loadImage('Bottle (2).jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#000057");
    text("Bottle", 45, 75);
    noFill();
    stroke("#000057");
    strokeWeight(2);
    rect(30, 60, 450, 350);
}