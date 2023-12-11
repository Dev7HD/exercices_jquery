//  Chemin relatif : ../reponses/script-09.js
//  Chemin relatif : ../files/usa.json
var usa = [];
// USING JSON
$.ajax({
    url: './files/usa.json',
    dataType: 'json',
    success: function (data) {
        usa = data
        usa.forEach(e => {
            $('<option></option>').text(e.state).appendTo('#la')
        })
    },
    error: function(xhr, status, error) { // Fonction exécutée en cas d'erreur de la requête
        // Affiche dans la console un message d'erreur contenant des informations sur l'échec de la requête
        console.error('Erreur de requête :', status, error);
    }
})

$('#la').change(function() {
    var selectedState = $(this).val();
    $('#lb').html('<option value="">Sélectionner une ville</option>')
    var index = usa.map(e => e.state).indexOf(selectedState)
    usa[index].cities.forEach((city) => {
        $('<option></option>').text(city).appendTo('#lb')
    })
});
// USING XML FILE

$.ajax({
    type: "GET",
    url: './files/usa.xml',
    dataType: 'xml',
    success: function (data) {
        $(data).find('state').each(function() {
            var stateName = $(this).attr('name');
            var cities = [];
            $(this).find('city').each(function() {
                cities.push($(this).text());
            });
            usa.push({state: stateName, cities: cities})
        });
        usa.forEach(e => {
            $('<option></option>').text(e.state).appendTo($('#ce #la'))
        })
    }, error: function(xhr, status, error) { // Fonction exécutée en cas d'erreur de la requête
        // Affiche dans la console un message d'erreur contenant des informations sur l'échec de la requête
        console.error('Erreur de requête :', status, error);
    }
})

$('#la').change(function() {
    var selectedState = $(this).val();
    $('#ce #lb').html('<option value="">Sélectionner une ville</option>')
    var index = usa.map(e => e.state).indexOf(selectedState)
    usa[index].cities.forEach((city) => {
        $('<option></option>').text(city).appendTo($('#ce #lb'))
    })
});