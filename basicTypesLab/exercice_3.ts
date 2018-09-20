class colorChange {
 div:Element;
 constructor(div:Element) {
  this.div=div;
 }
 changeColor(color:number|string):boolean{
  if(typeof(color)==="number"){
   return true;
  }
  (this.div as HTMLElement).style.backgroundColor=color;
  return true;
 }
}

enum Colors {
 Green,
 Red,
 Blue,
 Orange
}

class numericColor extends colorChange{
 static Colors = Colors;
 constructor(div:Element) {
  super(div);
  (this.div as HTMLElement).style.height=squareSize;
  (this.div as HTMLElement).style.width=squareSize;
 }
 changeColor(color:number):boolean{
  (this.div as HTMLElement).style.backgroundColor=Colors[color];
  return true;
 }
}

interface ElementSet{
 'div':Element,
 'button':Element
}

let elementSets:Array<ElementSet>=[];
let squareSizeNum:number=100;
let squareSize:string=`${squareSizeNum}px`;

for (let index: number = 0; index < 4; index++) {
 elementSets.push({
  'div': document.createElement('div'),
  'button': document.createElement('button')
 });
}

let getRandomIntInclusive: Function = (min, max) => {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

elementSets.map((elem,index)=>{
 let colorChangeClass = new numericColor(elem.div);
 elem.button.textContent = "Change color";
 (elem.button as HTMLElement).onclick=(e)=>{
  colorChangeClass.changeColor(getRandomIntInclusive(0,3));
 }
 document.body.appendChild(elem.button);
 document.body.appendChild(elem.div);
});