let endereco_google;
function initAutocomplete() {
    endereco_google = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['address'],
            componentRestrictions: { 'country': ['BR'] },
            fields: ['address_components']
        });
}

