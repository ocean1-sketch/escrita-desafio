/* ===== LISTAS INICIAIS (SEM "PERDA") ===== */

let temas = JSON.parse(localStorage.getItem("temas")) || [
  "Culpa","Solidão","Identidade","Vazio",
  "Medo do desconhecido","Obsessão","Redenção",
  "Negação","Isolamento","Segredo","Decadência","Esperança frágil"
];

let locais = JSON.parse(localStorage.getItem("locais")) || [
  "Casa isolada","Apartamento pequeno","Cidade pequena","Estrada deserta",
  "Prédio abandonado","Hospital","Escola antiga","Quarto fechado",
  "Motel de beira de estrada","Zona rural","Litoral vazio","Lugar indefinido"
];

let visoes = JSON.parse(localStorage.getItem("visoes")) || [
  "Primeira pessoa",
  "Terceira pessoa limitada",
  "Terceira pessoa onisciente"
];

let tons = JSON.parse(localStorage.getItem("tons")) || [
  "Melancólico","Opressivo","Angustiante",
  "Tenso","Frio","Nostálgico","Sombrio","Reflexivo"
];

let generos = JSON.parse(localStorage.getItem("generos")) || [
  "Terror","Suspense","Drama",
  "Mistério","Fantástico","Ficção científica","Existencial"
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

/* ===== FUNÇÕES UTILITÁRIAS ===== */

function preencher(id, lista) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  lista.forEach(item => {
    const opt = document.createElement("option");
    opt.textContent = item;
    select.appendChild(opt);
  });
}

function salvarTudo() {
  localStorage.setItem("temas", JSON.stringify(temas));
  localStorage.setItem("locais", JSON.stringify(locais));
  localStorage.setItem("visoes", JSON.stringify(visoes));
  localStorage.setItem("tons", JSON.stringify(tons));
  localStorage.setItem("generos", JSON.stringify(generos));
}

/* ===== ADIÇÃO DE IDEIAS ===== */

function addTema() {
  const v = temaNovo.value.trim();
  if (!v || temas.includes(v)) return;
  temas.push(v);
  salvarTudo();
  preencher("tema", temas);
  temaNovo.value = "";
}

function addLocal() {
  const v = localNovo.value.trim();
  if (!v || locais.includes(v)) return;
  locais.push(v);
  salvarTudo();
  preencher("local", locais);
  localNovo.value = "";
}

function addVisao() {
  const v = visaoNovo.value.trim();
  if (!v || visoes.includes(v)) return;
  visoes.push(v);
  salvarTudo();
  preencher("visao", visoes);
  visaoNovo.value = "";
}

function addTom() {
  const v = tomNovo.value.trim();
  if (!v || tons.includes(v)) return;
  tons.push(v);
  salvarTudo();
  preencher("tom", tons);
  tomNovo.value = "";
}

function addGenero() {
  const v = generoNovo.value.trim();
  if (!v || generos.includes(v)) return;
  generos.push(v);
