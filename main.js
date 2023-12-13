x=0;
y=0;
drawCircle="";
drawRect="";

var SpeechRecognition=window.webkitSpeechRecongnition;
var recongnition=new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML="O sistema esta ouvindo pode falar";
    recongnition.start();
}

recongnition.onresult=function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if(content =="Círculo") 
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo.";
        drawCircle = "set";
    }
      if(content =="Retângulo") 
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo.";
        drawRect = "set";
    }
}

function setup()
{
    canvas=createCanvas(900, 600);
}

function draw()
{
    if(drawCircle=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Círculo desenhado";
        drawCircle= "";
    }

    if(drawRect=="set")
    {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML="Retangulo desnhado";
        drawRect= "";
    }
}