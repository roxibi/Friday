const main = document.querySelector(".main")
const img = document.querySelector(".gif");
const imgNo = document.querySelector(".no-gif")
const h1 =document.querySelector("h1");
function handleLoad(){
    let day = new Date ()
    if(day.getDay()===5){imgNo.style.display="none";
      return
    } else {img.style.display="none";
    };

}
handleLoad()