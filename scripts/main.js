import { renderContent } from "./contentRenderer.js";
import ElementUtils from "./elementUtils.js";


document.addEventListener("DOMContentLoaded", function () {
  var showMoreElements = document.getElementsByClassName("project-show-more");
  for (var i = 0; i < showMoreElements.length; i++) {
    showMoreElements[i].addEventListener("click", function (e) {
      var projectInfo = ElementUtils.findAncestorElement(e.target, ".portfolio__project-info");
      projectInfo.classList.add('show-full-description');
    }, false);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var showLessElements = document.getElementsByClassName("project-show-less");
  for (var i = 0; i < showLessElements.length; i++) {
    showLessElements[i].addEventListener("click", function (e) {
      var projectInfo = ElementUtils.findAncestorElement(e.target, ".portfolio__project-info");
      projectInfo.classList.remove('show-full-description');
      //After hiding the full-description, scroll portfolio into view if project-info is not into view
      if(!ElementUtils.isElementInViewport(projectInfo)) {
        var portfolio = ElementUtils.findAncestorElement(projectInfo, ".portfolio__project");
        portfolio.scrollIntoView();
      }
    }, false);
  }
});


renderContent()