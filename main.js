function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/E834aaW5x.json",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("soundname").innerHTML =  (results[0].label)
    var name = (results[0].label)
    document.getElementById("soundname").style.color = "rgb(" +r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb(" +r+","+g+","+b+")";
    img = document.getElementById('img');

    if (name == "cat" ){
        img.src = 'cat.jpg'
    }else if(name == "dog"){
img.src = 'dog.jpg'
    }else if(name == "bird"){
        img.src = 'bird.jpg'
    }else if (name == "cow"){
        img.src = 'cow.png'
    }else{
        img.src = 'download.jpg'
    }
    }
}
