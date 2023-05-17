document.querySelector("#salvar").addEventListener("click", cadastrar);

let lista_tarefas = [];

window.addEventListener("load", () => {
    lista_tarefas = JSON.parse(localStorage.getItem("lista_tarefa")) || [];

    atualizar();
})

document.querySelector("#pendentes").addEventListener("click", () => {
    lista_tarefas = lista_tarefas.filter(tarefa => tarefa.concluida == false)
    atualizar()
})

function cadastrar() {
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value;
    let descricao = document.querySelector("#descricao").value;
    let pontos = document.querySelector("#pontos").value;
    let categoria = document.querySelector("#categoria").value;

    const tarefa = {
        id: Date.now(),
        titulo: titulo,
        descricao: descricao,
        pontos: pontos,
        categoria: categoria,
        concluida: false
    }

    if (tarefa.titulo.length == 0) {
        document.querySelector("#titulo").classList.add("is-invalid");
        return;
    }

    lista_tarefas.push(tarefa);

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa);

    document.querySelector("#titulo").value = "";
    document.querySelector("#descricao").value = "";

    salvar();

    modal.hide();
}

function atualizar() {
    document.querySelector("#tarefas").innerHTML = "";

    lista_tarefas.forEach((tarefa) => {
        document.querySelector("#tarefas").innerHTML += gerarCard(tarefa);
    })
}

function salvar() {
    localStorage.setItem("lista_tarefa", JSON.stringify(lista_tarefas));
}

function apagar(id) {
    lista_tarefas = lista_tarefas.filter(tarefa => tarefa.id != id)

    salvar();
    atualizar();
}

function concluir(id) {
    let tarefa_encontrada = lista_tarefas.find(tarefa => tarefa.id == id);

    tarefa_encontrada.concluida = true;

    salvar();
    atualizar();
}

function gerarCard(tarefa) {
    const disabled = (tarefa.concluida) ? "disabled" : "";
    return `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <div class="card-header">
                    ${tarefa.titulo}
                </div>
                <div class="card-body">
                    <p class="card-text">${tarefa.descricao}</p>
                    <p>
                        <span class="badge text-bg-warning">${tarefa.categoria}</span>
                    </p>
                    <p>${tarefa.pontos} pts</p>
                    <a href="#" onClick="concluir(${tarefa.id})" class="btn btn-success ${disabled}">
                        <i class="bi bi-check-lg"></i>
                    </a>
                    <a href="#" onClick="apagar(${tarefa.id})" class="btn btn-danger">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </div> <!-- card -->
        </div> <!-- col -->
    `
}