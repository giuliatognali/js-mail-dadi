'use strict';
//definizione e assegnazioni variabili input e bottoni 
const emailInput = document.getElementById('email');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');

//definizione e assegnazioni variabili di messaggio al click
const validMessage = document.getElementById('valid-email');
const invalidMessage = document.getElementById('invalid-email');

//definizione e assegnazioni variabili gioco dadi
const diceGame = document.querySelector('.container-game');
const userNumber = document.getElementById('user-result');
const cpuNumber = document.getElementById('computer-result');
const playBtn = document.getElementById('play');

const winner = document.querySelector('.win');
const loser = document.querySelector('.lose');
const draw = document.querySelector('.draw');

//array email
const emailVerified = ["giuliatoti@hotmail.it", "test@gmail.com", "boolean@gmail.com", "welovehtml@gmail.com", "welovecss@gmail.com", "welovejs@gmail.com"];

//console.log(emailVerified);

checkBtn.addEventListener('click',
    function () {

        for (let i = 0; i < emailVerified.length; i++) {

            const emailInputValue = emailInput.value

            if (emailVerified[i] === emailInputValue) {
                validMessage.classList.add('show');
                diceGame.classList.add('show');
                break;

                //inserire da mostrare il div con il gioco
            }
            else if (emailVerified[i] !== emailInputValue) {
                invalidMessage.classList.add('show');
            }
        }
    })

resetBtn.addEventListener('click',
function() {

    validMessage.classList.remove('show');
    invalidMessage.classList.remove('show');
    emailInput.value = "";
})


//inizio del gioco al click

playBtn.addEventListener('click',
    function () {
        //alert('hai cliccato');
        
        userNumber.innerHTML = Math.floor(Math.random() * 6) + 1;    
        cpuNumber.innerHTML = Math.floor(Math.random() * 6) + 1;
        
        const userValue = userNumber.innerHTML;
        const cpuValue = cpuNumber.innerHTML;

        console.log(userValue, cpuValue);

        if (userValue > cpuValue){
            console.log('hai vinto')
            winner.classList.add('show');
            loser.classList.remove('show');
            draw.classList.remove('show');
        }
        else if(userValue < cpuValue){
            console.log('hai perso')
            loser.classList.add('show');
            winner.classList.remove('show');
            draw.classList.remove('show');
        }
        else if (userValue === cpuValue){
            console.log('parità')
            draw.classList.add('show');
            winner.classList.remove('show');
            loser.classList.remove('show');
        }
    })

