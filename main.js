var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function begin(){
   document.getElementById("textbox").innerHTML="";
  recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
}