// example of a good pattern of coding called 'dependency injection'
// to make the code more flexible for example
// to learn more about it : course Introduction to TypeScript 2 in edX

export class MainPage {
 public items : string[];
 constructor(private _logger : ILogger, private _itemsService : IItemsService) {
  this.items = _itemsService.getItems();
  _logger.logMessage("items downloaded", this.items);
 }
}

export class ItemsService implements IItemsService {
 public getItems() : string[] {
  return ["alpha", "bravo", "charlie"];
 }
}

export class AltItemsService implements IItemsService {
 public getItems() : string[] {
  return ["delta", "echo", "foxtrot"];
 }
}

export class Logger implements ILogger {
 public logMessage(title: string, message: any) {
  console.log('[' + title + '] ' + message);
 }
}

export interface ILogger {
 logMessage(title: string, message: any);
}

export interface IItemsService {
 getItems() : string[];
}

let page1 = new MainPage(new Logger(), new ItemsService());
let page2 = new MainPage(new Logger(), new AltItemsService());