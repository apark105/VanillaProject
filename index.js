class Tab {
    init(){
        const tab = document.querySelectorAll(".tab")
        tab.forEach(selectTab => selectTab.addEventListener("click", this.changeTabColor));
    }
    
    changeTabColor = () => {
        this.closeTab()
        const currentTab = event.target;
        currentTab.classList.add("tabClicked")
        this.showInfo(currentTab.id)
    }
    
    showInfo = (currentTab) => {
        const info = document.getElementsByClassName(currentTab)
        info[0].classList.add('showInfo')
    }
    
    closeTab = () => {
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
    individualTab.init();
}
