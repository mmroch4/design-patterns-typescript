import { MyDatabaseFunction } from './database/my-db-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Joseph', age: 22 });
myDatabaseClassic.add({ name: 'Phill', age: 58 });
myDatabaseClassic.add({ name: 'Eduard', age: 88 });

export { myDatabaseClassic };
