nariz_x= 0;
nariz_y= 0;

function preload() {
  plutito= loadImage('https://i.postimg.cc/WbzmNQPC/plutito.png');
}

function setup() {
  canvas = createCanvas(450, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(450, 300);
  posenet = ml5.poseNet(video, cargarmodelo);
  posenet.on('pose', gotposes);
}
function draw() {
  image(video, 0, 0, 450, 300);
  fill(0, 0, 255);
  stroke(0, 0, 255);
  image(plutito, nariz_x, nariz_y, 150, 150);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

function cargarmodelo(){
    console.log("cargarmodelo");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
        nariz_x= results[0].pose.nose.x -75;
        nariz_y= results[0].pose.nose.y -100;
    }
}