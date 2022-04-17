/*
let path = document.querySelector('path')
let pathLength = path.getTotalLength()

window.addEventListener('scroll', () => {
    //what % down is it
    var scrollPercentage = (document.documentElement.scrollTo + document.body.scrollTo)
    //length to offset dahes
    var drawLenght = pathLength * scrollPercentage
    //draw in reverse
    path.style.strokeDashoffset = pathLength - drawLenght

})
*/


var About = document.getElementById('main-about')
const callback = entries => {
    const [entry] = entries
    if (entry.isIntersecting) {
        About.style.opacity = '1'
    } else {
        About.style.opacity = '0'
    }
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}
const observer = new IntersectionObserver(callback, options)
if (About) observer.observe(About)
