const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const sections = Array.from(document.querySelectorAll("section"));

let current = 0;

function noDrop() {
    for(let i = 0; i < sections.length; i++) {
        if(sections[i].classList.contains("active")) {
            if(parseInt(sections[i].dataset.index) === 0) {
                previous.style.cursor = "no-drop";
                previous.style.opacity = ".5";
                previous.style.pointerEvents = "none";
                next.style.pointerEvents = "all";
                next.style.cursor = "pointer";
                next.style.opacity = "1";
            }else if(parseInt(sections[i].dataset.index) === sections.length - 1) {
                next.style.cursor = "no-drop";
                next.style.opacity = ".5";
                next.style.pointerEvents = "none";
                previous.style.pointerEvents = "all";
                previous.style.cursor = "pointer";
                previous.style.opacity = "1";
            }
        }
    }
}

noDrop()


function theChecker() {
    for(let i = 0; i < sections.length; i++) {
        if(sections[i].classList.contains("active")) {
            if(i === 0) {
                current = 0;
            }else if(i === sections.length - 1) {
                current = sections.length - 1
            } else {
                current = parseInt(sections[i].dataset.index);
            }
        }
    }
}


next.addEventListener("click", () => {
    sections.forEach(section => {
        if(section.classList.contains("active")) {
            section.classList.remove("active");
        }
    });
    sections[current + 1].classList.add("active");
    noDrop() 
    theChecker() 
});

previous.addEventListener("click", () => {
    sections.forEach(section => {
        if(section.classList.contains("active")) {
            section.classList.remove("active");
        }
    });
    sections[current - 1].classList.add("active");
    noDrop()
    theChecker() 
});