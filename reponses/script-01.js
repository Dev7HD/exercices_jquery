//  chemin relatif : reponses/script-01.js
//

// Question 1
// Change la couleur du premier div à l'intérieur de l'élément avec l'ID "ce" en rouge.
$('#ce div:first').css('color','red');

// Question 2
// Clone le premier div à l'intérieur de l'élément avec l'ID "ce" et l'ajoute à la fin de cet élément.
$('#ce div:first').clone().appendTo('#ce');

// Question 3
// Déplace le dernier div à l'intérieur de l'élément avec l'ID "ce" au début de cet élément.
$('#ce div:last').prependTo('#ce');

// Question 4
// Crée un nouvel élément div et l'ajoute à la fin de l'élément avec l'ID "ce".
$('<div></div>').appendTo('#ce');

// Modifie le texte du dernier div à l'intérieur de l'élément avec l'ID "ce".
$('#ce div:last').text('Le nombre total des "div" de la liste = ' + $('#ce div').length);

// Question 5
// Attend que le document soit prêt avant d'exécuter la fonction.
$(document).ready( function() {
    // Pour chaque div à l'intérieur de l'élément avec l'ID "ce", exécute une fonction.
    $('#ce div').each( function(index) {
        // Modifie le texte de l'élément actuel pour inclure son numéro d'ordre.
        $(this).text( $(this).text() + ' | Numéro d\'ordre: ' + (index + 1) );
    });
});

