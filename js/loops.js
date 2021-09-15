console.log("\n########loops.js loaded ##########\n");
console.log(baseSentence + userFirstname + "\n"
+ "Vous êtes sur le script loops.js !\n");

// While loop example

let coupaings = ["Jules","Kevin","Camille","Edgar","Gauthier","Lulu","Auré","Théa"];
let i = 0;
// while(i < coupaing.length){
//     console.log(i);
//     console.log(coupaing[i]);
//     i++;
// }

// for (let j = 0; j < coupaing.length; j++){
//     console.log(coupaing[j]);
// }


// For of loop only works with indexed arrays
for (var coupaing of coupaings){
    console.log(coupaing);
}
// For in loop can iterate throught objects
for (var index in coupaings){
    console.log(parseInt(index));
    console.log(coupaings[index]);
}

var humans = {
    name : "Jules",
    age : 26,
    sexe : "male",
    country : "France"
}

for (let key in humans){
    console.log(key + " : " + humans[key]);
}

let humain1 = humans;
humain1.name = "Jack";
console.log(humain1);
let humain2 = humans;
humain2.name = "Bob"
console.log(humain2);

function humanoid(name) {
    this.name = name;
    this.sayHello = function(){
        console.log("Hello my name is " + this.name);
    }
}

let joe = new humanoid("Joe");
joe.sayHello();