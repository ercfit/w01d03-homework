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

// const ninjaTurtles = ["Donatello", "Leonardo, Raphael, Michaelangelo"];
// for (i = 0; i < ninjaTurtles.length; i++){
// 	ninjaTurtles[i] = ninjaTurtles.toUpperCase();
// }
// 	console.log(ninjaTurtles);

//Answer:

// /Users/bosslady/ga_wdi_funky_ducks/6_13_2018_control_flow_loops_conditionals/w01d03-homework/app.js:115
// 	ninjaTurtles.toUpperCase();
// 	             ^

// TypeError: ninjaTurtles.toUpperCase is not a function
//     at Object.<anonymous> (/Users/bosslady/ga_wdi_funky_ducks/6_13_2018_control_flow_loops_conditionals/w01d03-homework/app.js:115:15)
//     at Module._compile (internal/modules/cjs/loader.js:702:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
//     at Module.load (internal/modules/cjs/loader.js:612:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:543:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
//     at startup (internal/bootstrap/node.js:238:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:572:3)

//Return of the Closets

//1. - Alien Attire
// const kristynsCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie", "green pants", 
// 						"yellow knit hat", "marshmellow peeps"];

// const thomsCloset = [["grey button-up", "dark grey button-up", "light blue button-up", "blue button-up"],
// 					["grey jeans", "jeans", "PJs"],
// 					["wool mittens", "wool scarf", "raybans"]];

// const kristynsShoe = kristynsCloset.shift();
// // console.log(kristynsCloset);
// thomsCloset[0,2].unshift(kristynsShoe);
// console.log(thomsCloset);

//1. Dress Us Up
//const kristynOutfit1 = kristynsCloset[2] + ", " + thomsCloset[0,1][0];

//const kristynOutfit2 = kristynsCloset[4] + ", " + thomsCloset[0,0][0] + ", " + thomsCloset[0,1][1];

//const kristynOutfit3 = kristynsCloset[0] + ", " + thomsCloset[0,1][0] + ", " + thomsCloset[0,0][2];

//const thomOutfit1 = thomsCloset[0,1][2] + ", " + thomsCloset[0,2][1];

//const thomOutfit2 = thomsCloset[0,0][3] + ", " + thomsCloset[0,1][1]; 

//const thomOutfit3 = thomsCloset[0,2][3] + ", " + thomsCloset[0,1][1];


//console.log(kristynOutfit1);
//console.log(kristynOutfit2);
//console.log(kristynOutfit3);
//console.log(thomOutfit1);
//console.log(thomOutfit2);
//console.log(thomOutfit3);

//1. Dirty Laundry

 // for (i = 0; i < kristynsCloset.length; i++){
	// console.log("WHIRR: Now washing " + kristynsCloset[i]); }

//2. Inventory
//console.log(thomsCloset[0,0], thomsCloset[0,1], thomsCloset[0,2]);

//Multiples of 3 and 5

//const multiples = [];
//const sum = 0;
for(let i = 0; i < 1001; i++){
	if ((i % 3 === 0) || (i % 5 === 0)){
		//sum ++;
		console.log(i);
	}
}

