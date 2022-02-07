
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
    return document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num==="-"){
        return "";
    }
    let n=Number(num);
    let value=n.toLocaleString("comma");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

const operator=document.querySelectorAll(".operator");
operator.forEach(button =>{
    button.addEventListener('click', ()=>{

        if(button.innerText==="delete"){
            let output=reverseNumberFormat(getOutput()).toString();
            
            if(output)
            {
                output=output.substring(0,output.length-1);
            printOutput(output);
            }

            let history=getHistory();
            if(history){
                history=history.substring(0,history.length-1);
                printHistory(history);
            }

        }
    
        else{
            let history=getHistory();
            let output=getOutput();
            if(output=="" && history!=""){

                if(isNaN(history[history.length-1])){
                    history=history.substring(0,history.length-1);
                }
            }


            if(output!="" || history!=""){

                output = output==""? output:reverseNumberFormat(output);
                history+=output;
                if(button.innerText==="="){
                    let result=eval(history);
                    printOutput(result);
                    printHistory("");     
                }
                else{
                    history+=button.innerText;
                    printHistory(history);
                    printOutput("");
                }
                

                if(button.innerText==="sin"){
                    let sin;
                    sin=Math.sin(output * Math.PI / 180.0);
                    printOutput(sin);
                    printHistory("");
                }


                if(button.innerText==="cos"){
                    let cos;
                    cos=Math.cos(output * Math.PI / 180.0);
                    printOutput(cos);
                    printHistory("");
                }
            }
        }
  })
})

const number=document.querySelectorAll(".number");
number.forEach(button=>{
    button.addEventListener('click', ()=>{
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output+=button.innerText;
            getOutput();
            printOutput(output);
           // printOutput("");
        }
     
    })
})


const func=document.querySelector(".operation");
const sing=document.querySelector(".operationsign");
const special=document.querySelector(".special");
const sin=document.getElementById("sin");
const plus=document.querySelector("#plus");
const cos=document.getElementById("cos");
const minus=document.querySelector("#minus");
const button=document.querySelector("button");


if(func.innerText==="func"){
    func.addEventListener('click',()=>{
        
        if(button.classList.contains("special")){
            plus.classList.remove("special");
            minus.classList.remove("special");
            sing.style.display="none";
            sin.style.display="none";
            cos.style.display="none";
        }
        else{
            plus.classList.add("special");
            minus.classList.add("special");
            func.style.display="none";
            sing.style.display="block";
            sin.style.display="block";
            cos.style.display="block";
        }
    })
}

sing.style.display="none";
if(sing.innerText==="signs"){

    sing.addEventListener('click', ()=>{
        if(button.classList.contains("special")){
            plus.classList.add("special");
            minus.classList.add("special");
            sing.classList.remove("special");
            sin.style.display="block";
            cos.style.display="block";
        }
        else{
            plus.classList.remove("special");
            minus.classList.remove("special");
            sing.style.display="none";
            func.style.display="block";
            sin.style.display="none";
            cos.style.display="none";
        }
    })
}