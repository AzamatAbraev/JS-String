// ----- String1 ----- //

// function getCapLetters(N) {
//   let str = "";
//   for (let i = 65; i <= 65 + N; i++) {
//     str += String.fromCharCode(i);
//   }
//   return str;
// }

// let check = getCapLetters(20);
// console.log(check);

// ----- String2 ----- //

// let n = "Addfsdg";

// if (typeof n === "string") {
//   console.log("string");
// } else if (typeof n === "number") {
//   console.log("number");
// } else {
//   console.log(0);
// }

// ----- String3 ----- //

// let str = "Every man for himself";

// let resFirst = str[0].charCodeAt();
// let resLast = str[str.length - 1].charCodeAt();

// console.log(resFirst, resLast);

// ----- String4 ----- //

// let sign = "B";
// let N = 5;
// let res = "";

// for (let i = 1; i <= N; i++) {
//   res += sign;
// }

// console.log(res);

// ----- String5 ----- //

// let str = "Every man for himself";

// let wordByWord = str.split("").reverse();
// console.log(wordByWord);

// let reverseArray = wordByWord.join(" ");
// console.log(reverseArray);



// ----- String6 ----- //

// let str = "I think, therefore I am";
// let sign = "*";

// function getStringStars(N) {
//   let part = str.replaceAll(" ", ` ${sign}`);
//   console.log(part);
// }

// getStringStars(5);




// ----- String7 ----- //

// let str =
//   "Nobel Prize-winning theoretical physicist Albert Einstein arrived in the world on March 14, 1879";

// let res = str.split(" ").join("");
// let count = 0;

// for (let el of res) {
//   if (!isNaN(el)) {
//     count++;
//   }
// }

// console.log(count);

// ----- String8 ----- //

// let str = "Steve Jobs was a charismatic pioneer of the personal computer era.";

// let strTest = str.split(" ").join("");
// console.log(strTest);
// let count = 0;

// function isLowerCase(strTest) {
//   for (let el of str) {
//     if (isNaN(el) && el === el.toLowerCase()) {
//       count++
//     }
//   }
//   return count;
// }

// let check = isLowerCase(strTest);
// console.log(check);

// ----- String9 ----- //

// let str = "Steve Jobs was a charismatic pioneer of the personal computer era.";

// let strTest = str.split("");

//   for (let i in strTest) {
//     if (strTest[i] !== strTest[i].toLowerCase()) {
//       strTest[i] = strTest[i].toLowerCase();
//     }
//   }

// let strFinal = strTest.toString().replaceAll(",", "");
// console.log(strFinal);

// ----- String10 ----- //

// let str = "Steve Jobs was a charismatic pioneer of the personal computer era.";

// let strTest = str.split("");

//   for (let i in strTest) {
//     if (strTest[i] !== strTest[i].toLowerCase()) {
//       strTest[i] = strTest[i].toLowerCase();
//     } else if (isNaN(str[i]) && str[i] === str[i].toLowerCase()) {
//       strTest[i] = strTest[i].toUpperCase();
//     }
//   }

// let strFinal = strTest.toString().replaceAll(",", "");
// console.log(strFinal);

// ----- String11 ----- //


// let str = "Nobel Prize-winning theoretical physicist Albert Einstein arrived in the world on March 14 , 1879";

// let res = str.split(" ");

// function hasNumber(str) {
//   let empty = /\d/.test(str);
//   if ( empty && empty % 1 == 0 ) {
//     return 1;
//   } else if (empty % 1 != 0) {
//     return 2;
//   } else {
//     return 0;
//   }
// }

// let check = hasNumber(str);
// console.log(check);


// ----- String12 ----- //

// function getInverseNumber(n) {
//   let arr = String(n).split("").reverse();
//   let str = arr.toString().replaceAll(",", "");
//   return +str;
// }

// let check = getInverseNumber(5328);
// console.log(check);

// ----- String13 ----- //

// let str = "10 + 5 - 8";

// console.log(eval(str));

// ----- String14 ----- //

// let N1 = 7;
// let N2 = 6;

// let S1 = "What is up?";
// let S2 = "I am doing well";

// let s1 = S1.slice(0, N1);
// let s2 = S2.slice(0, N2);

// // let newStr = s1 + s2;
// let newStr = s1.concat(" ", s2);
// console.log(newStr);

// ----- String15 ----- //

// let S = "Do not put limitations on yourself";
// let C = "t";

// let newStr = S.replaceAll(C, C + C);
// console.log(newStr);

// ----- String16 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "*New String*";
// let C = "o";

// let newStr = S1.replaceAll(C, S2);
// console.log(newStr);

// ----- String17 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "o";

// let newStr = S1.includes(S2);
// let count = 0;

// for (let el of S1) {
//   if (el == S2) {
//     count++;
//   }
// }

// console.log(count);

// ----- String18 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "o";

// let newStr = S1.replace(S2, "");
// console.log(newStr);

// ----- String19 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "o";

// let newStr = S1.replaceAll(S2, "");
// console.log(newStr);

// ----- String20 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "o";
// let S3 = "*new string*";

// let newStr = S1.replaceAll(S2, S3);
// console.log(newStr);

// ----- String21 ----- //

// let S1 = "Do not put limitations on yourself";
// let S2 = "t";
// let S3 = "*new string*";

// let strPos = S1.lastIndexOf(S2);

// let res = S1.split("");
// res[strPos] = S3;
// let final = res.join("");
// console.log(final);

// ----- String22 ----- //

// let str = "HAMMA ISHDAN BORDIR BIB HAQIQAT";

// let arr = str.split(" ");
// console.log(arr);
// let count = 0;

// for (let el of arr) {
//   if (el[0] == el[el.length - 1]) {
//     count++;
//   }
// }

// console.log(count);

// ----- String23 ----- //

// let str = "HAMMA ISHDA BORDIR BIR HAQIQAT";
// let str2 = "A";

// let arr = str.split(" ");
// console.log(arr);
// let count = 0;

// for (let el of arr) {
//   if (el.includes(str2)) {
//     console.log(el);
//     count++;
//   }
// }

// console.log(count);

// ----- String24 ----- //

// let str = "Who is going to carry the boats and the logs, my friend";

// let arr = str.split(" ");

// function getMaxOfString(arr) {
//   let max = arr[0].length;
//   for (let i in arr ) {
//     if (max < arr[i].length) {
//       max = arr[i].length;
//     }
//   }
//   return max;
// }

// let check = getMaxOfString(arr);
// console.log("Max so'z harflar soni: ", check);


// ----- String25 ----- //


// let str =
//   "Buyuk shoir o'z asarlarida bu qutlug' dargohga yaqinligidan iftixor etishini bayon qiladi.Shuningdek, uning tarjimai holiga oid ayrim lavhalar asarlarida uchraydi.Bu tabarruk zot to'g'risidagi ba'zi ma'lumotlarni esa uning zamondoshlari o'z kitoblarida beradilar";

// let sign = ".";

// let res = str.split(sign);

// for (let el of res) {
//   console.log(el);  //"." - ishlatilmasdan
// }


// for (let el of res) {
//   console.log(el + sign);  //"." - bilan
// }


// ----- String26 ----- //


// let str =
//   "buyuk shoir o'z asarlarida bu qutlug' dargohga yaqinligidan iftixor etishini bayon qiladi";
// let arr = str.split(" ");

// let newArr = [];

// for (let el of arr) {
//   let res = el.replace(el[0], el[0].toUpperCase());
//   newArr.push(res);
// }

// let newStr = newArr.join(" ");
// console.log(newStr);


// ----- String27 ----- //

// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

// let str =
//   "The most famous inventors: Nicolas Tesla, Graham Bell, Thomas Edison and Isaac Newton";

// let arr = str.split("");
// let count = 0;

// for (let el of arr) {
//   if (marks.includes(el)) {
//     count++;
//   }
// }

// console.log(count);


// ----- String28 ----- //

// let str = "D:/Qudrat_c++/books/My_book.exe";

// let arr = str.split("/");

// let file = arr[arr.length - 1];
// let fileName = file.split(".");
// console.log(fileName[0]);


// ----- String29 ----- //

// let str = "D:/Qudrat_c++/books/My_book.exe";

// let arr = str.split("/");

// let file = arr[arr.length - 1];
// let fileName = file.split(".");
// console.log(fileName[fileName.length - 1]); 

//Length bu programma "my_book.min.exe" ga oxshagan file lar uchun ham ishlashi uchun qo`shilgan


// ----- String30 ----- //


// let str = "D:/Qudrat_c++/books/My_book.exe";

// let arr = str.split("/");

// if (arr.length > 3) {
//   let folder = arr[arr.length - 2];
//   console.log(folder);
// } else {
//   console.log("/");
// }
