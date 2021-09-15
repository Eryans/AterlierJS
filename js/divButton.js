// alert("Hello world")
console.log("\n########Script divButton.js loaded ##########\n");
// This variable goes to all other file 
let userFirstname = "Jules";
var baseSentence = "Bien le bonjour "

console.log("Hello World !");
var newDiv = document.createElement("div");
let myArray = [];
newDiv.appendChild(document.createTextNode("Hello There !"));
document.body.appendChild(newDiv)

function createHTML(name,className,content){
    let RGB = "rgb(" + Math.random()*255 + ","+ Math.random()*255 +"," + Math.random()*255 + ")";
    let newTag = document.createElement(name);
    newTag.setAttribute("class",className);
    newTag.appendChild(document.createTextNode(content));
    document.body.appendChild(newTag);
    newTag.style.color = RGB;
    newTag.style.borderColor = RGB;
}

createHTML("div","blabla","I am a new element !");
createHTML("button","btn","click me to make a 'Hello' Div !");

var myBtn = document.querySelector(".btn");
myBtn.addEventListener("click",function(){
    createHTML("div","blabla","Hello i'm a div !")
    let RGB = "rgb(" + Math.random()*255 + ","+ Math.random()*255 +"," + Math.random()*255 + ")";
    myBtn.style.color = RGB;
    myBtn.style.borderColor = RGB;
    });


