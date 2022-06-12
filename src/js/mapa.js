(function () {
    const itemMapa = document.getElementById("map-canvas");
    let mapa = null;
    let marker = null;
    let geocoder =null;
    let coordenadas = {lat: -15.8154861, lng: -47.8941659};
    let urlAtual = window.location.href;
    let urlClass = new URL(urlAtual);
    let valor = urlClass.search;
     
    
    function iniciarMapa() {
        mapa = new google.maps.Map(itemMapa, {
            center: coordenadas,
            zoom: 4,});
            geocoder = new google.maps.Geocoder();
        window.onload = geocodeAddress(geocoder);
               
    }

    function geocodeAddress(geocoder) {
        let seminterrogacao = valor.replace ("?","");
        geocoder.geocode({'address': seminterrogacao}, function(results, status) 
        {
          if (status === 'OK') {
              mapa.setCenter(results[0].geometry.location);
              mapa.setZoom(16);
              marker = new google.maps.Marker({
              map: mapa,
              position: results[0].geometry.location
            });
          } else {
            alert('Algo deu errado: ' + status + ' Tente Novamente!');
            window.location.href = "index.html";
          }
        });
      }

    window.initMap = iniciarMapa;

    

    


})();