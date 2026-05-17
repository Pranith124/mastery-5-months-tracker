console.log("Hi there");


let number=12;
let isEqual=true;

function sumoftwo(n1,n2){
    return n1+n2
}

console.log(sumoftwo(1,312))


function eligible(age){
    if (age>18){
        return "Your are eligible to vote."
    }
    else{
        return "Your are not eligible to vote."
    }
}

console.log(eligible(17))

function EvenorOdd(n){
    if (n%2==0){
        return "The number is even."
    }
    else{
        return "The number is odd."
    }
}

console.log(EvenorOdd(90))


function Sumton(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(Sumton(9))

function Greeting(name,age){
    return `Hi ${name} Good Morning and yours age is ${age}`;
}

console.log(Greeting("Harikirat",35));

let obj={
    name:"pranith",
    age:22,
    gender:"Male"
}

function Greet(obj){
    if(obj.gender=="Male"){
        if (obj.age>18){
            return `Hi  Mr.${obj.name} ,your age is ${obj.age} and you are legal to work.`
        }
        return `Hi  Mr.${obj.name} ,your age is ${obj.age} and you are not legal to work`
    }
    else{
        if (obj.age>18){
            return `Hi Mrs.${obj.name} ,your age is ${obj.age} and you are legal to work.`
        }
        return `Hi Mrs.${obj.name} ,your age is ${obj.age} and you are not legal to work`
    }
}

console.log(Greet(obj))


let arr=[1,2,3,4,5,6,7,8,9]
function EvenArray(arr){
    return arr.filter(n => n%2===0)
}

console.log(EvenArray(arr))

const users = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	},{
        name:"Pranith",
        age:18
    }
]

function above18(obj){
    return obj.filter(user => user.age>18)
}

let res=above18(users)

console.log(res)

const user1 = [{
        name: "harkirat",
        age: 19,
        address: {
            city: "Delhi",
            country: "India",
            address: "1122 DLF"
        }
    },
    {        name: "Pranith",
        age: 18,
        address: {
            city: "Delhi",
            country: "India",
            address: "1122 DLF"
        }
    }
]


function Prints(user){
    return user.filter(user => user.age>18)
}

console.log(Prints(user1))
