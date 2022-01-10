let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
}

is_shop_open = true;

function time (ms) {
    return new Promise ( (resolve, reject ) => {
        if (is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log('shop is closed'));
        }
    });
}

async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]}`);
        
        await time(0000);
        console.log('start the production');

        await time(2000);
        console.log('cut the fruit');

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log('start the machine');
        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);
        await time(1000);
        console.log('serve ice cream');

    }
    catch{

    }
    finally{
        console.log('day ended, shop is closed');
    }
}

kitchen();

























// function toppings_choice(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             resolve(console.log('which topping would you love?'))
//         },0000);
//     })
// }


// async function kitchen(){
//     console.log('A');
//     console.log('B');
//     console.log('C');
    
//   await  toppings_choice();
    
//     console.log('D');
//     console.log('E');
// }

// kitchen();
// console.log('doing the dishes');
// console.log('cleaning the tables');
// console.log('taking others orders');



// async function kitchen(){
//     try{
//         await abc;
//     }
//     catch(error){
//         // the error variable stores the error message
//         console.log('the function abc does not exist', error);
//     }
//     finally{
//         console.log('runs code anyways');
//     }

// }


// kitchen();
// let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise (  (resolve, reject) => {

//         if (is_shop_open){

//             setTimeout(()=> {
//                 resolve( work() );
//             },time);
            
//         }
//         else{
//             reject(console.log('Our shop is closed'));
//         }

//     }  );
// };



// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

// .then( () => {
//     return order(0000, ()=> console.log('production has started'));
// })

// .then(()=> {
//     return order(2000, ()=> console.log('the fruit was chopped'));
// })

// .then(
//     () => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));

//     }
// )

// .then(
//      () => { 
//          return order(1000, () => console.log('Start the machine'));
//      }
// )

// .then (
//     () => {
//         return order(2000, ()=> 
//         console.log(`we selected the ${stocks.holder[0]} container or ice cream was placed on ${stocks.holder[0]}`));
//     }
// )

// .then(
//     () => {
//         return order(3000, ()=> console.log(`${stocks.toppings[0]} was selected`));
//     }
// )

// .then(
//     () => {
//         return order(1000, ()=> console.log('the ice cream was served'));
//     }
// )


// .catch(
//     () => {
//         console.log('customer left');
//     }
// )

// .finally(
//     () => {
//         console.log('day ended, shop is closed')
//     }
// );




















































































// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//         call_production();
//     },2000);
//     // call_production();
// }

// let production = () => {
//  setTimeout( () => {
//      console.log("Production has started");
//      setTimeout(() => {
//          console.log('The fruit has been chopped');
//          setTimeout(() => {
//              console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
//              setTimeout(() => {
//                  console.log("the machine was started");
//                  setTimeout( () => {
//                      console.log(`Ice cream was placed on ${stocks.holder[0]}`);
//                      setTimeout( () => {
//                          console.log(`${stocks.toppings[0]} was added as toppings`)
//                          setTimeout(() => {
//                              console.log('sever ice cream');
//                          },2000)
//                      },3000);
//                  },2000);
//              },1000);
//          },1000);
//      }, 2000);
//  },0000)
// }


// order(3, production);









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

