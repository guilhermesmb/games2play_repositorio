document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    console.log(titulo, descricao, pontos, categoria)

    document.querySelector("#tarefas").innerHTML += gerarCard()
    
}

function gerarCard(){
    return `<div class="col">
    <div class="card">
        <div class="card-header">
            God of War Ragnarök
        </div>
        <div class="card-body">
            <p class="card-text">É god of war meu amigo</p>
            <p>
                <span class="badge text-bg-warning">Ação / Aventura</span>
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
