import btnConclui from "./concluiTarefa.js";
import botaoDeletarTarefa from "./deletaTarefa.js";

export const novoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const novaTarefa = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')
    
    const dados = {
        novaTarefa,
        dataFormatada
    }

    const listaTarefas = [...tarefas, dados]
    
    lista.appendChild(criarTarefa(dados))

    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))

    input.value = ""
    input.focus()
}

const criarTarefa = ({novaTarefa, dataFormatada})=> {
    
    const criarLiNovaTarefa = document.createElement('li')
    criarLiNovaTarefa.classList.add('task')

    const conteudo = `<p class="content">${novaTarefa} * ${dataFormatada}</p>`
    
    criarLiNovaTarefa.innerHTML = conteudo

    criarLiNovaTarefa.appendChild(btnConclui())
    criarLiNovaTarefa.appendChild(botaoDeletarTarefa())

    return criarLiNovaTarefa
}