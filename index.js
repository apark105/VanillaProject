'use strict';

function Tab() {
  var _this = this;

  this.init = function () {
    var tab = document.querySelectorAll(".tab");
    tab.forEach(function (selectTab) {
      return selectTab.addEventListener("click", _this.changeTabColor);
    });
  }, 

  this.changeTabColor = function () {
    _this.closeTab();
    var currentTab = event.target;
    currentTab.classList.add("tabClicked");
    _this.showInfo(currentTab.id);
  }, 

  this.showInfo = function (currentTab) {
    var info = document.getElementsByClassName(currentTab)[0];
    info.classList.add('showInfo');
  }, 

  this.closeTab = function () {
    var removeTab = document.querySelectorAll('.tabClicked')[0];
    var removeInfo = document.querySelectorAll('.showInfo')[0];

    if (removeTab) {
      removeTab.classList.remove("tabClicked");
      removeInfo.classList.remove("showInfo");
    }
  };
}

window.onload = function () {
  var individualTab = new Tab();
  individualTab.init();
};