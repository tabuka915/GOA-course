document.body.children[0].textContent = "luka maswavlebeli";
document.body.children[0].style.color = "red"
console.log (document.getElementByid("me"));



function manualGetElementById(id) {
    const elements = document.all;

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].id === id) {
            return elements[i];
        }
    }
}


function manualGetElementsByClassName(className) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].classList.contains(className)) {
            result.push(elements[i]);
        }
    }

    return result;
}



function manualGetElementsByTagName(tagName) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName === tagName.toUpperCase()) {
            result.push(elements[i]);
        }
    }

    return result;
}

