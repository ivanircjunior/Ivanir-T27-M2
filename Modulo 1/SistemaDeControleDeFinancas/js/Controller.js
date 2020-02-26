class Controller{

    constructor(){
        this.arrayEmpresas = []
        this.arrayContas = []

    }

    menuEmpresas(){
        let novoDivCadastroEmpresa = document.createElement("div")
        let novoDivTituloCadastroEmpresa = document.createElement("div")
        let novoTituloCadastroEmpresa = document.createElement("div")
        let novoDivInputNomeEmpresa = document.createElement("div")        
        let novoInputNomeEmpresa = document.createElement("input")
        let novoDivInputEnderecoEmpresa = document.createElement("div")
        let novoInputEnderecoEmpresa = document.createElement("input")
        let novoDivInputCNPJEmpresa = document.createElement("div")
        let novoInputCNPJEmpresa = document.createElement("input")
        let novoDivInputRazaoSocialEmpresa = document.createElement("div")
        let novoInputRazaoSocialEmpresa = document.createElement("input")
        let novoBotaoSalvarEmpresa = document.createElement("button")

        document.getElementById("areaDeTrabalho").appendChild(novoDivCadastroEmpresa)
        novoDivCadastroEmpresa.appendChild(novoTituloCadastroEmpresa)
        novoDivCadastroEmpresa.appendChild(novoInputNomeEmpresa)
        novoDivCadastroEmpresa.appendChild(novoInputEnderecoEmpresa)
        novoDivCadastroEmpresa.appendChild(novoInputCNPJEmpresa)
        novoDivCadastroEmpresa.appendChild(novoInputRazaoSocial)
        novoDivCadastroEmpresa.appendChild(novoBotaoSalvarEmpresa)
    }

    centralContas(){

    }

    lerDados(){

    }






}

let controller = new Controller()