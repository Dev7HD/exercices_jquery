//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

//Question 1
var users; // Déclare une variable pour stocker les données des utilisateurs

$.ajax({
    url: './files/users.json', // Spécifie l'URL du fichier à charger
    dataType: 'text', // Indique le type de données attendu en réponse (ici du texte)
    success: function(data) { // Fonction exécutée en cas de succès de la requête

        users = JSON.parse(data); // Convertit les données textuelles en objet JSON et les assigne à la variable 'users'

    },
    error: function(xhr, status, error) { // Fonction exécutée en cas d'erreur de la requête
        // Affiche dans la console un message d'erreur contenant des informations sur l'échec de la requête
        console.error('Erreur de requête :', status, error);
    }
});

//Question 2 + 3
// Crée un tableau HTML avec des en-têtes pour les emails et les tokens, puis l'ajoute à l'élément avec l'ID 'ce'
$('<table border="1" cellpadding="10px"><thead><tr><th>Email</th><th>Token</th></tr></thead><tbody></tbody></table>').appendTo($('#ce'));

//Question 4
// Parcourt chaque utilisateur et crée une ligne de tableau pour afficher l'email et le token dans le tableau HTML
$(users).each((i) => {
    let tr = $('<tr></tr>'); // Crée une ligne de tableau

    // Crée et ajoute une cellule de tableau contenant l'email de l'utilisateur actuel
    $('<td></td>').text(users[i].email).appendTo($(tr));

    // Crée et ajoute une cellule de tableau contenant le token de l'utilisateur actuel
    $('<td></td>').text(users[i].token).appendTo($(tr));

    // Ajoute la ligne de tableau au corps du tableau HTML
    $(tr).appendTo($('tbody'));
});