const container = document.getElementById('container')
const word = 'Hola Google IO'.split(' ')
const rate = 1000
let index = 0

setInterval(() => {
    if(container.hasChildNodes()) {
        const $oldelement = container.firstChild;
        $oldelement.classList.add('fade-out');
        $oldelement.addEventListener('animationend', () => {
            this.classList.remove();
        });
    }
    const $newelement = document.createElement('h1');
    $newelement.textContent = word[(index++) % 3];
    container.prepend($newelement);
    $newelement.classList.add('fade-in')
    $newelement.addEventListener('animationend', () =>{
        this.classList.remove('fade-out')
    });
}, rate);



