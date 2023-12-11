//  chemin relatif : reponses/script-02.js
$('#ce div:first').on('click', async function () {
    // Itérer sur les divs après le premier et les cacher en séquence
    $('#ce div').each(function (index) {
        // Utilisation d'un délai pour créer une séquence de disparition
        let divElement = $(this);
        setTimeout(function () {
            divElement.hide();
        }, index * 500); // Ajoute un délai de 500ms entre chaque div
    });
    setTimeout(function () {
        $('#ce div').each(function (index) {
            // Utilisation d'un délai pour créer une séquence de disparition
            let divElement = $(this);
            setTimeout(function () {
                divElement.show();
            }, index * 500);
        });
    }, 5000)
});