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

document.querySelector(".popUpContainer").addEventListener("click", hidePopUp)

// Map

let map;

async function initMap() {
  const position = { lat: -26.652, lng: 153.082 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Maroochydore",
  });
}

initMap();
