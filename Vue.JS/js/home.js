const PaginaHome = {
  template: `
      <!-- Botão para inscrição -->
      <div class="container button-section">
        <h2>Saia agora do Pobre para o Meio Rico!</h2>
        <form>
          <button type="submit" class="inscricao-btn">Inscreva-se</button>
        </form>
      </div>
    
      <!-- Parágrafo engraçado -->
      <div>
        <p class="container paragrafo">
          Quer sair da pobreza e chegar à incrível zona de "Meio Pobre"? Agora você pode! Aprenda a comer sushi de vez em
          quando,
          mas ainda assim guardar uns trocados pra não passar vergonha no fim do mês.
        </p>
      </div>
    
      <!-- Carrossel -->
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <!-- Indicadores de slides -->
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
              aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
              aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
              aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
              aria-label="Slide 8"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="Imagens/carrossel1.jpg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Do Pobre ao Meio Rico</h2>
              <p class="descri">Quer dar aquele upgrade financeiro, mas sem muitas expectativas? Esse curso vai te mostrar
                como sair do "liso" para o "dá pra sobreviver", um passo de cada vez. Spoiler: ainda não dá pra comprar
                iPhone.</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel2.jpeg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Sou Pobre, como começar?</h2>
              <p class="descri">Se o saldo bancário te assusta mais do que filmes de terror, este é o guia para começar a
                sair
                dessa. Curso prático para você trocar aquele miojo por... quem sabe um arroz com ovo?</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel3.jpg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Como ficar Meio Rico em 3 meses</h2>
              <p class="descri">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse curso, você talvez não
                compre um jatinho, mas quem sabe aquele videogame novo?</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel4.jpeg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Como não parar de aprender a ser Meio Rico</h2>
              <p class="descri">Afinal, a jornada de ser "meio" rico nunca para! Faça esse curso para continuar aprendendo,
                economizando e, quem sabe, conseguir pedir um delivery sem olhar o preço antes.</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel5.jpeg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Sou meio Rico, o que faço agora?</h2>
              <p class="descri">Você chegou até aqui e agora tá meio perdido? Calma, dá pra melhorar! Vamos te mostrar o que
                fazer com essa grana, sem acabar gastando tudo no final de semana.</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel6.jpeg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Sendo Meio Rico todos os dias</h2>
              <p class="descri">Ser meio rico é uma arte! Aqui, você vai aprender como manter o estilo de vida confortável,
                mas sem exageros. Nada de sair comprando tudo no 12x sem juros, hein!</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
    
            <div class="carousel-item">
              <img src="Imagens/carrossel7.jpg" class="d-block w-100" alt="Meio Rico">
              <h2 class="titulo">Como permanecer Meio Rico sempre?</h2>
              <p class="descri">O difícil não é ficar meio rico, é se manter! Esse curso ensina como manter sua carteira
                cheia
                (ou meio cheia) sem cair em tentações como aquele sapato caro que você não precisa, mas quer muito.</p>
              <div class="button-section">
                <form action="FORMULARIO.html">
                  <button type="submit" class="inscricao-btn">Inscreva-se</button>
                </form>
              </div>
            </div>
            <!-- Botões de controle do carrossel -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
        <!-- Relatos -->
        <div class="container relatos">
          <h1>O que nossos alunos estão dizendo:</h1>
          <div class="row">
            <!-- Relato 1 -->
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="Imagens/card1.jpeg" class="card-img-top" alt="Relato 1">
                <div class="card-body">
                  <h2 class="card-title">Relato 1</h2>
                  <p class="card-text">"Antes de conhecer o Tio Meio Pobre, minhas finanças estavam completamente
                    desorganizadas. Agora, com as técnicas aprendidas, consegui pagar minhas dívidas e comecei a investir. O
                    curso realmente me ajudou a dar um passo em direção à estabilidade financeira!"</p>
                  <p class="card-author">- Wesley Safadão</p>
                </div>
              </div>
            </div>
    
            <!-- Relato 2 -->
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="Imagens/card2.jpeg" class="card-img-top" alt="Relato 2">
                <div class="card-body">
                  <h2 class="card-title">Relato 2</h2>
                  <p class="card-text">"O curso do Tio Meio Pobre me deu as ferramentas para sair da zona de pobreza e
                    começar
                    a economizar e investir de forma inteligente. Agora, consigo controlar melhor meu orçamento e estou mais
                    confiante sobre meu futuro financeiro!"</p>
                  <p class="card-author">- Pabllo</p>
                </div>
              </div>
            </div>
    
            <!-- Relato 3 -->
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="Imagens/card3.jpeg" class="card-img-top" alt="Relato 3">
                <div class="card-body">
                  <h2 class="card-title">Relato 3</h2>
                  <p class="card-text">"Sempre achei que era impossível sair da pobreza, mas depois de aplicar o que aprendi
                    no Tio Meio Pobre, tudo mudou. Hoje consigo manter uma reserva de emergência e já estou vendo meu
                    patrimônio crescer aos poucos."</p>
                  <p class="card-author">- Simone e Simaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Parágrafo engraçado -->
        <div>
          <p class="container paragrafo">
            Está pronto para dar os primeiros passos rumo a ser o Meio Rico mais bem-sucedido de todos? Quem sabe amanhã já
            compra um café sem olhar o preço! O futuro milionário começa agora!
          </p>
        </div>
    
        <!-- Formulário de Inscrição -->
        <div class="container form-container">
          <h2>Formulário de Inscrição</h2>
          <form id="formInscricao" novalidate>
            <!-- Nome -->
            <div class="mb-3">
              <label for="nome" class="form-label">Nome <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" required>
            </div>
    
            <!-- Data de nascimento -->
            <div class="mb-3">
              <label for="nascimento" class="form-label">Data de Nascimento <span class="text-danger">*</span></label>
              <input type="date" class="form-control" id="nascimento" required>
            </div>
    
            <!-- Endereço -->
            <div class="mb-3">
              <label for="endereco" class="form-label">Endereço <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="endereco" placeholder="Digite seu endereço" required>
            </div>
    
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
              <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com" required>
            </div>
    
            <!-- Sexo -->
            <div class="mb-3">
              <label for="sexo" class="form-label">Sexo <span class="text-danger">*</span></label>
              <select class="form-select" id="sexo" required>
                <option selected disabled>Selecione seu sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Pobre</option>
              </select>
            </div>
    
            <!-- Contato -->
            <div class="mb-3">
                <label for="contato" class="form-label">Contato <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" id="contato" placeholder="(99) 99999-9999" required>
              </div>
      
              <!-- Aceite de Termos -->
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="aceiteTermos" required>
                <label class="form-check-label" for="aceiteTermos">
                  Aceito os <a href="#">termos e condições</a>
                </label>
              </div>
      
              <!-- Botão de Inscrição -->
              <button type="submit" class="btn btn-primary">Inscreva-se</button>
            </form>
          </div>
      
          <!--Confirmação-->
          <!--Caixinha de mensagem -->
          <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <strong class="me-auto">Sucesso!</strong>
                <small>Agora</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Seu formulário foi enviado com sucesso.
              </div>
            </div>
          </div>
        </div>   
      
          <hr>
          <footer>
            <div class="container text-center">
              <div class="row">
                <div class="col-12">
                  <p>&copy; 2024 Tio Meio Rico. Todos os direitos reservados.</p>
                  <p>Feito por Robertha Rezende.</p>
                </div>
                  <a href="https://www.linkedin.com/in/robertha-de-sousa-rezende-0b15b8215/?originalSubdomain=br">Contato</a>
              </div>
            </div>
          </footer>   
    `,
  data() {
    return {
      variavelExemplo: "Texto vindo de variavel no componente"
    }
  },
  mounted() {
    // Inicializa o carrossel quando o componente é montado
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      touch: true
    });
  }
};



const home = Vue.createApp({
  data() {
    return {
      paginaAtual: 'home', // Página inicial
      componentes: {
        home: PaginaHome, // carrega o template home
        sobre: PaginaSobre, // Carrega o componente "Sobre"
        contato: PaginaContato, // Carrega o componente "Contato"
        cursos: PaginaCursos, // carrega o componete "Cursos"
        formulario: PaginaFormulario
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
        <!-- Cabeçalho com fundo em degradê azul -->
        <header>
          <h1>Bem-vindo ao Tio Meio Rico: somos de falar, não de fazer!</h1>
        </header>

        <!-- Espaçamento para a barra fixa -->
        <div class="spacer"></div>

        <!-- Barra de navegação personalizada -->
        <div class="container">
          <div class="btn-group">
            <button @click="trocaPagina('home')">Home</button>
            <button @click="trocaPagina('sobre')">Sobre</button>
            <button @click="trocaPagina('contato')">Contato</button>
            <button @click="trocaPagina('cursos')">Cursos</button>
            <button @click="trocaPagina('formulario')">Formulario</button>
          </div>
        </div>  
        <!--troca dinamica -->
        <div>
            <!-- Carrega o componente dinamicamente -->
            <component :is="componentes[paginaAtual]"></component>
        </div>    `
});

// Monta a aplicação Vue no elemento com id "app"
home.mount('#app');



