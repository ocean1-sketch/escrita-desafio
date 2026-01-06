function load(key, defaults) {
  return JSON.parse(localStorage.getItem(key)) || defaults;
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let temas = load("temas", [
  "Culpa","Solidão","Identidade","Perda","Vazio","Segredo","Obsessão","Redenção"
]);

let locais = load("locais", [
  "Casa isolada","Cidade pequena","Estrada deserta","Quarto fechado","Prédio abandonado"
]);

let visoes = ["Primeira pessoa","Terceira pessoa limitada","Terceira pessoa onisciente"];
let tons = ["Melancólico","Opressivo","Tenso","Sombrio","Reflexivo"];
let generos = ["Terror","Suspense","Drama","Mistério","Fantástico"];

let perguntas = [
  "O que o personagem evita lembrar?",
  "Que erro do passado ainda influencia tudo?",
  "O que ele teme perder se agir?",
  "Qual verdade ele se recusa a aceitar?",
  "O que está realmente em jogo?",
  "Que escolha não pode mais ser adiada?",
  "O que ele se recusa a enfrentar?",
  "O que o personagem evita admitir para si mesmo?",
  "O que ele finge não sentir?",
  "Qual medo guia silenciosamente suas decisões?"
];

function preencher(id, lista) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  lista.forEach(item => {
    const opt = document.createElement("option");
    opt.textContent = item;
    select.appendChild(opt);
  });
}

preencher("tema", temas);
preencher("local", locais);
preencher("visao", visoes);
preencher("tom", tons);
preencher("genero", generos);

function addItem(tipo) {
  const input = document.getElementById(tipo + "Novo");
  const valor = input.value.trim();
  if (!valor) return;

  if (tipo === "tema") {
    temas.push(valor);
    save("temas", temas);
    preencher("tema", temas);
  }

  if (tipo === "local") {
    locais.push(valor);
    save("locais", locais);
    preencher("local", locais);
  }

  input.value = "";
}

function gerar() {
  const tema = temaSelect.value;
  const local = localSelect.value;
  const visao = visaoSelect.value;
  const tom = tomSelect.value;
  const genero = generoSelect.value;

  resultado.innerText =
    `Em ${visao.toLowerCase()}, a narrativa se passa em ${local.toLowerCase()}. 
O conflito central envolve ${tema.toLowerCase()}, com um tom ${tom.toLowerCase()} dentro do ${genero.toLowerCase()}.`;

  pergunta.innerText = "🧭 " + perguntas[Math.floor(Math.random() * perguntas.length)];
}

const temaSelect = document.getElementById("tema");
const localSelect = document.getElementById("local");
const visaoSelect = document.getElementById("visao");
const tomSelect = document.getElementById("tom");
const generoSelect = document.getElementById("genero");
const resultado = document.getElementById("resultado");
const pergunta = document.getElementById("pergunta");
