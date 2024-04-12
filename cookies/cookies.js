const angleUpAndDownElements = document.querySelectorAll(".fa-angle-down");
const hiddenElements = document.querySelectorAll(".hidden");



function expandSection() {
    angleUpAndDownElements.forEach(element => {
        element.classList.add('fa-angle-up');
        element.classList.remove('fa-angle-down');
    });

    hiddenElements.forEach(element => {
        element.classList.add('open');
        element.classList.remove('hidden');
    });
}

function collapseSection() {
    angleUpAndDownElements.forEach(element => {
        element.classList.remove('fa-angle-up');
        element.classList.add('fa-angle-down');
    });

    hiddenElements.forEach(element => {
        element.classList.remove('open');
        element.classList.add('hidden');
    });
}

let changes = true;

function change() {
    if (changes) {
        expandSection();
    } else {
        collapseSection();
    }

    changes = !changes;
}

