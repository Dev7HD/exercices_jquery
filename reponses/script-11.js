// La fonction damier crée un damier en utilisant la valeur fournie de 'n' ou une valeur par défaut de 8 si aucune valeur n'est spécifiée.

const damier = (n) => {

    // Vérifie si 'n' est indéfini ou une chaîne vide, utilise 8 par défaut sinon.
    if (n === undefined || n === '') {
        n = 8;
    } else {
        // Convertit 'n' en un nombre entier.
        n = parseInt(n);
        // Vérifie si 'n' est inférieur ou égal à 0 ou s'il n'est pas un nombre.
        if (n <= 0 || isNaN(n)) {
            alert('Veuillez insérer une valeur de n valide');
        }
    }

    // La fonction damierConstruct génère le damier avec une taille de 'n'.
    const damierConstruct = (n) => {
        // Sélectionne l'élément avec la classe '.box'.
        const $box = $('#ce .box');
        let $damierBox = $('<span></span>');

        // Définit la disposition du damier en utilisant CSS Grid.
        $box.css({
            'display': 'grid',
            'grid-template-columns': 'repeat(' + n + ', 1fr)',
            'grid-template-rows': 'repeat(' + n + ', 1fr)',
        });

        // Crée le damier en alternant les couleurs des cases en fonction de 'n'.
        if (n % 2 === 0) {
            for (let i = 0; i < n ; i++) {
                for (let j = 0; j < n; j++) {
                    if (i % 2 === 0) {
                        if (j % 2 === 0) {
                            $damierBox.css('background-color', 'black');
                        } else {
                            $damierBox.css('background-color', 'white');
                        }
                    } else {
                        if (j % 2 === 0) {
                            $damierBox.css('background-color', 'white');
                        } else {
                            $damierBox.css('background-color', 'black');
                        }
                    }
                    // Ajoute chaque case au damier.
                    $damierBox.clone().appendTo($box);
                }
            }
        } else {
            // Crée le damier pour les valeurs impaires de 'n'.
            for (let i = 0; i < n * n; i++) {
                if (i % 2 === 0) {
                    $damierBox.css('background-color', 'black');
                } else {
                    $damierBox.css('background-color', 'white');
                }
                // Ajoute chaque case au damier.
                $damierBox.clone().appendTo($box);
            }
        }
    };

    // Initialise la construction du damier avec la valeur 'n' spécifiée.
    damierConstruct(n);
};

// À l'événement 'ready' du document, ajoute un champ de texte pour 'n' et un bouton pour générer le damier.
$(document).ready(function() {
    $('<textarea placeholder="Veuillez entrer la valeur de n (la valeur par default c\'est 8)"></textarea>')
        .css({
        // Styles du champ de texte.
        'width': '35%',
        'height': '80px',
        'padding': '12px 20px',
        'box-sizing': 'border-box',
        'border': '2px solid #ccc',
        'border-radius': '4px',
        'background-color': '#f8f8f8',
        'font-size': '16px',
        'resize': 'none',
        'display': 'block',
        'margin': '10px 40px'
    }).appendTo($('#ce'))
    $('<button>Générer le damier</button>').css({
        // Styles du bouton de génération.
        'background-color': '#ff4742',
        'border': 'none',
        'color': 'white',
        'padding': '20px',
        'text-align': 'center',
        'text-decoration': 'none',
        'display': 'inline-block',
        'font-size': '16px',
        'margin': '4px 2px',
        'cursor': 'pointer',
        'border-radius': '5px',
        'display': 'block',
        'margin': '10px 40px'
    }).appendTo($('#ce'))

    // À l'événement 'click' sur le bouton de génération,
    // efface le contenu existant et génère un nouveau damier avec la valeur 'n' du champ de texte.
    $('#ce button').on('click', () => {
        $('#ce .box').html('')
        let n = $('#ce textarea').val()
        console.log(n)
        damier(n)
    })
})