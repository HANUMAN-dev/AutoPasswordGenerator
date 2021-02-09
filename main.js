const myForm = document.getElementById('myForm');
const inputField=document.getElementById('inputField');
const rangeField = document.getElementById('rangeField');
const numberField = document.getElementById('numberField');
const checkUppercase = document.getElementById('checkUppercase');
const checkNumber = document.getElementById('checkNumber');
const checkSymbol = document.getElementById('checkSymbol');


rangeField.addEventListener('change',commonValues);
numberField.addEventListener('change',commonValues)
function commonValues(e){
console.log(e);
    rangeField.value=e.target.value;
    numberField.value=e.target.value;

}


onlyuppercase=initializeArray(65,90);
onlylowercase=initializeArray(97,122);
onlynumber=initializeArray(48,57);
onlysymbol=initializeArray(33,47);

function initializeArray(min,max){
    arr=[];
    for(var i=min;i<=max;i++){
        arr.push(String.fromCharCode(i));
    }
    return arr;
}
myForm.addEventListener('submit',function(ee){
    ee.preventDefault;
   var results=[];
    mergeallifchecked=onlylowercase;

    
    if(checkUppercase.checked){
        mergeallifchecked=mergeallifchecked.concat(onlyuppercase);
    }
    if(checkNumber.checked){
       mergeallifchecked=mergeallifchecked.concat(onlylowercase);
    }
    if(checkSymbol.checked){
        mergeallifchecked=mergeallifchecked.concat(onlynumber);
    }

for(var i=0;i<numberField.value;i++){
results+=mergeallifchecked[Math.floor(Math.random()*mergeallifchecked.length)];

}
console.log(results);
console.log(results.length);
inputField.value=results;
});
