console.time('work speed')

    const pressed = document.querySelector('#select')
    const label = document.querySelector('.label')
    const reversal = document.querySelector('svg')

 
    pressed.addEventListener('click', event => {open()}, false)
    document.addEventListener('click', event => {close()}, false)
    

    function open()
    {
        event.stopPropagation()
        label.classList.add('pressed-select')
        reversal.classList.add('reversal')
        document.querySelector('.display-option').classList.add('showing')
    }
    function close()
    {
        if(event.button !== 1)
        {
            label.classList.remove('pressed-select')
            reversal.classList.remove('reversal')
            document.querySelector('.display-option').classList.remove('showing')
        }
    }
    

console.timeEnd('work speed')



