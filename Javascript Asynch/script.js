let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
}


let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    },2000);
    // call_production();
}

let production = () => {
 setTimeout( () => {
     console.log("Production has started");
     setTimeout(() => {
         console.log('The fruit has been chopped');
         setTimeout(() => {
             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
             setTimeout(() => {
                 console.log("the machine was started");
                 setTimeout( () => {
                     console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                     setTimeout( () => {
                         console.log(`${stocks.toppings[0]} was added as toppings`)
                         setTimeout(() => {
                             console.log('sever ice cream');
                         },2000)
                     },3000);
                 },2000);
             },1000);
         },1000);
     }, 2000);
 },0000)
}


order(3, production);









// synchronous system

// function one( call_two) {
//     call_two();
//     console.log(" step 1 complete, please call step 2");
// }

// function two() {
//     console.log(" step 2");
// }

// // if a element stuck, then all elements stuck too
// console.log("I");
// console.log('eat');
// console.log('ice cream');
// console.log("with a");
// console.log('spoon');

// asychronous system
//  The setTimeout is executed at last, the code after it are executed before the 
// // it, because in another way the program would go stuck.
// console.log("I");
// console.log('eat');
// setTimeout(() => {
//     console.log("Ice Cream");
// },4000);
// console.log("with a");
// console.log("spoon");
// one(two); // two is a function and one also. The firts and unique one's argument is a variable that get a function: the two function

