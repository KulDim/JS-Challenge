window.onload = () => {
    const pressed = document.querySelector('#select')


    
 
    pressed.addEventListener('click', event => {
        event.stopPropagation()
        document.querySelector('.label').classList.add('pressed-select')
        document.querySelector('svg').classList.add('reversal')
    }, false)



    document.addEventListener('click', event => {
        if(event.button !== 1)
        {
            document.querySelector('.label').classList.remove('pressed-select')
            document.querySelector('svg').classList.remove('reversal')
        }
    }, false)
}