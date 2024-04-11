const angleUpAndDown = document.querySelector(".fa-angle-down");


function angleDown() {
    angleUpAndDown.classList.add('fa-angle-up');
    angleUpAndDown.classList.remove('fa-angle-down');
}

function angleUp() {
    angleUpAndDown.classList.remove('fa-angle-up');
    angleUpAndDown.classList.add('fa-angle-down');

 
    

}

let changes = true;

function change() {
    if (changes) {
        angleDown();
    } else {
        angleUp();
    }

    changes = !changes;
}