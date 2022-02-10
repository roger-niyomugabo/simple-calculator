
// equal (output part)
let equal = document.getElementById("equal");
equal.addEventListener("click", function(){
   let result = eval(document.getElementById("display").value); 
   document.getElementById("display").value = result;
});   


// deleting part 

let erase =document.getElementById("clear");
erase.addEventListener('click', ()=>{
    let output= document.getElementById("display").value;
            output=output.substring(0,output.length-1);
           document.getElementById("display").value= output ;
})


// toggling buttons

const func=document.querySelector("#func");
const signs=document.querySelector("#signs");
const sin=document.getElementById("sin");
const plus=document.querySelector("#plus");
const cos=document.getElementById("cos");
const minus=document.querySelector("#minus");
const bracket= document.getElementById("bracket");
const star= document.getElementById("star");

    func.addEventListener('click',()=>{
            func.style.display="none";
            star.style.display="none";
            plus.style.display="none";
            minus.style.display="none";
            bracket.style.display="block";
            signs.style.display="block";
            sin.style.display="block";
            cos.style.display="block";
    })        
    signs.addEventListener('click',()=>{
        func.style.display="block";
        star.style.display="block";
        plus.style.display="block";
        minus.style.display="block";
        bracket.style.display="none";
        signs.style.display="none";
        sin.style.display="none";
        cos.style.display="none";
})        


// displaying to the screen

function screenDisplay(number){
        if(number=="-" && document.getElementById("display").value =="" ){
                document.getElementById("display").value="-";
        }
          else  if(number=="+" && document.getElementById("display").value =="" ){
                document.getElementById("display").value="";
        }
            else  if(number=="/" && document.getElementById("display").value =="" ){
                document.getElementById("display").value="";
        }
             else  if(number==")" && document.getElementById("display").value =="" ){
                document.getElementById("display").value="";
        }
              else   if(number=="*" && document.getElementById("display").value =="" ){
                document.getElementById("display").value="";
        }
                else{
                 document.getElementById("display").value+=number;
                  }  
}


function solve(value){
        screenDisplay(value);
}