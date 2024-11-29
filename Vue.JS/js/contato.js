const PaginaContato = {
    template: `
    <!-- Cabeçalho com fundo em degradê -->
    <header>
        <h1>OS MELHORES CURSOS</h1>
    </header>

    <!-- Contêiner dos Cards -->
    <div class="container">
        <div class="row">
            <!-- Card 1 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel1.jpg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Do Pobre ao Meio Rico</h5>
                        <p class="card-text">Quer dar aquele upgrade financeiro, mas sem muitas expectativas? Esse curso
                            vai te mostrar como sair do "liso" para o "dá pra sobreviver", um passo de cada vez.
                            Spoiler: ainda não dá pra comprar iPhone.</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel2.jpeg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Sou Pobre, como começar?</h5>
                        <p class="card-text">Se o saldo bancário te assusta mais do que filmes de terror, este é o guia
                            para começar a sair dessa. Curso prático para você trocar aquele miojo por... quem sabe um
                            arroz com ovo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel3.jpg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Como ficar Meio Rico em 3 meses</h5>
                        <p class="card-text">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse
                            curso, você talvez não compre um jatinho, mas quem sabe aquele videogame novo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da primeira linha -->

        <div class="row">
            <!-- Card 4 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel4.jpeg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Como ficar Meio Rico em 3 meses</h5>
                        <p class="card-text">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse
                            curso, você talvez não compre um jatinho, mas quem sabe aquele videogame novo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel5.jpeg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Como ficar Meio Rico em 3 meses</h5>
                        <p class="card-text">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse
                            curso, você talvez não compre um jatinho, mas quem sabe aquele videogame novo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel6.jpeg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Como ficar Meio Rico em 3 meses</h5>
                        <p class="card-text">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse
                            curso, você talvez não compre um jatinho, mas quem sabe aquele videogame novo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da segunda linha -->

        <div class="row">
            <!-- Card 7 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/carrossel7.jpg" class="card-img-top" alt="Meio Rico">
                    <div class="card-body">
                        <h5 class="card-title">Como ficar Meio Rico em 3 meses</h5>
                        <p class="card-text">Três meses para ficar "meio" rico? Parece um sonho, né? Bem, com esse
                            curso, você talvez não compre um jatinho, mas quem sabe aquele videogame novo?</p>
                        <form action="FORMULARIO.html">
                            <button type="submit" class="inscricao-btn">Inscreva-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da terceira linha -->
    </div> <!-- Fim do container -->
    <script>
      // Captura o formulário correto pelo ID
      const form = document.getElementById('formInscricao'); // Use o ID correto aqui
      // Adiciona um listener para a submissão do formulário
      form.addEventListener('submit', function (event) {
        // Se o formulário não for válido, previne o envio
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          // Exibe mensagens customizadas se algum campo for inválido
          form.querySelectorAll(':invalid').forEach((input) => {
            input.setCustomValidity('');
            // Mensagens customizadas por campo
            if (input.validity.valueMissing) {
              if (input.id === 'nome') {
                input.setCustomValidity('Por favor, insira seu nome.');
              } else if (input.id === 'nascimento') {
                input.setCustomValidity('Por favor, insira sua data de nascimento.');
              } else if (input.id === 'endereco') {
                input.setCustomValidity('Por favor, insira seu endereço.');
              } else if (input.id === 'email') {
                input.setCustomValidity('Por favor, insira seu email.');
              } else if (input.id === 'sexo') {
                input.setCustomValidity('Por favor, selecione seu sexo.');
              } else if (input.id === 'contato') {
                input.setCustomValidity('Por favor, insira seu número de contato.');
              } else if (input.id === 'aceiteTermos') {
                input.setCustomValidity('Você deve aceitar os termos e condições.');
              }
            }

            input.reportValidity();
          });
        }

        // Adiciona as classes de validação para os estilos Bootstrap
        form.classList.add('was-validated');
      }, false);
    </script>

    <script>
      // Captura o formulário e o toast
      const toastLiveExample = document.getElementById('liveToast');
      const emailInput = document.getElementById('email');
      // Listener para a submissão do formulário
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão para processar a lógica
        // Verifica se o formulário é válido
        if (form.checkValidity()) {
          // Se o formulário for válido, exibe o toast
          const toast = new bootstrap.Toast(toastLiveExample);
          toast.show();
          // Limpa o formulário após o envio
          form.reset();
          // Remove classes de validação após o reset
          form.classList.remove('was-validated');
          emailInput.classList.remove('is-valid');
        } else {
          event.preventDefault(); // Isso vai evitar o envio caso algo esteja errado
        }
      });
    </script>
    `,
    data() {
        return{
            mensagem:""
        };
    },
    methods: {
        cliquei() {
            if (this.mensagem.trim()=== ""){
                alert('Por favor, escreva uma mensagem!'); 
            } else{
                alert('Mensagem enviada com sucesso!')

            }
        }
    },
  };

  