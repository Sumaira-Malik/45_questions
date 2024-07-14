"use strict";
// Q_no-37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
//  reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//  with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--------------------------------Q_no-37------------------------------------------");
function make_shirt(size = "Large", printMessage = "I love typescript") {
    console.log(`Create a ${size} shirt with the ${printMessage} prints on shirt`);
}
//calling the function by default value
make_shirt();
//calling the function now with medium size shirt
make_shirt("Medium");
//calling a function now with small size and also different message
make_shirt("Small", "I love javascript");
