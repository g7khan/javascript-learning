









//  alert("Hello World");
// console.log(1 + 1);
//  document.write("<h1>Hello World</h1>");
// document.write("<p>I am the <span class='special'>master</span> of my own fate.</p>")

















// if esle javascript ..............





// let isFarhanShopOpen = confirm('is Farhan shop open?');

// if (isFarhanShopOpen) {
//     console.log('bring french fries');
// }
// else {
//     console.log('bring something to eat');
// }








// let shopName = prompt('which shop is open?');



// if (shopName === "farhan"){
//     console.log('bring french fries');
// }



//  else if (shopName === 'almadina'){
//     console.log('bring zinger burger');
// }


//  else if (shopName === 'ejaz'){
//     console.log('bring 1 briyani');
// }

// else{
//     console.log('bring something to eat');
// }







// let username  = prompt("what is your body fact percentage");

//    if ( username >= 40 ){
//     console.log("cadio");
//    }

//   else if ( username >= 30 )
//    {
//     console.log("strength");
//    }

//    else if ( username >= 20 ){
//     console.log("cardio + strength");
//    }


//    else if ( username < 20 ){
//     console.log("crossfit");
//    }





// let weight = +prompt("what is your weight");

//  let timing = +prompt("what is your timing");
//  let gender = prompt ("what is your gender")
//    let age = +prompt(" what is your age ")



//   if (weight >= 300 && timing < 6 && gender === "male" && age > 40){
//       console.log('you are eligible hour fot fitness club');
//   }



//        let username =prompt(" what is your username");

// if (username == owais)
// {
// console.log("hi! owais");

// }
// else if(username == khan){
//               console.log("orong user id");
// }

// else if(username == ejaz){
//    console.log("This user hack your id");
// }



// to take user input

// let username = prompt("What is your username?");
// let password = + prompt("whar is your password");

// if (username === "owais" && password === 1334) {
//     document.write("Congratulation successfully login");
// }
// else if (username === "khan" && password === 456) {
//     document.write("invalid username and pasword");
// }
// else if (username === "ejaz" && password === 789) {
//     document.write("sorry plz try later");
// }
// else {
//     document.write("unknown user");
// }





// let userName, fatherName, rollNumber;

// userName = ("Haider");
// fatherName = ('Shah');
// rollNumber = ("2643");
// console.log(userName, fatherName, rollNumber);





// let str = 4;
// let num = "45556";

// document.write(typeof str );

// document.write(typeof num);



// let user = prompt("what is your name");
// let bank = prompt("Bank name");
// let branch = prompt("what branch");
// let amount =+ prompt("what is your amount");



// if(user === "owais" && bank === "Meezanbank" && branch === "kharadar" && amount === 40000)
// {
//    document.write('congratulation owais for receving cash');
// }




// if(user === "owais" && bank === "alfalah" && branch === "saddar" && amount === 100000)
// {

//    document.write('sorry your transaction has been cancelled due to invalid detail');

// }



// if(user === "owais" && bank === "Meezanbank" && branch === "lyari" && amount === 40000)
// {
//    document.write('plz try again later');
// }




//   let city = prompt ("what is your city name");

//   if(city === "karachi" ){

//       alert('welcome to the city of light');
//       console.log('welcome to the city of light');
//       document.write('welcome to the city of light');
//   }








//   let gender = prompt ("enter your gender");

//   if(gender === "male" ){


//       console.log('good morning sir');

//   }


// else if(gender === "female"){
//   console.log('good morning mam')
// }








// let signalcolor = prompt ("which color of signal light");

// if(signalcolor === "red" ){


//     console.log('vechile must stop');

// }


// else if(signalcolor === "yellow")
// {

//     console.log('get ready to move')
// }




// else if(signalcolor === "green")
// {
//     console.log('can move now')
//            }





// let areyougraduate = confirm("are you graduate");

// let sports = prompt("which sports do you play");


//   if (areyougrdauate && +prompt('what was your score') >= 60){

//              console.log('are you eligble for admission');
//   }

// else if(sports === "cricket")
// {

//     console.log('are you eligble for admission');

// }


















// let areyougraduate = confirm("are you graduate");
// let sports = prompt("which sports do you play");


//   if ( confirm('are you graduate')  && +prompt('what was your score') >= 60){

//              console.log('are you eligble for admission');
//   }

// else if( prompt("which sports do you play") === "cricket")
// {

//     console.log('are you eligble for admission');

// }








// let totalmarks =+ prompt ("what is your total marks");
// let marksobtained =+ prompt("what you mark obtained");   
// let result = prompt("totalmarks/obtainedmarks")*100;



//   document.write("<p>totalmarks       ");


// let number =+ prompt("what is the number ");


// document.write('number % 3');




// let capCities = ['Karachi', 'Lahore', 'Peshawar', 'Quetta', 'Skardu'];

// let userCity = prompt('Which city do you live in?'); //karachi
// let isCapCity = false;

// for (let i = 0; i < capCities.length; i++) {
//     let capCity = capCities[i];
//     console.log(capCity);
//     if (userCity.toLowerCase() === capCity.toLowerCase()) {
//         console.log('You live in a capital city.');
//         isCapCity = true;
//         break;
//     }
// }

// if (isCapCity === false) {
//     console.log('You do not live in a capital city.');
//     let doYouWantToMove = confirm("do you want to move?");
//     if (doYouWantToMove) {
//         console.log('you may explore properties on zameen.com');
//     }
// }






// let bYear = +prompt("enter your birth year");
// document.write("Your birth year is " + bYear);

// let num1 = +prompt("enter a number");
// let num2 = +prompt("enter another number");

// console.log('Your total is ' + (num1 + num2));







// let str =   "the quick world war II brown fox jumps world war II over the lazy world war II dog";

// for (let i = 0; i < str.length; i++)
// {
//     let targettxt = str.slice(i, i + 12)

//     if (targettxt === "world war 11"){

//         str = str.slice(0 , i) + "the second world war" + str.slice(i + 12);
//     }


// }

// console.log(str);







// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";

// str = str.replace(/world war II/g, "the second world war");

// console.log(str);








// let str =  "the biggest saylani smit test has been conducted on 12 july "

// console.log(str.slice(3 , 25));




// let num1 = 51.99;
// let num2 = 51.99;


// console.log(Math.round(num1));
// console.log(Math.round(num2));


// console.log(Math.ceil(num1));
// console.log(Math.ceil(num2));



// console.log(Math.floor(num1));
// console.log(Math.floor(num2));




// let user = prompt("what is your current location")
// let city = prompt("where do you live")


// var total = price + (price * taxRate);
// console.log(total);











// for (var i = 0; i < Text.length; i++)
// {
//     if (text.slice(i, i = 12) === "World War II")

//  {
//        text = text.slice(0, 1) + "the second world war" + text.slice(i + 12);

//  }


// }

// console.log(i);


// var firstChar = text.indexOf("World War II");

// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }




// var firstChar = text.indexOf("World War II");{
//  if (firstChar !== -1)

//  {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);


//  }
// }

// var text = "Muhammad Owais khan abdul sattar";
//  var segIndex = text.lastIndexOf("ar");

// console.log(segIndex);




// var char = "the second waord war";

// var text = char.lastIndexOf("war");

// console.log(text);









// let now = new Date();
// document.write(now);



// let now = new day();

// console.log(day);


// let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = now.getDay();
// console.log(day);
// console.log(dayName[day]);




// let num = (Math.ceil(Math.random() * 14));
// console.log(num);



//  num1 = 5

//  console.log(Math.random(num1) * 2);






// let age = "26.667";

// console.log(age);

// age = parseFloat(age);



//  let age = "apple"
//  console.log(isNaN(age));
















// let num = 56798;
// num = num.toString();
// console.log(num.split(""));




// let bill = 2.567;
// bill = bill.toFixed();
// console.log(bill);



// num1 = +prompt("enter your number")

// num2 = +prompt("enter another number")

// ans = num1 + num2;

// alert(num1 + num2);


// if ( ans  >  100 )

// {
//     console.log(Math.ceil(ans));
// }


// else ( ans  <  70 )
// {
//     console.log(Math.floor(ans));
// }







// let dob = new Date("Feburary 2, 1971);
// let now = new Date();

// let age = now.getTime() - dob.getTime()

// console.log(age / 1000 / 60 / 60 / 24 / 365.25);




// let dob = new Date("Feburary 2, 1971");
// let now = new Date();

// let age = now.getTime() - dob.getTime()

// console.log(age / 1000 / 60 / 60 / 24 / 365.25);

// let year = now.getFullYear();

// console.log(year);


// let monthname = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", 
// "Sep", "Oct", "Nov", "Dec",]


// let month = now.getMonth();

// console.log(month);

// console.log(monthName[month]);





// let monthName = ["Jan", "Feb", "Mar", "Apr"];

// let month = now.getMonth();
// console.log(month);
// console.log(monthName[month]);




// var rightNow = new Date();

// var theDay = rightNow.getDay();





// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];






// console.log(now);




// function sum(num2, num1){
//     console.log(num1 + num2);
// }



// sum(2, 7);
// sum(10, 56);
// sum(67, 7);
// sum(34, 78);
// sum(21, 72);



// function sum(num2, num1){
//     console.log(num1 - num2);
// }



// sum(2, 7);
// sum(10, 56);
// sum(67, 7);
// sum(34, 78);
// sum(21, 72);











// let h1El = document.querySelectorAll("h1");

// function greetUser(greetMsg, userName)
// {

//     h1El[0].innerHTML = greetMsg + " " + userName; 

// } 


// document.write()




// function sum(num2, num1){
//     console.log(num1 - num2);
// }
// console.log(2, 5);
// console.log(6, 10);




// let h1El = document.querySelectorAll("h1");

// function grretUser(greeting, userName)
// {



//     h1El[0].innerHTML = greeting + " " + userName;
// }


// let user = prompt("what is your name");
// grretUser("Asalamualikum", user);



// function calculate(num1, num2, operator)
// {
//   if (operator === "+"){
//     console.log(num1 + num2);
//   }


//   else if (operator === "-"){
//     console.log(num1 - num2);
//   }


//   else if (operator === "*"){
//     console.log(num1 * num2);
//   }

//    else if (operator === "/"){
//     console.log(num1 / num2);
//   }

//  else if (operator === "%"){
//     console.log(num1 % num2);
//   }


// }


// calculate(2, 19, "+");
// calculate(6, 90, "*");
// calculate(6, 72, "-");
// calculate(70, 72, "/");
// calculate(50, 3, "%");



// function titleCase(firstname, lastName) {

//     let ffChr = firstname[0].toUpperCase();
//     let frestChr = firstname.slice(1).toLowerCase();
//     let titledFName = ffChr + frestChr;

//     let lFChr = lastName[0].toUpperCase();
//         let lRestChr = lastName.slice(1).toLowerCase();
//         let titledLName = lFChr + lRestChr;
    


//         let fullName = titledFName + " " + titledLName;
 
// console.log(fullName);

// }


// titleCase("oWAIS", 'kHAN');






// function addDashOnOddNum(str) {
//       if (!isNaN(str)) {
//           let newStr = "";
  
//           for (let i = 0; i < str.length; i++) {
//               if (
//                   str[i] % 2 !== 0 &&
//                   str[i + 1] % 2 !== 0 &&
//                   !isNaN(str[i + 1] % 2)
//               ) {
//                   newStr += str[i] + "-";
//               }
//               else {
//                   newStr += str[i];
//               }
//           }
//           console.log(newStr);
  
//       }
//       else {
//           console.log('Number required');
//       }
//   }
  
//   addDashOnOddNum("23497412579");
//   addDashOnOddNum("5796213");
//   addDashOnOddNum("133557991111155667457788937");

  





































  
  
  
  
































































































