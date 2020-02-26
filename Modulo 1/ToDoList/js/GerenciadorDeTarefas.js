class GerenciadorDeTarefas {

    constructor(){
        this.arrayDeTarefas = []
        this.contador = 0
    }

    gerenciador(){
        let tarefa = this.lerDados()
        if(this.validar(tarefa)){
            tarefa.id = this.contador
            this.contador++
            this.incluiNoArray(tarefa)
            this.gerarTabela()
        } else {
            alert("Você precisa informar uma tarefa!")
        }
    }

    lerDados(){
        let tarefa = {}
        tarefa.descricao = document.getElementById("inputTarefas").value
        tarefa.concluida = false
        return tarefa
    }

    validar(tarefa){
        if(tarefa.descricao != ""){
            return true
        }
            return false
    }

    incluiNoArray(tarefa){
        this.arrayDeTarefas.push(tarefa)
    }



    gerarTabela(){
        for (let i=0; i<this.arrayDeTarefas.length; i++){
        let linhaNova = document.getElementById("listaDeTarefas").insertRow()
        let celulaCheck = linhaNova.insertCell()
        let celulaTarefa = linhaNova.insertCell()        
        let celulaEditar = linhaNova.insertCell()
        let celulaApagar = linhaNova.insertCell()
        let imgCheck = document.createElement("img")
        let imgEdit = document.createElement("img")
        let imgApagar = document.createElement("img")

        if(this.arrayDeTarefas[i].concluida == false) {
            imgCheck.setAttribute("src", "img/add.png")
        } else {
            imgCheck.setAttribute("src", "img/check.png")
        }
        
        imgEdit.setAttribute("src", "img/delete.png")
        imgApagar.setAttribute("src", "img/delete.png")



        }
    }

    editar(){

    }

    apagar(){

    }
}

let gerenciadorDeTarefas = new GerenciadorDeTarefas()