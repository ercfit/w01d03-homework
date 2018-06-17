console.log("what's broken now?");

//Easy Going
 // for ( i = 1; i < 21; i++) {
	// console.log(i);
 // }

//Get Even

// for (i = 0; i < 201; i += 2){
//  	console.log(i);
//  }

//Excited Kitten

//1.

// for(i = 1; i < 21; i++){
// 	console.log("Love me, pet me! HSSSSSS!");
// }

//2.

// let message = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// function getRandomMessage(min, max){
//  	return Math.floor(Math.random() * (message.length)); //MDN web docs Math.random
// }
//  														//i should be able to use message.length (this is the # of elements--not the index #) or 3 (same same) ** if not using an array I would add 1--like for rolling dice


//   	//console.log(printRandomMessage);

// for(let i = 0; i < 21; i += 2){

// 	let messageIndex = getRandomMessage(0,3);

// 	let printRandomMessage = message[messageIndex]; //Ryan's RPC game

// 	console.log(i + printRandomMessage);
// }

//Fizz Buzz
//1. 

//for (let i = 1; i < 101; i++){
// 	console.log(i);
// }

//2. 

 // for (let i = 1; i < 101; i ++){

 //  	if (i % 3 === 0){
 //  		console.log("Fizz");
 // 	} else{ 		
 //   		console.log(i);
 //   	}
 // }



//3. 

// for (let i = 1; i < 101; i++){
	
// 	if (i % 5 === 0){
// 		console.log("Buzz");
// 	} else{
// 		console.log(i);
// 	}
// }

//4.
// for (let i = 1; i < 101; i++){

// 	if ((i % 3 === 0) && (i % 5 === 0)){
// 		console.log("FizzBuzz");
// 	} else{
// 		console.log(i);
// 	}
// }

//Getting to Know You
// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburg"];
// const matt = ["Matt H", 186, "Philadelphia"];

//1.
// thom.shift();
// console.log(thom);

// thom.unshift("Gameboy")
// console.log(thom);

//2.
// karolin[1] = 17;
// console.log(karolin);

//3.
// matt[2] = "Gothom City";
// console.log(matt);

//4. 
// kristyn.pop();
// kristyn.push("Brooklyn");
// console.log(kristyn);

//Yell at the Ninja Turtles

//1.

const ninjaTurtles = ["Donatello", "Leonardo, Raphael, Michaelangelo"];
for (i = 0; i < ninjaTurtles.length; i++){
	ninjaTurtles[i] = ninjaTurtles.toUpperCase();
}

	console.log(ninjaTurtles);









