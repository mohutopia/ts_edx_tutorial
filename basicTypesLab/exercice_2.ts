class colorChange {
 div:Element;
 constructor(div:Element) {
  this.div=div;
 }
 changeColor:Function=(color:string):boolean=>{
  (this.div as HTMLElement).style.backgroundColor=color;
  return true;
 }
}

interface ElementSet{
 'div':Element,
 'button':Element
}

enum Colors {
 Green,
 Red,
 Blue,
 Orange
}

let elementSets:Array<ElementSet>=[];
let squareSizeNum:number=100;
let squareSize:string=`${squareSizeNum}px`;

for (let index: number = 0; index < 4; index++) {
 elementSets.push({
  'div': document.createElement('div'),
  'button': document.createElement('button')
 });
 elementSets.map((elem,index)=>{
  let colorChangeClass = new colorChange(elem.div);
  (elem.div as HTMLElement).style.height=squareSize;
  (elem.div as HTMLElement).style.width=squareSize;
  elem.button.textContent = "Change color";
  (elem.button as HTMLElement).onclick=(e)=>{
   colorChangeClass.changeColor(Colors[index]);
  }
  document.body.appendChild(elem.button);
  document.body.appendChild(elem.div);
 });
}