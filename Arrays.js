// // // // function fn (){
// // // //     console.log('this is a function');
// // // //     return 1;
// // // // }

// // // const obj = {
// // //     name: 'John',
// // //     age: 30,
// // // }
// // // // const arr = [1, 2, 3, 4, 'ritik' , fn() , obj];

// // // // console.log(arr);

// // // let fruits = ["apple", "banana", "orange", "kiwi"];

// // // for (let i = 0; i < fruits.length; i++) {
// // //   console.table(fruits[i]);
// // // }

// // let matrix = [
// //   [1, 2, 3], // vertical : columns
// //   [4, 5, 6], // horizontal : rows
// //   [7, 8, 9],
// //   [10, 11, 12],
// // ];

// // let value = matrix[2][0];  // 6
// // let value1 = matrix[3][1]; // 11

// // // for (let i = 0; i < matrix.length; i++) {
// // //   for (let j = 0; j < matrix[i].length; j++) {
// // //     console.log(matrix[i][j]);
// // //   }
// // // }

// // // let myArray = new Array("apple", "banana", "orange"); // 1st way

// // // let myArray1 = ["apple", "banana", "orange"]; // 2nd way

// // // myArray[1] = 'kiwi'

// // // console.log(myArray);

// // let myArray = ["apple", "banana", "orange"];

// // myArray.push('ritik');
// // myArray.push('ayush')
// // myArray.unshift('alma')
// // myArray.pop();

// // console.log(myArray);
// // output = ['alma' ,'apple' , 'banana' , 'orange' , 'ritik' , ]

// // let myArray = ["apple", "banana", "orange" , 'ritik'];
// // let newArray = myArray.slice(1, 3);
// //                         //  startind , endind
// // console.log(newArray);
// // let arr1 = [1,2,3,4,5,6,7,8,9,10]
// // let newarr1 = arr1.slice(3,5)

// // // 3 5
// // // 3 4
// // console.log('modifiled array' + newarr1);
// // // output = []
// // // Output
// // // ["banana"];
// // // console.log(newArray);
// // console.log(arr1);

// // let myArray = ["apple", "banana", "orange"];

// // myArray.splice(1, 1);

// // let arr1 = [1,2,3,4,5,6,7,8,9,10];
// // arr1.splice(2,3)
// // console.log(arr1);

// // let arr1 = ['my', 'name' , 'is' , 'Khan' ]
// // arr1.splice(2,1 , 'ritik')
// // // Output
// // console.log(arr1);
// // ["apple", "pear", "watermelon", "orange"];

// // let myArray1 = ["apple", "banana", "orange"];
// // let myArray2 = ["pear", "mango"];
// // let newArray = myArray1.concat(myArray2);

// // console.log(newArray);

// // // Output
// // ["apple", "banana", "orange", "pear", "mango"];

// // let myArray = ["apple", "banana", "orange"];
// // let myString = myArray.join(" ");

// // console.log(myString);

// // // Output
// // ("apple, banana, orange");

// // let myArray = ["apple", "banana", "orange"];
// // myArray.reverse();

// // console.log(myArray);

// // // Output
// // ["orange", "banana", "apple"];

// // let myArray = [4,5,1,2];
// // myArray.sort();

// // console.log(myArray);

// // // Output
// // ["apple", "banana", "orange"];

// // let myArray = [1, 2, 3, 4, 5];
// // let newArray = myArray.filter(function (element) {
// //   if(element%2===0){
// //     return true;
// //   }
// //   return false;
// // });

// // console.log(newArray);
// // console.log(myArray)

// // Output
// // [2, 4];

// // let myArray = [1, 2, 3];
// // let newArray = myArray.map(function (element) {
// //   return element - 5;
// // });

// // console.log(newArray);
// // console.log(myArray);
// // // Output
// // [2, 4, 6];
// // let totolcount = 0;

// // let myArray = [1, 2, 3, 4, 5];
// // let sum = myArray.reduce(function (accumulator, currentValue) {
// //   return (accumulator + currentValue);
// // },1);
// // console.log(sum);
// // 1 st iteration : acc = 0 , curr = 1;
// // 2nd iteration  : acc = 1 , curr = 3
// // 3rd it  acc: 6
// // 4th acc : 10
// // 5th : 15

// // console.log(sum);

// // // Output
// // 15;

// // let myArray = ["apple", "banana", "orange"];
// // let containsBanana = myArray.includes("kiwi");

// // console.log(containsBanana);

// // Output
// // true;

// // let myArray = [1, 2, [3, 4, [5, 6]]];
// // let flattenedArray = myArray.flat(2);

// // console.log(flattenedArray);

// // // Output
// // [1, 2, 3, 4, 5, 6];

// // let string = 'this is a string'

// // let string2 = 'this is string 2'
// // let a = 2;
// // let finalstring = string + ' '+  a  + ' ' + string2
// // // after es6
// // let finalstring1 =  `my name is ${a}`
// // console.log(finalstring1);

// // let string = "Hello World";

// // console.log(string.substring(0, 5));
// // console.log(string.substring(6));
// // console.log(string.substring(0,7));
// // // Output
// // // ('hello W)
// // // ("Hello");
// // // ("World");

// let string = "Hello World";

// console.log(string.slice(0,-2)) // if you do start > end , we get " "
// // console.log(string);
// console.log(string.substring(7,0));
// // replace the parameters
// // console.log(string)
// // Output
// // ("Hello JavaScript");

const arr = [10, 2, 3, 2, 6];
// // console.log(arr.find(2))

// const students = arr.findIndex((e) => {
//   return e < 3;
// });

// console.log(students);
// const students = arr.every((e)=>{
//    return e<3
// })
// console.log(students);

// arr.forEach((e)=>{
//  console.log(e);
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\,[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage
// const email1 = "michael.scott@gmail.com";
// const email2 = "pam.beesly_@gmail,com"; // it does not have @
// console.log(isValidEmail(email1));
// console.log(isValidEmail(email2));

// Output
// true

// false

// const regex = /apple/;
// console.log(regex.test("I love myapplesjkdjkabdjaa."));
// console.log(regex.test("Oranges are juicy."));

// // Output
// true;
// false;

// const regex = /\\d{2}-\\d{2}-\\d{4}/;
// const str = "Date of birth: 12-31-1990";
// const match = str.match(regex);
// console.log(match);



// Output
// ["12-31-1990"];


// const regex = /ravi/g;
// const str = "hi i am ravi ravi avi kavi .";
// const newStr = str.replace(regex, "banana");
// console.log(newStr);

// Output
// ("I have a banana and an orange.");

// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const email = "user_@example.com";
// console.log(regex.test(email));

// // Output
// true;

function naiveStringMatch(mainString, pattern) {
  const n = mainString.length;
  const m = pattern.length;
  const occurrences = [];

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (mainString[i + j] !== pattern[j]) {
        break;
      }
    }

    if (j === m) {
      occurrences.push(i);
    }
  }

  return occurrences;
}

// Example usage:
const mainString = "ABABABCABABABC";
const pattern = "ABABC";
console.log(naiveStringMatch(mainString, pattern));

// Output
[2, 9];