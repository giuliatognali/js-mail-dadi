'use strict';
//definizione e assegnazioni variabili 
const emailInput = document.getElementById('email');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');

//definizione e assegnazioni variabili di messaggio al click
const validMessage = document.getElementById('valid-email');
const invalidMessage = document.getElementById('invalid-email');

//array email
const emailVerified = ["giuliatoti@hotmail.it", "test@gmail.com", "boolean@gmail.com", "welovehtml@gmail.com", "welovecss@gmail.com", "welovejs@gmail.com"];

//console.log(emailVerified);

checkBtn.addEventListener('click',
    function () {

        for (let i = 0; i < emailVerified.length; i++) {

            const emailInputValue = emailInput.value

            if (emailVerified[i] === emailInputValue) {
                validMessage.classList.add('show');
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