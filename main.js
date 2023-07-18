var TextBox=document.getElementById("TextBox")
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
TextBox.InnerHTML=" "
recognition.start()
}
recognition.onresult= function(event) {
    console.log(event)
}



var Content = event.results[0][0].transcript;
TextBox.innerHTML = Content;
console.log(Content);
if(Content=="SE INSCREVA NO CANAL ENVEN APOLO")
{
    console.log("tirando selfie ---");
    speak()
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Faça o que você diz. AGORA.  tirando sue selfie em cinco segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();
    }, 10000);
}
camera= document.getElementById("camera");
Webcam.set({
width:360,
height: 250,
image_format: "jpeg",
jpeg_quality: 90 
});
function take_selfie()
{
    webcam.snap(function(data_uri){
        document.getElementById
        ("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}

function save()
{
    link=document.getElementById("link");
    image= document.getElementById("selfie_image").scroll;
    link.href = image;
    llink.click();
}

