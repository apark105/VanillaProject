window.onload = function(){
    init();
}

function init(){
    const tab = document.querySelectorAll(".tab")
    tab.forEach(selectTab => selectTab.addEventListener("click", changeTabColor));
}

function changeTabColor(){
    closeTab()
    const currentTab = event.target;
    currentTab.classList.add("tabClicked")
    showInfo(currentTab.id)
}

function showInfo(currentTab){
    const info = document.getElementsByClassName(currentTab)
    info[0].classList.add('showInfo')
}

function closeTab(){
    const removeTab = document.querySelectorAll('.tabClicked')[0]; 
    const removeInfo = document.querySelectorAll('.showInfo')[0];  
    if (removeTab) {
        removeTab.classList.remove("tabClicked")
        removeInfo.classList.remove("showInfo")
    }
}