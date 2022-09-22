const phoneMinus= document.getElementById("phoneMinus");
const phoneInput= document.getElementById("phoneInput");
const phonePlus= document.getElementById("phonePlus");
const caseMinus= document.getElementById("caseMinus");
const caseInput= document.getElementById("caseInput");
const casePlus= document.getElementById("casePlus");

handleNumber(phoneMinus, phoneInput, -1,-1219);
handleNumber(phonePlus, phoneInput, 1, 1219);
handleNumber(caseMinus, caseInput, -1, -59);
handleNumber(casePlus, caseInput, 1, 59);
function handleNumber(countId, inputId, multiplier, countAmount){
    countId.addEventListener("click", function(){
        inputId.value= (parseFloat(inputId.value))+(multiplier);
        const price= parseFloat(document.getElementById("amount").innerText);
        document.getElementById("amount").innerText= price + countAmount;
        document.getElementById("vat").innerText= (price + countAmount)*2/100;
        document.getElementById("total").innerText= (price + countAmount) + (price + countAmount)*2/100;
        const phoneDisplay= document.getElementById("phoneDisplay");
        const caseDisplay= document.getElementById("caseDisplay");
        display(phoneInput, phoneDisplay);
        display(caseInput, caseDisplay);
        function display(inputId, displayId) {
            if(parseFloat(inputId.value) < 1) {
                displayId.style.display= "none";
            }
            else{
                displayId.style.display= "block";
            }
        }
    });
}

