console.log("\n########Script condition.js loaded ##########\n");
console.log(baseSentence + userFirstname + "\n"
+ "Vous êtes sur le script condition.js !\n");

var isAvailable = false;

if(isAvailable === true){
    console.log("Le meuble est disponible !");
} else {
    console.log("Le meuble n'est pas disponible. :(")
}

let price = 130;

if (price >= 50 && price <= 150){
    console.log(price + "€ ? Il est bon marché !");
} else if (price < 50 ){
    console.log(price + "€ ? C'est vraiment pas cher !");
} else {
    console.log(price + "€ ? C'est trop cher vindiou !");
}

color = "purple"

switch (color){
    case "brown":
    case "black":
    case "gray":
        console.log("Its color's dark !");
        break;
    case "red":
    case "green":
    case "blue":
    case "purple":
        console.log("Its colorful !");
    case "white":
        console.log("its bright !");
        break;
    default:
        console.log("its " + color + " i guess")
        break;
}
