(function () {
    const itemMapa = document.getElementById("map-canvas");
    let mapa = null;
    let BH = { lat: -19.9240, lng: -43.9920 };
    let SP ={ lat: -23.5435, lng: -46.6691 };
    let RJ = { lat: -22.9797, lng: -43.2375 };

    function iniciarMapa() {
        mapa = new google.maps.Map(itemMapa, {
            center: BH,
            zoom: 15,});
        new google.maps.Marker({
                position: BH,
                map: mapa,
                title: "UBS Belo Horizonte - Contato: Lucas",
                              });
        new google.maps.Marker({
                position: SP,
                map: mapa,
                title: "UBS São Paulo - Contato: Tadeu ",
                              });
        new google.maps.Marker({
                position: RJ,
                map: mapa,
                title: "UBS Rio de Janeiro - Contato: Paulo",
                              });
    }    
    window.initMap = iniciarMapa;    
})();


