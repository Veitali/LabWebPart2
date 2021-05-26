// task7
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
    const Passenger = new passenger(newName,newPassport);
    passengers.set(passport,Passenger);
    return Passenger;
    // if(passengers.passport === passport)
    //     passengers.passport = newPassport;
    //     passengers.name = newName;

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
    const SoldTicket = new soldTicket(passenger,train,ticket,new Date());
    soldTickets.set(passenger,SoldTicket);
    return SoldTicket;
}

function editTicket(passenger,train,ticket){
    const SoldTicket = new soldTicket(passenger,train,ticket,new Date());
    soldTickets.set(passenger,SoldTicket);
    return SoldTicket;
}

function removeTicket(passenger){
    delete soldTickets.delete(passenger);
}

addPassenger("Ivan", "001");
console.log(passengers);

editPassenger("001", "Ivanchik", "002");
console.log(passengers);


/*
addPassenger("Ivan","001", "Ivanchik","002");
addPassenger("Ivanchik","002");
addPassenger("Ivanchek","003");
addPassenger("Ivano","004");
addPassenger("Ivaner","005");
editPassenger();
removePassenger("Ivan","001");
findPassenger("Ivanchik","002");
*/
// addTrain("Pechera", "Lviv-Kyiv", "001");
// addTrain("Pechorka", "Lviv-Odesa", "002");
// editTrain();
// removeTrain("Pechorka", "Lviv-Odesa", "002");
// removeTrain("Pechora", "Lviv-Kyiv", "001");
//
// findTrain("Pechorka", "Lviv-Odesa", "002");
// addPassenger("Ivanchek","003");

let ticketLvivOdesa = new ticket('001','100');
let ticketLvivKyiv = new ticket('002','50');
let ticketOdesaLviv = new ticket('003','150');
let ticketKyivLviv = new ticket('004','100');
let ticketKyivOdesa = new ticket('005','50');
let ticketOdesaKyiv = new ticket('001','100');

// buyTicket("Ivan","001", ticketLvivKyiv);
// console.log(soldTickets);

// editTicket("Ivan","002",ticketLvivOdesa);
// console.log(passengers);
// console.log(trains);
// console.log(soldTickets);
// removeTicket("Ivan","001", ticketLvivKyiv);
// console.log(soldTickets);
