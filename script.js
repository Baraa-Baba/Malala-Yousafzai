
let path = document.querySelector('path')
let pathLenghth = path.getTotalLength()

path.style.strokeDasharray = pathLenghth + ' ' + pathLenghth

path.style.strokeDashoffset = pathLenghth
window.addEventListener('scroll', () => {
    //what % down is it
    var scrollPercentage = (document.documentElement.scrollTo + document.body.scrollTo)
    //length to offset dahes
    var drawLenght = pathLenghth * scrollPercentage
    //draw in reverse
    path.style.strokeDashoffset = pathLenghth - drawLenght

})