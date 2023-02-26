'use strict';

const checkBtn = document.getElementById('check-btn');
const emailInput = document.getElementById('email');


const emailVerified  = ["test@gmail.com","boolean@gmail.com", "welovehtml@gmail.com", "welovecss@gmail.com", "welovejs@gmail.com"];

//console.log(emailVerified);

checkBtn.addEventListener('click',
function(){
    
    for(let i = 0; i < emailVerified.length; i ++) {
        //console.log(i);
        if (emailVerified[i] === emailInput.value){
            alert("mail valida");
            console.log(i);
            }
        else{
            alert("mail NON valida");
        }
    }
})

console.log(emailInput.value);