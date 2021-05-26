console.log("task1")

console.log("fdf df s vsdf sdf s".split(' '));

console.log("task2")
function permute(string) {
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        }
        else {
            let out = [];
            for (let i = 0; i < string.length; i++) {
                let pre = string.substring(0, i);
                let post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }     let distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    return Object.keys(distinct); }
console.log(permute("abcd"));

console.log("task3")

let num = 5;

function factorial(num) {
    let fact = 1;

    for (let i=0;num-i>0;i++){
        fact*= num-i;
    }
    return fact;
}

console.log(factorial(num));

console.log("task4")

let result = [1, 3, 4, 1, 1, 3, 4, 5, -5, -5, -5, 5, 5, 5];

function mode(array)
{
    if(array.length === 0)
        return null;
    const modeMap = {};
    let maxEl = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        const el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

console.log(mode(result));

console.log("task5")


let getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(2, 2020));

console.log("task6")


let Arr = [4,5,2,8,-1,5,57,-42];

function QuickSort(Arr)
{
    if (Arr.length === 0){
        return []}
    let a = [], b = [], p = Arr[0];
    for (let i = 1; i < Arr.length; i++)
    { if (Arr[ i ] < p) a[a.length] = Arr[ i ];
    else b[b.length] = Arr[ i ];
    }
    return QuickSort(a).concat( p,QuickSort(b) );
}

console.log(QuickSort(Arr));

console.log("task7")


import {passenger} from "./passenger.js";
import {ticket} from "./ticket.js";
import {train} from "./train.js";
import {soldTicket} from "./soldTicket.js";




//const passenger = new passenger("Ivan","001");
//const ticket = new ticket("001","10");
//const train = new train("Pechera","001");
//const soldTicket = new soldTicket("Ivan","001","001","20.02.2020");

const passengers = new Map();
const trains = new Map();
const soldTickets = new Map();

function addPassenger(name,passport) {
    const Passenger = new passenger(name,passport);
    passengers.set(passport,Passenger);
    return Passenger;
}

function editPassenger(passport, newName, newPassport){
    if(passengers.passport === passport)
        passengers.passport = newPassport;
    passengers.name = newName;

    // return console.log(passengers.get(passport))
}

function removePassenger(name, passport){
    delete passengers.delete(passport);
}

function findPassenger(name, passport){
    return console.log(passengers.get(passport))
}


function addTrain(trainName, trainRoute, trainNumber) {
    const Train = new train(trainName, trainRoute, trainNumber);
    trains.set(trainNumber, Train);
    return Train;
}

function editTrain(trainName, trainRoute, trainNumber){

}

function removeTrain(trainName, trainRoute, trainNumber){
    delete trains.delete(trainNumber);
}

function findTrain(trainName, trainRoute, trainNumber){
    return console.log(trains.get(trainNumber))
}

function buyTicket(passenger,train,ticket){
    // const Ticket = new ticket(name, trainNumber, ticket);
    const SoldTicket = new soldTicket(passenger,train,ticket,new Date());
    // const Ticket = new ticket('001', '100');
    soldTickets.set(passenger,SoldTicket);
    return SoldTicket;
}

function editTicket(passenger,train,ticket){
    // const Ticket = new ticket(name, trainNumber, ticket);
    const SoldTicket = new soldTicket(passenger,train,ticket,new Date());
    // const Ticket = new ticket('001', '100');
    soldTickets.set(passenger,SoldTicket);
    return SoldTicket;
}
function MostBoughtTickets(soldTickets)
{
    soldTickets.forEach(logMapElements)
}
function logMapElements(value, key, map) {
    console.log("m[" + key + "] = " + value);
}
 addPassenger("Ivan","001");
 //editPassenger("Ivan","001", "Ivanchik","002");

/*
addPassenger("Ivan","001", "Ivanchik","002");
addPassenger("Ivanchik","002");
addPassenger("Ivanchek","003");
addPassenger("Ivano","004");
addPassenger("Ivaner","005");
editPassenger();
removePassenger("Ivan","001");
findPassenger("Tint","002");
*/
 addTrain("Vitalik", "Lviv-Kyiv", "001");
// addTrain("Tint", "Lviv-Odesa", "002");
// editTrain();
// removeTrain("Vitalik", "Lviv-Odesa", "002");
// removeTrain("Tint", "Lviv-Kyiv", "001");
//
findTrain("Vitalik", "Lviv-Kyiv", "001");
// addPassenger("Tint","003");

let ticketLvivOdesa = new ticket('001','100');
let ticketLvivKyiv = new ticket('002','50');
let ticketOdesaLviv = new ticket('003','150');
let ticketKyivLviv = new ticket('004','100');
let ticketKyivOdesa = new ticket('005','50');
let ticketOdesaKyiv = new ticket('001','100');


buyTicket("Anatoliy","001", ticketLvivKyiv);
buyTicket("Vitalik","001", ticketLvivKyiv);
buyTicket("Vita","001", ticketOdesaLviv);
//editTicket("Ivan","002",ticketLvivOdesa);
// console.log(passengers);
// console.log(trains);


console.log(soldTickets);
