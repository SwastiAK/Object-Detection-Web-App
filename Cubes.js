img = "Cubes.jpg";

function preload()
{
    img = loadImage('Cubes.jpg');
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
    text("Cubes", 45, 75);
    noFill();
    stroke("#000057");
    strokeWeight(2);
    rect(30, 60, 450, 350);
}