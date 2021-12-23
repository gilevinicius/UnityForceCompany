var vm = new Vue({
    vuetify: new Vuetify(),
    el: "#app",
    data: function data() {
      return {
        drawer: false,

        horarios: [
          {
            nivel: "Iniciante",
            dia:["Segunda - feira as 10h e 20:30h" ,
            "Terça - feira as 10h" ,
            "Quarta - feira as 10h e 20:30h",
            "Quinta - feira as 10h" ,
            "Sábado as 10h"] 
          },
          {
            nivel: "Intermediário",
            dia:["Terça - feira as 20:30h" ,
            "Sábado as 10h"] 
          },
          {
            nivel: "Avançado",
            dia:["Sexta - feira as 19:30h" ] 
          },
        ]

      }
    },
    methods: {
      fade: function  () {
        setTimeout(this.fade1, 1000)
        setTimeout(this.fade2, 3500)
        setTimeout(this.fade3, 6000)
        
      },

      fade1: function  () {
        let frase1 = document.querySelector(".frase1")
        frase1.style.opacity = 1
      },

      fade2: function  () {
        let frase2 = document.querySelector(".frase2")
        frase2.style.opacity = 1
      },
      
    },

    created() {
    
    },

    mounted() {
      this.fade()
    }
  })
  
// Animação digitando
let i = 0
let message = 'Unity Force Company'
let ufc = document.querySelector('.ufc')

function anima() {
  ufc.style.opacity = 1
  if (i < message.length) {
    ufc.innerHTML += message.charAt(i);
    i++;
    setTimeout(anima, 150);
  }
}
setTimeout(anima, 5000)

// Scroll para os links internos
const linksInternos = document.querySelectorAll(".scroll a[href^='#']");

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute("href")
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection)
})
  