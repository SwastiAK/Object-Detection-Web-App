img = "Clock.jpg";
status = "";

function preload()
{
    img = loadImage('Clock.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dedecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#000057");
    text("Clock", 45, 75);
    noFill();
    stroke("#000057");
    strokeWeight(2);
    rect(30, 60, 450, 350);
}