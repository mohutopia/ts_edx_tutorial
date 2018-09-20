let color:string="rgb(33,33,33)";
let squareSizeNum:number=250;

let squareSize:string=`${squareSizeNum}px`;

let button:Element=document.createElement('button');
let div:Element=document.createElement('div');

button.textContent = "SHOW DIV";
document.body.appendChild(button);
document.body.appendChild(div);

let colorChange:Function=(elem:Element,color:string):boolean=>{
 (elem as HTMLElement).style.backgroundColor=color;
 (elem as HTMLElement).style.height=squareSize;
 (elem as HTMLElement).style.width=squareSize;
 return true;
}

(button as HTMLElement).onclick=(e)=>{
 colorChange(div,color);
}