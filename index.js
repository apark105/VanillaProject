'use strict';

function Tab() {
  var _this = this;
  var flag; 
  var removeTab; 
  var removeInfo; 
  /**
   * function selects and attaches click handlers to all tabs
   */
  this.init = function () {
    var tab = document.querySelectorAll(".header__tab");
    for (var i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", _this.toggleTab);
    }
  },
  /**
   * function toggles between tabs
   */
  this.toggleTab = function () {
    _this.closeTab();
    var currentTab = event.target;
    currentTab.classList.add("header__tab--clicked");
    _this.showInfo(currentTab.getAttribute("info"));

    if(currentTab.id === flag){
      removeTab.classList.remove("header__tab--clicked");
      removeInfo.classList.remove("header__info--clicked");
      flag = null;
      return;
    }
    flag = currentTab.id;
  },
  /** 
   * function displays content based on the current tab
   * @param {string} currentTab - name of the tab clicked
   */
  this.showInfo = function (currentTab) {
    var info = document.querySelectorAll(`div[info = "${currentTab}"]`)[1]
    info.classList.add('header__info--clicked');
  },
  /**
   * function closes previously opened tab 
   */
  this.closeTab = function () {
    removeTab = document.querySelectorAll('.header__tab--clicked')[0];
    removeInfo = document.querySelectorAll('.header__info--clicked')[0];
    if (removeTab) {
      removeTab.classList.remove("header__tab--clicked");
      removeInfo.classList.remove("header__info--clicked");
    }
  };
}
/**
 * function initialized upon window onload
 */
window.onload = function () {
  var individualTab = new Tab();
  individualTab.init();
};