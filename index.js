var latitud = 0, longitud = 0;

  function initMap() {
    var location = { lat: latitud, lng: longitud };

    if(latitud == 0 && longitud == 0) 
         location = { lat: 47.557489, lng: 10.749442 };
 
      const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Ubicación"
    });

  }

  function leerDatos() {
      document.getElementById("web").href = 'https://github.com/acalvom';
      document.getElementById("direccion").value = 'Neuschwanstein, Baviera, Alemania';
      document.getElementById("telefono").value = 'XXXXXXXXXX';
      document.getElementById("email").value = 'https://github.com/acalvom';
} 

function coordenadas() {
    latitud = parseFloat(document.getElementById("latitud").value);
    longitud = parseFloat(document.getElementById("longitud").value);
    initMap();
}

window.onload = function () {
    document.getElementById('btn_enviar').onclick = coordenadas;
}
