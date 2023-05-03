document.querySelector("#salvar").addEventListener("click", cadastrar);

function cadastrar() {
    let titulo = document.querySelector("#titulo").value;
    let descricao = document.querySelector("#descricao").value;
    let pontos = document.querySelector("#pontos").value;
    let categoria = document.querySelector("#categoria").value;

    console.log(titulo, descricao, pontos, categoria);

    document.querySelector("#tarefas").innerHTML += gerarCard();
}

function gerarCard() {
    return `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <div class="card-header">
                    Estudar para CP
                </div>
                <div class="card-body">
                    <p class="card-text">Fazer os exercícios para estudas.</p>
                    <p>
                        <span class="badge text-bg-warning">Estudar</span>
                    </p>
                    <a href="#" class="btn btn-success">
                        <i class="bi bi-check-lg"></i>
                    </a>
                    <a href="#" class="btn btn-danger">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </div> <!-- card -->
        </div> <!-- col -->
    `
}