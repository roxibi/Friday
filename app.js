const main = document.querySelector(".main")
const iframe = document.querySelector(".gif");
const h1 =document.querySelector("h1");
function handleLoad(){
    let day = new Date ()
    if(day.getDay()===3){
        h1.innerText="Yeah, Baby!"
        console.log("it's Friday")
      
    } else {iframe.style.display="none";};

}
handleLoad()