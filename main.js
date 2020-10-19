console.time('work speed')
    const pressed = document.querySelector('#select')
    const label = document.querySelector('.label')
    const reversal = document.querySelector('svg')
    const displayOption = document.querySelector('.display-option')
    var myObj
    let selected


    // Actions

    document.querySelector('#destroy').addEventListener('click', event => {destroy()}, false)

    function destroy()
    {
        document.querySelector('.select-item').innerHTML = ''
        document.querySelector('.select').remove()
    }


  
    document.querySelector('#open').addEventListener('click', event => {open()}, false)
    document.querySelector('#close').addEventListener('click', event => {close()}, false)
    document.querySelector('#set_selected_index_5').addEventListener('click', event => {setSelected(5)}, false)
    document.querySelector('#get_selected').addEventListener('click', event => {get_selected()}, false)
    document.querySelector('#clear').addEventListener('click', event => {clear()}, false)



    pressed.addEventListener('click', event => {open()}, false)
    document.addEventListener('click', event => {close()}, false)


    displayOption.onclick = function(event){
        let option = event.target
        active(option)

        for(objLabel in myObj)
        {
            if(myObj[objLabel].id === option.id)
            {
                selected = objLabel
                document.querySelector('.item').innerHTML = myObj[objLabel].label
                document.querySelector('.select-item').innerHTML = `Select item: ${myObj[objLabel].label}`
                document.querySelector('.pressed-select').classList.add('active')
            }
        }

    }

    function clear()
    {
        document.querySelector('.item').innerHTML = ''
        document.querySelector('.select-item').innerHTML = ''
        label.classList.remove('pressed-select')
        label.classList.remove('active')
        reversal.classList.remove('reversal')
        displayOption.classList.remove('showing')


        let optionAll = document.querySelectorAll('.option')
        for(element of optionAll){element.classList.remove('active')}
    }

    function get_selected()
    {
        if(selected == undefined){alert('Get Selected undefined')}
        else{alert(' id: ' + myObj[selected].id + ' label: ' + myObj[selected].label)}
    }
    function setSelected(index)
    {
        index--
        for(objLabel in myObj)
        {
            if(objLabel == index)
            {
                selected = index
                document.querySelector('.item').innerHTML = myObj[objLabel].label
                document.querySelector('.select-item').innerHTML = `Select item:${myObj[objLabel].label}`
                let optionAll = document.querySelectorAll('.option')
                for(element of optionAll){element.classList.remove('active')}
                let i = index
                for(element of optionAll)
                {
                    if(i <= 0){element.classList.add('active')
                        break
                    }
                    i--
                }

                label.classList.add('pressed-select')
                reversal.classList.add('reversal')
                displayOption.classList.add('showing')

                document.querySelector('.pressed-select').classList.add('active')


                break
            }
        }
    }
    function active(option)
    {
        let optionAll = document.querySelectorAll('.option')
        for(element of optionAll){element.classList.remove('active')}
        option.classList.add('active')
    }
    function open()
    {
        event.stopPropagation()
        label.classList.add('pressed-select')
        reversal.classList.add('reversal')
        displayOption.classList.add('showing')
    }
    function close()
    {
        if(event.button !== 1)
        {
            if(document.querySelector('.item').innerHTML == ''){label.classList.remove('pressed-select')}
            reversal.classList.remove('reversal')
            displayOption.classList.remove('showing')
        }
    }


    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", "http://js-challenge/api.php", true)
    xmlhttp.send()

    function label_()
    {
        loadingClose()
        for(objLabel in myObj)
        {
            displayOption.innerHTML += `<div class="option" id="${myObj[objLabel].id}">${myObj[objLabel].label}</div>`
        }
    }
    function loadingClose()
    {
        document.querySelector('.loading').remove()
    }
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText)
            label_(myObj)
        }
    }
    
console.timeEnd('work speed')



