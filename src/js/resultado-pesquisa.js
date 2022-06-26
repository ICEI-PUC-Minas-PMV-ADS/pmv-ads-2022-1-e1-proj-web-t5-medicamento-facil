(function () {
    const itemMapa = document.getElementById("map-canvas");
    let mapa = null;
    let BH = { lat: -19.9240, lng: -43.9920 };
    let SP = { lat: -23.5435, lng: -46.6691 };
    let RJ = { lat: -22.9797, lng: -43.2375 };


    function iniciarMapa() {
        mapa = new google.maps.Map(itemMapa, {
            center: BH,
            zoom: 15,
        });
        
    }
    

    function atualiza_resultado() {
        //atualizando mapa
        let informacaoubs;
        let farmaceutico;
        let endereco = sessionStorage.getItem('localizacao-usuario');
        let latitude_endereco = endereco.substring(1, 12);
        let longitude_endereco = endereco.substring(14, 25);
        let R = 6371; // Raio da Terra em KM
                //Calculo distancia UBS de BH
        let dLat = deg2rad(latitude_endereco - "-19.9240");
        let dLon = deg2rad(longitude_endereco - "-43.9920");
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad("-19.9240")) * Math.cos(deg2rad(latitude_endereco)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        let b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let DBH = R * b;

        //Calculo distancia UBS de SP
        dLat = deg2rad(latitude_endereco - "-23.5435");
        dLon = deg2rad(longitude_endereco - "-46.6691");
        a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad("-23.5435")) * Math.cos(deg2rad(latitude_endereco)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let DSP = R * b;

        //Calculo distancia UBS do RJ
        dLat = deg2rad(latitude_endereco - "-22.9797");
        dLon = deg2rad(longitude_endereco - "-43.2375");
        a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad("-22.9797")) * Math.cos(deg2rad(latitude_endereco)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let DRJ = R * b;

        //Pegando a menor distancia
        let menor = Math.min(DBH, DSP, DRJ);
        //setando a UBS mais próxima
        switch (menor) {
            case menor = DBH:
                mapa.setCenter(BH);
                mapa.setZoom(16);
                marker = new google.maps.Marker({
                    map: mapa,
                    position: BH
                });
                informacaoubs = "UBS mais próxima: Belo Horizonte - R. Dom José Gaspar, 500 - Telefone: (31) 3319-4444";
                farmaceutico = "Lucas Cantuaria";
                break;

            case menor = DSP:
                mapa.setCenter(SP);
                mapa.setZoom(16);
                marker = new google.maps.Marker({
                    map: mapa,
                    position: SP
                });
                informacaoubs = "UBS mais próxima: São Paulo - R. Monte Alegre, 984 - Telefone:(11) 36708322";
                farmaceutico = "Tadeu Vieira";
                break;

            case menor = DRJ:
                mapa.setCenter(RJ);
                mapa.setZoom(16);
                marker = new google.maps.Marker({
                    map: mapa,
                    position: RJ
                });
                informacaoubs = "UBS mais próxima - Terminal da PUC - Gávea - Telefone:(21) 35271001";
                farmaceutico = "Paulo Alkmin";
                break;
        }
        //Atualizando Campos
        let url_string = window.location.href;
        let url = new URL(url_string);
        let c = url.searchParams.get("ac-medicamento");
        let remedio = c;
        document.getElementById("medicamento-pesquisado").value = c;
        document.getElementById("informacao").value = informacaoubs;
        document.getElementById("responsavel").value = farmaceutico;
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let mes = today.getMonth() + 1;
        document.getElementById("data-disponivel").value = today.getDate() + "/" + mes + "/" + today.getFullYear();

        let labelRes = document.querySelector('#labelRes');
        labelRes.setAttribute('style', 'color: red');
        labelRes.innerHTML = 'Medicamento não encontrado!';
        document.getElementById("dosagens").value = "ND";
        let achou = false;

        for (i = 0; i < db.data.length; i++) {

            let medicamentos = db.data[i];

            if (medicamentos.nomeMedicamento.toUpperCase() == remedio.toString().toUpperCase()) {
                achou = true;
                if (medicamentos.disponibilidade.toUpperCase() == "SIM") {
                    document.getElementById("dosagens").value = medicamentos.dosagem.toUpperCase();
                } else {

                    document.getElementById("dosagens").value = "ND";
                    document.getElementById("data-disponivel").value = "Indisponível";
                    alert("Medicamento indisponível no momento.");
                }
            }


        }
        if (achou) {
            labelRes.setAttribute('style', 'color: green');
            labelRes.innerHTML = 'Medicamento encontrado!';
        }
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    window.initMap = iniciarMapa;
    window.onload = atualiza_resultado;
    
})();


