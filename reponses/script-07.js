//  Chemin relatif : reponses/script-08.js

const step = 5
$(document).on('keydown',
    event => {
        if (event.shiftKey && (event.keyCode >= 37 && event.keyCode <= 40)) {
            var elem = $('.box')
            var currentLeft = parseInt(elem.css('left'))
            var currentTop = parseInt(elem.css('top'))
            var boxDimensions = {
                width: parseInt($('#ce .box').css('width')),
                height: parseInt($('#ce .box').css('height'))
            }
            switch (event.keyCode) {
                case 37:
                    if(currentLeft > 0) {
                        elem.css('left', (currentLeft - step) + 'px')
                    }
                    break;
                case 38:
                    if(currentTop > 0) {
                        elem.css('top', (currentTop - step) + 'px')
                    }
                    break;
                case 39:
                    if ((currentLeft + boxDimensions.width + step) <= $(window).width()) {
                        elem.css('left', (currentLeft + step) + 'px')
                    }
                    break;
                case 40:
                    if( (currentTop + boxDimensions.height + step) <= 200 )
                    elem.css('top', (currentTop + step) + 'px')
                    break;
            }
        }
    })

//Pour déplacer l'objet simultanément en haut et à gauche il faut apuier sur les touches: SHIFT + ↑ + ←
