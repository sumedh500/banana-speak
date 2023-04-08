var btntranslate= document.querySelector("#btn-translate")
var input=document.querySelector("#input-txt") 
var output=document.querySelector("#output")
var serverURL='https://api.funtranslations.com/translate/minion.json'
    function getTransectionalURL(text){
        return serverURL +"?"+"text="+text
    }
    function errHandler(){
        alert("someThing went Wrong")
    }
    btntranslate.addEventListener("click",function clickEventHandler(){
           fetch(getTransectionalURL(input.value))
           .then(res=>res.json())
           .then(res=>{
            console.log(res.contents.translated)
            var converted=res.contents.translated
            output.innerText=converted
        })
    })

