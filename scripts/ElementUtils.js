export default class ElementUtils {
    static createAndAppendElement(appendToNode, elementTag, className = "", textContent = "", attributes = []) {
        let newElem = document.createElement(elementTag)
        
        if(className !== "") {
            newElem.className = className
        }
        if(textContent !== "") {
            newElem.textContent = textContent
        }
        attributes.forEach(attribute => newElem.setAttribute(attribute.name, attribute.value))
    
        appendToNode.appendChild(newElem)
        return newElem
    }

    static findAncestorElement(el, sel) {
        while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
        return el;
    }
      
    static isElementInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
}