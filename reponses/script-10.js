//  Chemin relatif : ../reponses/script-10.js

// Attend que le document HTML soit chargé pour exécuter le code jQuery
$(document).ready(function() {
    // Sélectionne la div avec la classe 'box' à l'intérieur de l'élément ayant l'ID 'ce'
    var $croppedImageDiv = $('#ce .box');
    // Sélectionne l'image à l'intérieur de l'élément ayant l'ID 'imgsrc' à l'intérieur de l'élément ayant l'ID 'ce'
    var $mainImage = $('#ce #imgsrc img');

    // Déclenche l'événement lorsque la souris se déplace sur l'image principale
    $mainImage.mousemove(function(event) {
        // Calcule la position de la souris par rapport à l'image principale
        var mouseX = event.pageX - $mainImage.offset().left;
        var mouseY = event.pageY - $mainImage.offset().top;

        // Applique un style à la div pour afficher une partie de l'image en fonction du mouvement de la souris
        $croppedImageDiv.css({
            'background-image': 'url(' + $mainImage.attr('src') + ')',
            'background-position': -mouseX * 4.8 + 'px ' + -mouseY * 4.8 + 'px'
        }).show();
    });

    // Déclenche l'événement lorsque la souris quitte l'image principale
    $mainImage.mouseleave(function() {
        // Supprime les styles appliqués précédemment pour réinitialiser l'apparence de la div
        $croppedImageDiv.removeAttr('style')
        $croppedImageDiv.css({
            'width': '250px',
            'height': '250px',
            'margin': '0 40px',
            'border': '1px solid #f08',
            'display': 'inline-block'
        });
    });
});