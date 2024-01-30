if (age >=13){
    console.log("Adult");
}
else if(age>=13){
    console.log("Teenager");
} else{
    console.log("Minor");
}

let age = 16;
let status;

switch(true){
    case age >= 18:
        status = "Adult";
        break;
    case age >= 13:
        status = "Teenager";
        break;

    default:
        status = "Minor";
    
}
console.log(status);

let x = ['a','b','c','d','e'];
for(let i = 0; i<3; i++){
    console.log(x[i]);
}

let i = 0;
while(i<4){
    console.log(x[i]);
    i++;
}

let j = 0;

do{
    console.log(x[j]);
    j++;
}while(j<2);

for(let i in x){
    console.log(x[i]);
}
for(let i of x){
    console.log(i);
}