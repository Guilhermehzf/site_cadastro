// Captura o evento de submit do formulário de cadastro
const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtém os valores dos campos de entrada
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Realiza o cadastro ou envia os dados para o servidor
  // Aqui você pode adicionar o código para enviar os dados para o backend ou realizar ações específicas de cadastro

  // Exibe uma mensagem de sucesso
  alert('Cadastro realizado com sucesso!');
});