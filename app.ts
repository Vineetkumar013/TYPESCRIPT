// let num1 = 1;
// function calculate(num1:number, num2:number) {
//     return num1 + num2
// }

// console.log(calculate(num1, 1));

// function getTotal(numbers: Array<number>){
//     return numbers.reduce((acc,item) => {
//         return acc + item;
//     },0)
// }

// console.log(getTotal([3, 2, 1]));

// type alias

// type User = { // <=== Custom type
//     name: string;
//     age: number;
//     address?: string; // <== ? sign it's mean optional (property) address?: string | undefined
// }

// const user: User = {
//     name: "Vineet",
//     age : 23
// }

// function login(userData: User): User {
//     return userData
// }

// console.log(login(user))

// type ID = number | string; // <= custom type whenever i will use ID So it's mean this is type of Number and string.

// const userId: ID = 123;

////////////////////// INTERFACES /////////////////////

// Interface is also like type as type is shape of Object, just like that interface is shape of object
// But inside in interface something is Difference so we will talk about on this

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 456,
// };

// const transaction2: Transaction = {
//   payerAccountNumber: 103,
//   payeeAccountNumber: 406,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 2423,
//   accountHolder: "abc",
//   balance: 1242,
//   isActive: true,
//   transactions: [ transaction1, transaction2 ]
// };

// console.log(bankAccount)

// Extend
// extends don't repeat duplication

// interface Book {
//   name: string;
//   price: number;
// }

// interface Ebook extends Book {
// //   name: string;
// //   price: number;
//   filesize: number;
//   format: string;
// }

// interface AudioBook extends Ebook {
// //   name: string;
// //   price: number;
// //   filesize: number;
// //   format: string;
//   duration: number;
// }

// const book: AudioBook = {
//     name: "Lean Typescript",
//     price: 200,
//     filesize: 50,
//     format: "pdf",
//     duration : 5,
// };

// ____________________
//  This is merging two interfaces
// interface Book {
//     name: string;
//     price: number;
// }

// interface Book {
//     size: number;
// }

// const book: Book = {
//     name: "typescript",
//     price: 200,
//     size : 70,
// }

// _____________________________________

// Unions

// type ID = number | string;

// function printId(id: ID) {
//     if (typeof id === "string") {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }

// printId("hello")

// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3);
// }

// console.log(getFirstThree([1,2,4,3,2,3,5]))

// ______________________________________________________________

////////////////////////////// Generics ////////////////////////

// function logString(arg:string) {
//     console.log(arg);
//     return arg;
// }

// logString("logged in");

// function logNumber(arg:number) {
//     console.log(arg);
//     return arg;
// }

// logNumber(3);

// function logArray(arg:any[]) {
//     console.log(arg);
//     return arg;
// }

// logArray([4, 3])

// function logAnything<T>(arg: T): T {  // generic is showing which type of data we sending here is show we are send Number[] and we can write anything replace of T
//     console.log(arg);
//     return arg;
// }

// logAnything([5,6])

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 90 }, { age: 50 }];

// interface Player {
//   name: string;
//   age: number;
// }

// const players: Player[]= [
//   { name: "John", age: 30 },
//   { name: "jane", age: 90 },
//   { name: "joe", age: 50 },
// ];

// getOldest(players);

// // Assertion
// // const person = getOldest(players) as Player;

// // Generics
// const person = getOldest(players)
// person.age

// interface IPost {
//     id: number;
//     name: string;
//     age: number;
// }

// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// const fetchUserData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }
// (async () => {
//     // const posts = await fetchPostData("/posts")
//     const users = await fetchUserData("/users")
//     users[0].name;
// })
// _____________________________________________
// GENERICS Use
// const fetchData = async <ResultType>(path: string): Promise<ResultType>=> {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// (async () => {
//     const posts = await fetchData<IPost[]>("/posts");
//     posts[0].name;
// })

interface ICreadential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

function login(creadentials: ICreadential): boolean {
  console.log(creadentials);
  return true;
}

const user: ICreadential = {
  username: "Vineet",
  password: "secret",
  isAdmin: true,
};

// const user = {
//     username: "Vineet",
//     password: "secret",
//     isAdmin : true,
// }

// ____________________________________________

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean;
}

const auth: IAuth = {
  username: "Vineet",
  password: "secret",

    login(username: string, password: string) {
        return true;
  },
};
