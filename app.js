const main = document.querySelector(".main")
const iframe=`<iframe width="560" height="315" src="https://www.youtube.com/embed/1TewCPi92ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
function handleLoad(){
    let day = new Date ()
    if(day.getDay()===5){
        main.innerHTML=iframe;
    }

}
handleLoad()