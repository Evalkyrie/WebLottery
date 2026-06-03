// Variables for Lottery Numbers, Powerball, Random Stuff
const ticketPrices = [1, 3, 5];
const ticketPicks = [3, 5, 6];
const ticketRanges = [20, 50, 60];

let pickList = [];
let results = [];

var picklength;
var won = 0;
var loss = 0;
var spendings = 0;
var winnings = 0;
var ticket = 0;
var powerball = false;
var x = 5;

// Variables for the UI Elements (radio buttons, textboxes)
var picks = document.getElementById('picks');
var result = document.getElementById("result");
var outcome = document.getElementById("outcome");
var basic = document.getElementById("Basic");
var standard = document.getElementById("Standard");
var mega = document.getElementById("Mega");
var power = document.getElementById("Powerball");
var pbPick = document.getElementById("pbPick");

document.getElementById('PLAY').addEventListener('click', () => {
    won = 0;
    loss = 0;
    pickList = picks.value.split(' ');
    picklength = Object.keys(pickList).length;
    //alert('I got clicked!');
    picks.style.color = 'red';
    for (let i = 0; i < ticketPicks[ticket]; i++) {
        results[i] = Math.floor(Math.random() * (ticketRanges[ticket] - 1 + 1) + 1).toString();
        // alert("hello")
        for (let j = 0; j < ticketPicks[ticket] && j < picklength; j++) {
            if (pickList[j] == results[i]) {
                won += ticketPrices[ticket];
            }
            // alert("comparing " + pickList[j] + " with " + results[i]);
        }
    }
    winnings += won;
    loss = ticketPrices[ticket];
    spendings += loss;
    result.innerHTML = results.join(" ");

    if (won > loss)
    {
        outcome.innerHTML = "You Won $" + (won - loss) + "!";
    }
    else if (won == loss)
    {
        outcome.innerHTML = "You Broke Even!";
    }
    else
    {
        outcome.innerHTML = "You Lost $" + loss;
    }

})

document.getElementById('ticketType').addEventListener('click', () => { 
    getTicket();
})

var radios = document.forms["ticketType"].elements["ticket"];
function getTicket() {
    if (basic.checked) {
        picks.setAttribute('placeholder', 'Basic - Pick 3');
        ticket = 0;
    } else if (standard.checked) {
        picks.setAttribute('placeholder', 'Standard - Pick 5');
        ticket = 1;
    } else if (mega.checked) {
        picks.setAttribute('placeholder', 'Mega - Pick 6');
        ticket = 2;
    }
    if (power.checked) {
        pbPick.setAttribute('placeholder', "Powerball");
        pbPick.removeAttribute('readonly');
        pbPick.removeAttribute('hidden');
        powerball = true;
    } else if (!power.checked) {
        pbPick.setAttribute('placeholder', '');
        pbPick.setAttribute('readonly', true);
        pbPick.setAttribute('hidden', true);
        pbPick.value = '';
        powerball = false;
    }
}
