const PaginaFormulario = {
    template: `
    <!-- Cabeçalho com fundo em degradê -->
    <header>
        <h1>TORNE-SE MEIO RICO AGORA</h1>
    </header>
    <!-- Parágrafo engraçado -->
    <div>
        <p class="container paragrafo">
            Está pronto para dar os primeiros passos rumo a ser o Meio Rico mais bem-sucedido de todos? Quem sabe amanhã
            já compra um café sem olhar o preço! O futuro milionário começa agora!
        </p>
    </div>

    <!-- Formulário de Inscrição -->
    <div class="container form-container">
        <h2>Formulário de Inscrição</h2>
        <form id="formInscricao" novalidate="">
            <!-- Nome -->
            <div class="mb-3">
                <label for="nome" class="form-label">Nome <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" required="">
            </div>

            <!-- Data de nascimento -->
            <div class="mb-3">
                <label for="nascimento" class="form-label">Data de Nascimento <span class="text-danger">*</span></label>
                <input type="date" class="form-control" id="nascimento" required="">
            </div>

            <!-- Endereço -->
            <div class="mb-3">
                <label for="endereco" class="form-label">Endereço <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="endereco" placeholder="Digite seu endereço" required="">
            </div>

            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com" required="">
            </div>

            <!-- Sexo -->
            <div class="mb-3">
                <label for="sexo" class="form-label">Sexo <span class="text-danger">*</span></label>
                <select class="form-select" id="sexo" required="">
                    <option selected="" disabled="">Selecione seu sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Pobre</option>
                </select>
            </div>

            <!-- Contato -->
            <div class="mb-3">
                <label for="contato" class="form-label">Contato <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" id="contato" placeholder="(99) 99999-9999" required="">
            </div>

            <!-- Aceite de Termos -->
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="aceiteTermos" required="">
                <label class="form-check-label" for="aceiteTermos">
                    Aceito os <a href="#">termos e condições</a>
                </label>
            </div>

            <!-- Botão de Inscrição -->
            <button type="submit" class="btn btn-primary">Inscreva-se</button>
        </form>
    </div>

    <!--Confirmação-->
    <!-- Toast -->
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

    <!-- Importa a biblioteca JavaScript do Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <script>
        // Inicializa o carrossel
        const carouselElement = document.querySelector('#carouselExampleIndicators');
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            touch: true
        });
    </script>
    <script>
        // Captura o formulário
        const form = document.getElementById('formInscricao');

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
        }, false); </script>

    <script>
        const formulário = document.getElementById('meuFormulario');
        const toastLiveExample = document.getElementById('liveToast');
        const emailInput = document.getElementById('email');

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
            }
        });
    </script>`
}