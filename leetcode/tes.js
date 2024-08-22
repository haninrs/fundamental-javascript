var x = 100;

function blah1(){
    x = 5;
    console.log(x);
}

function blah2(){
    var x = 6;
    console.log(x);
}

blah1();
blah2();
console.log(x);



function myFunction() {
    "use strict";
    
    var x = 10; // This is allowed

    // Using an undeclared variable throws an error in strict mode
    y = 20; // Error: 'y' is not defined
}

// myFunction();

// var arr = [];
// for(var i=0; i<10; i++){
//     var f = function(){
//         console.log(i);
//     }
//     arr.push(f);
// }
// for(var j=1; j<arr.length; j++){
//     arr[j]();
// }



// var arr = [];
// for(var i=0; i<10; i++){
//     var f = function(i){
//         return function(){
//             console.log(i);
//         }
//     }(i);
//     arr.push(f);
// }
// for(var j=1; j<arr.length; j++){
//     if(arr[j] != arr[j-1]){
//         arr[j]();
//     }
// }


// Person = function(name){
//     this.name = name;
// };
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// console.log(alvin.name, alvin.age);
// Person.prototype.age = 20;
// berto = new Person("Berto");
// console.log(alvin.name, alvin.age);
// console.log(berto.name, berto.age);


// Person = function(name){
//     this.name = name;
// };
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// berto = new Person("Berto");
// berto.age = 20;

// if(alvin.hasOwnProperty('name')){
//     console.log('The first condition was true.');
// }
// if(berto.hasOwnProperty('name')){
//     console.log('The second condition was true.');
// }
// if(alvin.hasOwnProperty('age')){
//     console.log('The third condition was true.');
// }
// if(berto.hasOwnProperty('age')){
//     console.log('The fourth condition was true.');
// }





// var x = $.Deferred();

// $.ajax(url).done(function(user){
//     console.log('The first success!');
//     return $.ajax(url2, {user_id: data.id});
// }).pipe(function(data){
//     console.log('The second success!');
//     return $.ajax(url3, {object_id: data.id});
// }).pipe(function(data){
//     console.log('The third success!');
//     x.resolve(data);
// }).fail(function(error){
//     console.log("Something bad happened!");
// });

// x.then(function(data){
//     console.log("First argument to then was called.");
// }, function(data){
//     console.log("Second argument to then was called.");
// })



console.log(1);

setTimeout(function(){
    console.log(2);
}, 1000);

setTimeout(function(){
    console.log(3);
}, 2000);

setTimeout(function(){
    console.log(4);
}, 0);

console.log(5);
var start = new Date();
while(true){
    var now = new Date();
    if(now - start > 500){
        break;
    }
}
console.log(6);