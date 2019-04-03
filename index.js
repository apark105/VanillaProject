'use strict'

function Tab(){
    this.init = () =>{
        const tab = document.querySelectorAll(".tab")
        tab.forEach(selectTab => console.log(selectTab.addEventListener("click", this.changeTabColor)));
    },
    
    this.changeTabColor = () => {
        this.closeTab()
        const currentTab = event.target;
        currentTab.classList.add("tabClicked")
        this.showInfo(currentTab.id)
    },
    
    this.showInfo = (currentTab) => {
        const info = document.getElementsByClassName(currentTab)[0]
        info.classList.add('showInfo')
    },
    
    this.closeTab = () => {
        const removeTab = document.querySelectorAll('.tabClicked')[0]; 
        const removeInfo = document.querySelectorAll('.showInfo')[0];  
        if (removeTab) {
            removeTab.classList.remove("tabClicked")
            removeInfo.classList.remove("showInfo")
        }
    }
}

window.onload = function(){
    const individualTab = new Tab;
    individualTab.init()
}
