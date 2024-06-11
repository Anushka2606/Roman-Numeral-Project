let convertBtn=document.querySelector("#convert-btn");
let msgContainer=document.querySelector("#output");
let input=document.querySelector("#number");


let convertToRoman=(inputValue)=>{
   const romanNumerals=[
       
       [1000, 'M'],
       [900, 'CM'],
       [500, 'D'],
       [400, 'CD'],
       [100, 'C'],
       [90, 'XC'],
       [50, 'L'],
       [40, 'XL'],
       [10, 'X'],
       [9, 'IX'],
       [5, 'V'],
       [4, 'IV'],
       [1, 'I'],

   ];

   let result='';
   for(const [value,symbol] of romanNumerals){
       while(inputValue>=value){
           result+=symbol;
           inputValue-=value;  
       }
   }

 console.log(result);
 msgContainer.innerText=result;
 msgContainer.classList.add("hide2");
   
}




let emptyValue=()=>{
    msgContainer.innerText="Please enter a valid number.";
 msgContainer.classList.add("hide");
}

let wrongInput=()=>{
     msgContainer.innerText="Please enter a number greater than or equal to 1.";
msgContainer.classList.add("hide");
}

let wrongValue=()=>{
         msgContainer.innerText="Please enter a number less than or equal to 3999.";
msgContainer.classList.add("hide");
}

convertBtn.addEventListener
("click",()=>{
    let inputValue=input.value;
console.log(inputValue);

if(inputValue==""){
   emptyValue();
}

else if(inputValue<1){
    wrongInput();
}

else if(inputValue>=4000){
   wrongValue();
}

else{
convertToRoman(inputValue);

}

});