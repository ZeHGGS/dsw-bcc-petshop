document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = document.getElementById('resposta');
    resposta.innerHTML = <p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>;
    
    document.getElementById('contatoForm').reset();
});