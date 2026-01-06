function load(key, defaults) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaults;
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/* ===== DADOS ===== */
let temas = load("temas", [
  "Culpa","Solidão","Identidade","Perda","Vazio","Segredo","Obsessão","Redenção"
]);

let locais = load("locais", [
  "Casa isolada","Cidade pequena","Estrada deserta","Quarto fechado","Prédio abandonado"
]);

let visoes = [
  "Primeira pessoa",
  "Terceira pessoa limitada",
  "Terceira pessoa onisciente"
];

let tons = [
  "Melancólico",
  "Opressivo",
  "Tenso",
  "Sombrio",
  "Reflexivo"
];

let generos = [
  "Terror",
  "Suspense",
  "Drama",
  "Mistério",
  "Fantástico"
];

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

/* ===== UI ===== */
function preencher(id, lista) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  lista.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  });
}

function atualizarTudo() {
  preencher("tema", temas);
  preencher("local", locais);
  preencher("visao", visoes);
  preencher("tom", tons);
  preencher("genero", generos);
}

/* ===== AÇÕES ===== */
function adicionar(tipo, inputId, lista, storageKey, selectId) {
  const input = document.getElementById(inputId);
  const valor = input.value.trim();

  if (!valor) return;

  if (lista.includes(valor)) {
    alert("Essa ideia já existe.");
    return;
  }

  lista.push(valor);
  save(storageKey, lista);
  preencher(selectId, lista);
  input.value = "";
}

function gerar() {
  const tema = document.getElementById("tema").value;
  const local = document.getElementById("local").value;
  const visao = document.getElementById("visao").value;
  const tom = document.getElementById("tom").value;
  const genero = document.getElementById("genero").value;

  document.getElementById("resultado").innerText =
    `Em ${visao.toLowerCase()}, a narrativa se passa em ${local.toLowerCase()}.
O conflito central envolve ${tema.toLowerCase()}, com um tom ${tom.toLowerCase()} dentro do ${genero.toLowerCase()}.`;

  document.getElementById("pergunta").innerText =
    "🧭 " + perguntas[Math.floor(Math.random() * perguntas.length)];
}

/* ===== EVENTOS ===== */
document.addEventListener("DOMContentLoaded", () => {
  atualizarTudo();

  document.getElementById("addTema").onclick = () =>
    adicionar("tema", "temaNovo", temas, "temas", "tema");

  document.getElementById("addLocal").onclick = () =>
    adicionar("local", "localNovo", locais, "locais", "local");

  document.getElementById("gerarBtn").onclick = gerar;
});
