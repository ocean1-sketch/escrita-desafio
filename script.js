/* ========= LISTAS GRANDES (DESKTOP-LIKE) ========= */

let temas = JSON.parse(localStorage.getItem("temas")) || [
  "Culpa","Solidão","Identidade","Perda","Vazio","Medo do desconhecido",
  "Obsessão","Redenção","Negação","Isolamento","Segredo","Decadência","Esperança frágil"
];

let locais = JSON.parse(localStorage.getItem("locais")) || [
  "Casa isolada","Apartamento pequeno","Cidade pequena","Estrada deserta",
  "Prédio abandonado","Hospital","Escola antiga","Quarto fechado",
  "Motel de beira de estrada","Zona rural","Litoral vazio","Lugar indefinido"
];

let visoes = [
  "Primeira pessoa",
  "Terceira pessoa limitada",
  "Terceira pessoa onisciente"
];

let tons = [
  "Melancólico","Opressivo","Angustiante","Tenso",
  "Frio","Nostálgico","Sombrio","Reflexivo"
];

let generos = [
  "Terror","Suspense","Drama","Mistério",
  "Fantástico","Ficção científica","Existencial"
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

/* ========= FUNÇÕES ========= */

function preencher(id, lista) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  lista.forEach(item => {
    const opt = document.createElement("option");
    opt.textContent = item;
    select.appendChild(opt);
  });
}

function salvar() {
  localStorage.setItem("temas", JSON.stringify(temas));
  localStorage.setItem("locais", JSON.stringify(locais));
}

function addTema() {
  const valor = document.getElementById("temaNovo").value.trim();
  if (!valor || temas.includes(valor)) return;
  temas.push(valor);
  salvar();
  preencher("tema", temas);
  document.getElementById("temaNovo").value = "";
}

function addLocal() {
  const valor = document.getElementById("localNovo").value.trim();
  if (!valor || locais.includes(valor)) return;
  locais.push(valor);
  salvar();
  preencher("local", locais);
  document.getElementById("localNovo").value = "";
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

/* ========= INICIALIZA ========= */

preencher("tema", temas);
preencher("local", locais);
preencher("visao", visoes);
preencher("tom", tons);
preencher("genero", generos);
