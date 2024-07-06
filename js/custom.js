/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('customSelect');
    selectElement.style.fontFamily = '"Jura", sans-serif';

    for (let i = 0; i < selectElement.options.length; i++) {
        selectElement.options[i].style.fontFamily = '"Jura", sans-serif';
    }
});
