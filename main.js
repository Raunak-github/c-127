song_name1 = "";
song_name2 = "";
function setup()
{
    video = createCapture(VIDEO);
    video.hide();
    
    canvas = createCanvas(500, 500);
    canvas.center();
}
function draw()
{
    image(video, 0, 0 , 500 ,500);
}
function preload()
{
    song_name1 = loadSound("Harry_potter.mp3");
    song_name2 = loadSound("Peter_Pan.mp3");
}