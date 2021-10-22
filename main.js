function setup(){
canvas=createCanvas(800,800)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classyfier=ml5.imageClassifier('MobileNet',modelLoaded)

}
function modelLoaded(){
    console.log("modelLoaded")
}
function draw(){
    imageMode(CENTER)
image(video,400,400,400,400)
fill("green")
rect(90,90,600,20)
rect(690,90,20,600)
rect(90,90,20,600)
rect(90,690,600,20)
fill("red")
circle(90,90,150)
circle(690,90,150)
circle(690,690,150)
circle(90,690,150)

classyfier.classify(video,gotresult)
}
function gotresult(error,results){
if (error) {
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("ron").innerHTML=results[0].label
    document.getElementById("roa").innerHTML=results[0].confidence*100 +"%"
}
}
