const PaginaContato = {
    template:
     `
    <!-- Cabeçalho com fundo em degradê -->
    <header>
        <h1>Contatos dos Responsáveis</h1>
    </header>

    <!-- Seção com as informações de contato -->
    <div class="container">
        <p class="container paragrafo">
            Abaixo estão os contatos dos responsáveis. Caso tenha alguma dúvida ou precise de mais informações, entre em contato!
        </p>
    </div>

    <!-- Lista de Responsáveis -->
    <div class="container">
        <div class="row">
            <!-- Responsável 1 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/responsavel1.jpg" class="card-img-top" alt="Responsável 1">
                    <div class="card-body">
                        <h5 class="card-title">David Bryan</h5>
                        <p class="card-text">Coordenadora de Projetos</p>
                        <p><strong>Telefone:</strong> (11) 98765-4321</p>
                        <p><strong>LinkedIn:</strong> 
                            <a href="https:" target="_blank">Ana Souza no LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Responsável 2 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/responsavel2.jpg" class="card-img-top" alt="Responsável 2">
                    <div class="card-body">
                        <h5 class="card-title">Felipe Fernandes</h5>
                        <p class="card-text">Gerente de Marketing</p>
                        <p><strong>Telefone:</strong> (21) 91234-5678</p>
                        <p><strong>LinkedIn:</strong> 
                            <a href="https:" target="_blank">Carlos Silva no LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Responsável 3 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/responsavel3.jpg" class="card-img-top" alt="Responsável 3">
                    <div class="card-body">
                        <h5 class="card-title">Robertha Rezende</h5>
                        <p class="card-text">Diretora de Comunicação</p>
                        <p><strong>Telefone:</strong> (31) 98765-4321</p>
                        <p><strong>LinkedIn:</strong> 
                            <a href="https:" target="_blank">Fernanda Lima no LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da primeira linha -->

        <!-- Responsável 4 -->
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/responsavel4.jpg" class="card-img-top" alt="Responsável 4">
                    <div class="card-body">
                        <h5 class="card-title">Victor Araújo</h5>
                        <p class="card-text">Supervisor de TI</p>
                        <p><strong>Telefone:</strong> (41) 91234-6789</p>
                        <p><strong>LinkedIn:</strong> 
                            <a href="https:" target="_blank">Roberto Alves no LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da segunda linha -->
    </div> <!-- Fim do container -->
    `,
    data() {
        return {
            // Dados adicionais podem ser adicionados aqui, caso necessário
        };
    },
};

