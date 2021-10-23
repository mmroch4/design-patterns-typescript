import { MyDatabaseFunction } from './database/my-db-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-A';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Ricardo', age: 22 });
myDatabaseClassic.add({ name: 'Gregory', age: 58 });
myDatabaseClassic.add({ name: 'Adin', age: 88 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
