//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json

//Question 1
// Crée un élément <pre> et l'ajoute à l'élément avec l'ID 'ce'
$('<pre></pre>').appendTo('#ce')

//Question 2
// Ajoute la classe 'language-javascript' à l'élément <pre> précédemment créé
$('#ce pre').addClass('language-javascript')

//Question 3
// Crée un élément <code> et l'ajoute à l'élément <pre> déjà présent dans l'élément avec l'ID 'ce'
$('<code></code>').appendTo('#ce pre')

//Question 4
// Effectue une requête AJAX pour récupérer des données depuis le fichier 'users.json'
$.ajax({
    url: './files/users.json', // Spécifie l'URL du fichier à charger
    dataType: 'text', // Indique le type de données attendu en réponse (ici du texte)
    success: function(data) { // Fonction exécutée en cas de succès de la requête

        //Question 5
        // Ajoute les données récupérées à l'élément <pre> déjà présent dans l'élément avec l'ID 'ce'
        $('#ce pre').append(data)

        //Question 6
        // Applique la coloration syntaxique à tout le contenu de l'élément <pre> en utilisant Prism.js
        Prism.highlightAll();
    },
    error: function(xhr, status, error) { // Fonction exécutée en cas d'erreur de la requête
        // Affiche dans la console un message d'erreur contenant des informations sur l'échec de la requête
        console.error('Erreur de requête :', status, error);
    }
});