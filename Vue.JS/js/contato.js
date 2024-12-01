const PaginaContato = {
    template: `
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img src="Imagens/contato.jpg" class="img-fluid" alt="Imagem de contato">
            <h1>Entre em contato conosco</h1>
            <form>
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome"   
   required>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="form-group">   
  
                <label for="mensagem">Mensagem:</label>   
  
                <textarea class="form-control" id="mensagem" rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form> 1    
  1.
  github.com
  github.com
  
            <h2>Nossos Contatos</h2>
            <p>
              <strong>David:</strong> david@email.com<br>
              <strong>Felipe:</strong> felipe@email.com<br>
              <strong>Roberta:</strong> roberta@email.com<br>
              <strong>Victor:</strong> victor@email.com
            </p>
          </div>
        </div>
      </div>
    `,
    // ... outros métodos e dados
};
