
//Creates a canvas of exact size
function createCanvas(height,width){
    for(let i = 1; i <= width; i++){
        let row = document.createElement("div");
        for(let j = 1; j <= height; j++){
            let node = document.createElement("div");
            node.classList.add("pixel");
            node.style.width = "10px";
            node.style.height = "10px";
            node.style.border = "solid 1px gray";
            row.appendChild(node);
        }
        row.style.display = "flex";
        document.querySelector(".art-canvas").appendChild(row);

    }
}

createCanvas(80,50);




var curColor = "black"; //Array of colors below
const colorArray = ["black", "blue", "brown", "cyan", "gray", "green", "lime", "orange", "pink", "purple", "red", "tan", "teal", "yellow", "white"];
//Creates div elements with background colors from the array
function assignColors(colorArray){
    for(color of colorArray){
        let tool = document.createElement("div");
        tool.classList.add("color");
        tool.style.backgroundColor = color;
        if(color == "white"){
            tool.style.border = "1px solid gray";
        }
        document.querySelector(".art-colors").appendChild(tool);
    }
}
assignColors(colorArray);



//Adding a mousedown event to canvas
let pixels = document.querySelectorAll(".pixel");
let canvas = document.querySelector(".art-canvas");
for(pixel of pixels){
    pixel.addEventListener("mousedown",changeColor);
}
//Color indicator

function colorIndicator(){
    let indicator = document.querySelector(".cur-color");
    indicator.style.backgroundColor = curColor;
    if(curColor == "white"){
        indicator.style.border = "1px solid gray";
    }
    else{
        indicator.style.border = "none";
    }
}
colorIndicator();
//Adding color selectors + Bonus 2 - color picker
let userColor = document.createElement("div");
userColor.classList.add("color","user");
document.querySelector(".art-colors").appendChild(userColor);
userColor = document.querySelector(".user");

let colorSet = document.querySelectorAll(".color");
for(color of colorSet){
    color.addEventListener("click",pickColor);
}

function pickColor(){
    curColor = this.style.backgroundColor;
    colorIndicator();
}

let colorPicker = document.querySelector("#color-picker");
function colorPickerChange(){
    curColor = colorPicker.value;
    userColor.style.backgroundColor = curColor;
    colorIndicator();
}
colorPicker.addEventListener("input",colorPickerChange);
colorPicker.addEventListener("change",colorPickerChange);


//Bonus 1 - smooth drawing
canvas.addEventListener("mousedown",startDraw);
canvas.addEventListener("mouseup",stopDraw);

function startDraw(){
    for(pixel of pixels){
        pixel.addEventListener("mouseenter",changeColor);
    }
}
function stopDraw(){
    for(pixel of pixels){
        pixel.removeEventListener("mouseenter",changeColor);
    }
}
function changeColor(){
    this.style.backgroundColor = curColor;
    this.style.borderColor = curColor;
}

//Additional functions

//Clear function
function clear(){
    for(pixel of pixels){
        if(pixel.style.background == "none" && pixel.style.border == "1px solid gray"){continue;}
        else{pixel.style.background = "none";
        pixel.style.border = "1px solid gray";}
    }
}
document.querySelector(".clear").addEventListener("click",clear);

//Bonus 3 - localStorage

function save(){
    let picture = [];
    for(pixel of pixels){
        picture.push(pixel.style.backgroundColor);
    }
    localStorage.clear();
    localStorage.setItem('picture',JSON.stringify(picture));
}
function load(){
    let item = JSON.parse(localStorage.getItem('picture'));
    for(let i = 1; i <= item.length - 1;i++){
        pixels[i].style.backgroundColor = item[i];
        if(item[i] == ""){pixels[i].style.border = "1px solid gray";}
        else{pixels[i].style.borderColor = item[i];}
    }
}

document.querySelector(".save").addEventListener("click",save);
document.querySelector(".load").addEventListener("click",load);