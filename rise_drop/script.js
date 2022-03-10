let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
    btn.onclick = (e) => {
        const val = e.currentTarget.classList;
        if (val.contains('increase')) {
            console.log("increase by 1");
            count++;
        } else if (val.contains("decrease")) {
            console.log("decrease by 1");
            count--;
        } else {
            console.log("reset to 0");
            count = 0;
        }
        value.textContent = count;
    }
})



