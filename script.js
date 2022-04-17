window.addEventListener('scroll', () => {
    const target = document.querySelectorAll('.scroll');
    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset + target[index].dataset.rate;
        if (target[index].dataset.direction === 'vertical') {

            target[index].style.transform = 'translate3d(@px,' + pos + 'px, @px)';
        } else
            var posx = window.pageYOffset * target[index].dataset.ratex;
        var posy = window.pageYOffset * target[index].dataset.ratey;
        target[index].style.transform = 'translate3d(' + posx + 'px' + posy + 'px, 0px)';
    }
})