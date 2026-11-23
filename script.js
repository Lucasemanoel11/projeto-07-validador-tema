const botaoTema = document.querySelector("#botao-tema");
const formulario = document.querySelector("#formulario-acesso");
const campoSenha = document.querySelector("#campo-senha");
const mensagemValidacao = document.querySelector("#mensagem-validacao");

function validarSenha(valor) {
  const temTamanhoMinimo = valor.length >= 8;
  const temNumero = /[0-9]/.test(valor);
  return temTamanhoMinimo && temNumero;
}

function atualizarVisualSenha() {
  const senhaAtual = campoSenha.value;
  const senhaValida = validarSenha(senhaAtual);

  formulario.classList.remove("estado-valido", "estado-invalido");

  if (senhaAtual.length === 0) {
    mensagemValidacao.textContent = "A senha precisa de pelo menos 8 caracteres e 1 número.";
    return false;
  }

  if (senhaValida) {
    formulario.classList.add("estado-valido");
    mensagemValidacao.textContent = "Critérios atingidos: 8+ caracteres e número presente.";
    return true;
  }

  formulario.classList.add("estado-invalido");
  mensagemValidacao.textContent = "Critérios pendentes: use ao menos 8 caracteres e 1 número.";
  return false;
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-claro");
  document.body.classList.toggle("tema-escuro");
});

campoSenha.addEventListener("input", atualizarVisualSenha);

formulario.addEventListener("submit", function (evento) {
  const senhaValida = atualizarVisualSenha();

  if (!senhaValida) {
    evento.preventDefault();
    campoSenha.focus();
  }
});