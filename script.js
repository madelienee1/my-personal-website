function letsConnectClick(event) {
    document.querySelector("div.popUp").classList.remove("hidden")
    document.querySelector("div.popUpContainer").classList.remove("hidden")
    
    console.log(event)
}


document.querySelector("button#letsConnect").addEventListener("click",letsConnectClick)


function hidePopUp(event) {
    document.querySelector("div.popUpContainer").classList.add("hidden")
    console.log("hello")
}

document.querySelector(".popUpContainer").addEventListener("click",hidePopUp)
