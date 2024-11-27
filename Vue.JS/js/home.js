console.log("olá robertha")
const PaginaHome = {
    template: `
        <header>
        <h1>Do Zero ao Tio Meio Rico: A Inspiradora Jornada de Milton Barata!</h1>
        <img src="Imagens/sobre o milton.jpeg" alt="Milton" class="milton-img"> <!-- Adicionando a classe à imagem -->
    </header>

    <!-- Parágrafo engraçado -->
    <div>
        <p class="container paragrafo">
            Milton Barata começou sua jornada como um simples vendedor de produtos caseiros, enfrentando os altos e
            baixos da vida financeira. Com muito humor e determinação, ele transformou sua pequena ideia em um império,
            "Tio Meio Rico". Seu segredo? Uma combinação de carisma, inteligência financeira e um talento especial para
            ensinar os outros a prosperar.

            Hoje, Milton compartilha sua sabedoria através de cursos e palestras, ajudando pessoas a alcançarem seus
            próprios sonhos de riqueza, sempre com uma pitada de humor e histórias engraçadas de sua trajetória. Afinal,
            quem disse que o caminho para o sucesso não pode ser divertido?
        </p>
    </div>
  `,
  data() {
    return {
        variavelExemplo : "Texto vindo de variael no componente"
    }
  }
};

const home = Vue.createApp({
    data() {
      return {
        paginaAtual: 'home', // Página inicial
        componentes: {
          home: PaginaHome, // carrega o template home
          sobre: PaginaSobre, // Carrega o componente "Sobre"
          contato: PaginaContato // Carrega o componente "Contato"
        },
        outraVariavelExemplo: "TITULO FIXO POR VARIAVEL"
      };
    },
    methods: {
        trocaPagina(paginaAtual) {
            this.paginaAtual = paginaAtual;
        }
    },
    template: `
      <div>
        <nav>
          <!-- Navegação entre as páginas -->
          <button @click="trocaPagina('home')">Página Inicial</button>
          <button @click="trocaPagina('sobre')">Sobre Nós</button>
          <button @click="trocaPagina('contato')">Contato</button>
        </nav>
        <h4> {{ outraVariavelExemplo }}
  
        <section>
          <!-- Carrega o componente dinamicamente -->
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
  });
  
  // Monta a aplicação Vue no elemento com id "app"
  home.mount('#app');
