Vue.component("cadastro-cliente", {
props: {
  titulo: {
    type: String
  }
},

data: function () {
    return {
        clientes: [],
        cliente: {
            nome: "",
            sobrenome: "",
            idade: 0
        },
        alerta: []
    };
},

methods: {
    cadastrar() {
        if(this.cliente.nome!="" && this.cliente.sobrenome!="" && this.cliente.idade!=0){
        let cli = JSON.parse(JSON.stringify(this.cliente));
        this.clientes.push(cli);
        } else {
            if(this.cliente.nome==""){
                this.alerta.push("É necessário informar um nome!")
            }
            if(this.cliente.sobrenome==""){
                this.alerta.push("É necessário informar um sobrenome!")
            }
            if(this.cliente.idade==0){
                this.alerta.push("É necessário informar uma idade!")
            }   
        }
    }
},

template: `<div id="app1">
    <h1>Cadastro de {{titulo}} </h1>

    <input type="text" placeholder="Nome" v-model="cliente.nome" />
    <input type="text" placeholder="Sobrenome" v-model="cliente.sobrenome" />
    <input type="number" placeholder="Idade" v-model="cliente.idade" />

    <mensageiro :alerta="alerta"></mensageiro>

    <button @click="cadastrar()">Cadastrar</button>

    <div>
        <ul>
            <li v-for="cli in clientes" :key="cli.nome">
            {{cli.nome}} {{cli.sobrenome}}, {{cli.idade}}
        </ul
    </div>
`
})

Vue.component("mensageiro", {
    props: {
      alerta: {
        type: Array
      }
    },
    
    data: function () {
        return {
        };
    },
    
    methods: {
        alertaValida() {
            
            if(this.cliente.nome!="" && this.cliente.sobrenome!="" && this.cliente.idade!=0){
            let cli = JSON.parse(JSON.stringify(this.cliente));
            this.clientes.push(cli);
            } else {
                if(this.cliente.nome==""){
                    this.alerta.push("É necessário informar um nome!")
                }
                if(this.cliente.sobrenome==""){
                    this.alerta.push("É necessário informar um sobrenome!")
                }
                if(this.cliente.idade==0){
                    this.alerta.push("É necessário informar uma idade!")
                }   
            }
        }
    },
    
    template: `<div id="app2">
        <div>
            <ul>
                <li v-for="mensagem,index in alerta">
                {{mensagem}}
            </ul
        </div>
    `
    })


var app = new Vue({
    el: "#app0",
    data: {

    },
  });
  