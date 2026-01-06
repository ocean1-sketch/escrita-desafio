const temas = [
  "Culpa", "Solidão", "Identidade", "Perda", "Vazio"
];

const locais = [
  "Casa isolada", "Cidade pequena", "Estrada deserta", "Quarto fechado"
];

const visoes = [
  "Primeira pessoa", "Terceira pessoa limitada", "Terceira pessoa onisciente"
];

const perguntas = [
  "O que o personagem evita lembrar?",
  "Que erro do passado ainda influencia tudo?",
  "O que ele teme perder se agir?",
  "Qual verdade ele se recusa a aceitar?",
  "O que está realmente em jogo?"
];

function preencher(id, lista) {
  const select = document.getElementById(id);
  lista.forEach(item => {
    const opt = document.createElement("option");
    opt.textContent = item;
    select.appendChild(opt);
  });
}

preencher("tema", temas);
preencher("local", locais);
preencher("visao", visoes);

function gerar() {
  const tema = temaSelect.value;
  const local = localSelect.value;
  const visao = visaoSelect.value;

  const texto = `Em ${visao.toLowerCase()}, a narrativa se passa em ${local.toLowerCase()}. O conflito central envolve ${tema.toLowerCase()}.`;

  resultado.innerText = texto;
  pergunta.innerText = "🧭 " + perguntas[Math.floor(Math.random() * perguntas.length)];
}

const temaSelect = document.getElementById("tema");
const localSelect = document.getElementById("local");
const visaoSelect = document.getElementById("visao");
const resultado = document.getElementById("resultado");
const pergunta = document.getElementById("pergunta");
