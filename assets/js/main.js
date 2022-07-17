import {novoItem} from "./criaTarefa.js";

const btnAdicionarTarefa = document.querySelector('[data-form-button]');

btnAdicionarTarefa.addEventListener('click', novoItem)