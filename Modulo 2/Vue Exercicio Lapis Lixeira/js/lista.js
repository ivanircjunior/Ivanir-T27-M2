var app = new Vue({
  el: "#app",
  data: {
    imagem: "img/editar.svg"
  },
  methods: {
    lapis() {
      this.imagem = "img/editar.svg"
    },

    lixeira() {
      this.imagem = "img/apagar.svg"
    }
  }
});