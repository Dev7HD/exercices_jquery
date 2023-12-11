//  Chemin relatif : reponses/script-05.js

var total = 0; // Initialise une variable pour stocker le total

$('#ce table tbody tr').each(function(i){ // Parcourt chaque ligne du tableau dans l'élément avec l'ID 'ce'
    if(i !== 0 && i !== ($('#ce table tbody tr').length - 1)){ // Vérifie si l'index de la ligne n'est ni 0 ni la dernière ligne
        var currentRow=$(this).closest("tr"); // Sélectionne la ligne actuelle

        // Récupère le prix et la quantité de la colonne correspondante dans la ligne actuelle
        var price = currentRow.find('td:eq(1)').text(); // Récupère le prix de la deuxième colonne
        var qte = currentRow.find('td:eq(2)').text(); // Récupère la quantité de la troisième colonne

        // Calcule le sous-total (prix * quantité) et l'ajoute au total
        total += (parseFloat(price)) * (parseInt(qte));

        // Affiche le sous-total dans la quatrième colonne de la ligne actuelle
        currentRow.find('td:eq(3)').text((parseFloat(price)) * (parseInt(qte)));
    }
})

// Affiche le total calculé dans la dernière cellule de la dernière ligne du tableau dans l'élément avec l'ID 'ce'
$('#ce table tbody tr td:last').text(total);