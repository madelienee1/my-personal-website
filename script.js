
//refactor code to store element nodes as variables.

function letsConnectClick(event) {
    document.querySelector("div.popUp").classList.remove("hidden")
    document.querySelector("div.popUpContainer").classList.remove("hidden")
    
    console.log(event)
}

//this is a queryselector, it targets the button with the id of letsConnect, it then adds an event listener that "listens" or "watches" for 
//when the button is clicked.
//when the button is clicked it then fires the function we have created and passed as the second argument to the event listener.

document.querySelector("button#letsConnect").addEventListener("click",letsConnectClick)


function hidePopUp(event) {
    document.querySelector("div.popUpContainer").classList.add("hidden")
    console.log("hello")
}


document.querySelector(".popUpContainer").addEventListener("click",hidePopUp)
