const phoneMinus= document.getElementById("phoneMinus");
const phoneInput= document.getElementById("phoneInput");
const phonePlus= document.getElementById("phonePlus");
const phoneTotal= document.getElementById("phoneTotal");
const caseMinus= document.getElementById("caseMinus");
const caseInput= document.getElementById("caseInput");
const casePlus= document.getElementById("casePlus");
const caseTotal= document.getElementById("caseTotal");

handleNumber(phoneMinus, phoneTotal, phoneInput, -1,1219);
handleNumber(phonePlus, phoneTotal, phoneInput, 1, 1219);
handleNumber(caseMinus, caseTotal, caseInput, -1, 59);
handleNumber(casePlus, caseTotal, caseInput, 1, 59);
function handleNumber(countId, itemTotal, inputId, multiplier, countAmount){
    countId.addEventListener("click", function(){
        inputId.value= (parseFloat(inputId.value))+(multiplier);
        const price= parseFloat(document.getElementById("amount").innerText);
        itemTotal.innerText= countAmount*(parseFloat(inputId.value));
        document.getElementById("amount").innerText= price + multiplier*countAmount;
        document.getElementById("vat").innerText= (price + multiplier*countAmount)*2/100;
        document.getElementById("total").innerText= (price + multiplier*countAmount) + (price + multiplier*countAmount)*2/100;
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

