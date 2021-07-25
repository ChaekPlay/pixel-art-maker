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
var curColor = "black";
const colorArray = ["black", "blue", "brown", "cyan", "gray", "green", "lime", "orange", "pink", "purple", "red", "tan", "teal", "yellow", "white"];
function assignColors(colorArray){
    for(let i = 0; i < colorArray.length; i++){
        let tool = document.createElement("div");
        tool.classList.add("color");
        tool.style.backgroundColor = colorArray[i];
        if(colorArray[i] == "white"){
            tool.style.border = "1px solid gray";
        }
        document.querySelector(".art-colors").appendChild(tool);
    }
}
assignColors(colorArray);
let pixelSet = document.querySelectorAll(".pixel");
for(let i = 0; i < pixelSet.length; i++){
    pixelSet[i].addEventListener("click",function(){
        this.style.backgroundColor = curColor;
        this.style.borderColor = curColor;
    });
}
let colorSet = document.querySelectorAll(".color");
for(let i = 0; i < colorSet.length; i++){
    colorSet[i].addEventListener("click",function(){
        curColor = this.style.backgroundColor;
    });
}