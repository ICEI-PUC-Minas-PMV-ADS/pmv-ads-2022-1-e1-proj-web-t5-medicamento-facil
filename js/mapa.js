const itemMapa = document.getElementById("mapa-medicamento");
let mapa = null;

function iniciarMapa() {
    mapa = new google.maps.Map(itemMapa, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = iniciarMapa;