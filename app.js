const main = document.querySelector(".main")
const img = document.querySelector(".gif");
const h1 =document.querySelector("h1");
function handleLoad(){
    let day = new Date ()
    if(day.getDay()===3){
      return
    } else {img.style.display="none";
    h1.innerText=""};

}
handleLoad()