//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code

// Ajout d'un événement keypress à l'élément #f1 dans le conteneur #ce
$('#ce #f1').on('keypress', event => {
    // Affiche l'objet event dans la console pour le débogage
    console.log(event);

    // Vérifie si la touche pressée est un caractère numérique
    if ($.isNumeric(event.key)) {
        // Affiche le charCode de l'événement dans l'élément #out dans #ce
        $('#ce #out').text(event.charCode);
    } else {
        // Empêche la saisie si la touche n'est pas un caractère numérique
        event.preventDefault();
    }
});

// Ajout d'un événement keypress à l'élément #f2 dans le conteneur #ce
$('#ce #f2').on('keypress', event => {
    // Affiche l'objet event dans la console pour le débogage
    console.log(event);

    // Récupère le charCode de l'événement
    let charCode = event.charCode;

    // Vérifie si la touche pressée n'est pas une lettre (majuscule ou minuscule)
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
        // Empêche la saisie si la touche n'est pas une lettre
        event.preventDefault();
    }

    // Obtient la longueur actuelle de la saisie dans #f2
    // La raison de l'ajout du "1" c'est que cette méthode se déclanche avant le passage de l'événement
    // a #f2
    let inputLength = $('#ce #f2').val().length + 1;

    // Vérifie si la longueur de la saisie est un multiple de 3
    if (inputLength % 3 === 0) {
        // Affiche le charCode de l'événement dans l'élément #out dans #ce
        $('#ce #out').text(event.charCode);
    }
});