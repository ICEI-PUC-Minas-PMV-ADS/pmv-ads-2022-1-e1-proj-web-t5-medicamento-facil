(function () {
    const itemMapa = document.getElementById("mapa-medicamento");
    let mapa = null;

    function iniciarMapa() {
        mapa = new google.maps.Map(itemMapa, {
            center: { lat: -19.912998, lng: -43.940933 },
            zoom: 8,
        });
    }    
    window.initMap = iniciarMapa;    
})();