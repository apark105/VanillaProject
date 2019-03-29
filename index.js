window.onload = function(){
    init();
}

function init(){
    document.getElementById("headers").addEventListener( "click", showTabInfo )
    document.body.addEventListener( "click", closeTab )
}

function showTabInfo(){
    const currentTab = event.target.innerText;
    const current = event.target;
    const removeTab = document.getElementById("headers").querySelectorAll('.tabClicked');    
    const removeX = document.getElementById("infoTab").querySelectorAll('.showInfo');    
    console.log('what is remove tab', removeTab[0])
    let x;
    switch(currentTab) {
        case 'FIT GUIDE':
            current.classList.add("tabClicked")
            x = document.getElementsByClassName('fitGuide')
            x[0].classList.add('showInfo')
            removeX[0].classList.remove("showInfo")
            removeTab[0].classList.remove("tabClicked")
            break;
        case 'CARE':
            current.classList.add("tabClicked")
            x = document.getElementsByClassName('care')
            x[0].classList.add('showInfo')
            removeX[0].classList.remove("showInfo")
            removeTab[0].classList.remove("tabClicked")
            break;
        case 'MATERIALS':
            current.classList.add("tabClicked")
            x = document.getElementsByClassName('materials')
            x[0].classList.add('showInfo')
            removeX[0].classList.remove("showInfo")
            removeTab[0].classList.remove("tabClicked")
            break;
        default:
            break;
    }
}

function closeTab(){
    const selection = event.target.id;
    const removeTab = document.getElementById("headers").querySelectorAll('.tabClicked'); 
    const removeX = document.getElementById("infoTab").querySelectorAll('.showInfo');       
    if (selection !== 'tab' && selection !== 'infoTab') {
        // debugger;
        removeTab[0].classList.remove("tabClicked")
        removeX[0].classList.remove("showInfo")

    }
}