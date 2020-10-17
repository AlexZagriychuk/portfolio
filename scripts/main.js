document.addEventListener("DOMContentLoaded", function () {
  var showMoreElements = document.getElementsByClassName("project-show-more");
  for (var i = 0; i < showMoreElements.length; i++) {
    showMoreElements[i].addEventListener("click", function (e) {
      var projectInfo = findAncestorElement(e.target, ".portfolio__project-info");
      projectInfo.classList.add('show-full-description');
    }, false);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var showLessElements = document.getElementsByClassName("project-show-less");
  for (var i = 0; i < showLessElements.length; i++) {
    showLessElements[i].addEventListener("click", function (e) {
      var projectInfo = findAncestorElement(e.target, ".portfolio__project-info");
      projectInfo.classList.remove('show-full-description');
      //After hiding the full-description, scroll portfolio into view if project-info is not into view
      if(!isElementInViewport(projectInfo)) {
        var portfolio = findAncestorElement(projectInfo, ".portfolio__project");
        portfolio.scrollIntoView();
      }
    }, false);
  }
});

function findAncestorElement(el, sel) {
  while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
  return el;
}

function isElementInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};