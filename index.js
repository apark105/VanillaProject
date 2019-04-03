'use strict';

function Tab() {
  var _this = this;

  /**
   * function selects and attaches click handlers to all tabs
   */
  this.init = function () {
    var tab = document.querySelectorAll(".tab");
    tab.forEach(function (selectTab) {
      selectTab.addEventListener("click", _this.toggleTab);
    });
  },
  /**
   * function toggles between tabs
   */
  this.toggleTab = function () {
    _this.closeTab();
    var currentTab = event.target;
    currentTab.classList.add("tabClicked");
    _this.showInfo(currentTab.id);
  },
  /** 
   * function displays content based on the current tab
   * @param {string} currentTab - name of the tab clicked
   */
  this.showInfo = function (currentTab) {
    var info = document.getElementsByClassName(currentTab)[0];
    info.classList.add('showInfo');
  },
  /**
   * function closes previously opened tab 
   */
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