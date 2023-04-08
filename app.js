var btntranslate= document.querySelector("#btn-translate")
var input=document.querySelector("#input-txt") 
var output=document.querySelector("#output")
    btntranslate.addEventListener("click",function clickEventHandler(){
        output.innerText="default"+input.value;
        console.log("click",input.value)
    })

