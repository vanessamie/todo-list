/* Acessando os itens*/
const btn = document.getElementById('container__btn');
const body = document.getElementsByTagName('body')[0];

/* Constantes só para ficar organizado*/
const darkModeClass = 'dark-mode';
const lightModeText = 'Light Mode';
const darkModeText = "Dark Mode";

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

/* Alterando o texto */
function changeText() {
    if(btn.classList.contains(darkModeClass)) {
        btn.innerHTML = lightModeText;
    } else {
        btn.innerHTML = darkModeText;
    }
}

function changeMode() {
    changeClasses();
    changeText();
}

btn.addEventListener('click', changeMode);

