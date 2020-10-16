document.addEventListener("DOMContentLoaded", function () {
  var showMoreElements = document.getElementsByClassName("project-show-more");
  for (var i = 0; i < showMoreElements.length; i++) {
    showMoreElements[i].addEventListener("click", function (e) {
      console.log(e.target);
      var ancestor = findAncestor(e.target, ".portfolio__project-info");
      console.log(ancestor);
      ancestor.classList.add('show-full-description');
    }, false);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var showMoreElements = document.getElementsByClassName("project-show-less");
  for (var i = 0; i < showMoreElements.length; i++) {
    showMoreElements[i].addEventListener("click", function (e) {
      console.log(e.target);
      var ancestor = findAncestor(e.target, ".portfolio__project-info");
      console.log(ancestor);
      ancestor.classList.remove('show-full-description');
    }, false);
  }
});

function findAncestor(el, sel) {
  while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
  return el;
}