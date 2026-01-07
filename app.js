/* ==================================================
   ESCRITA DESAFIO – APP MOBILE (JS COMPLETO)
   ================================================== */

/* ---------- PERGUNTAS ---------- */
const perguntas = [
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

/* ---------- STORAGE ---------- */
function carregar(key, padrao) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : padrao;
  } catch {
    return padrao;
  }
}
function salvar(key, valor) {
  localStorage.setItem(key, JSON.stringify(valor));
}

/* ---------- LISTAS COMPLETAS (IGUAIS AO APP PC) ---------- */
let temas = carregar("temas", [
  "Culpa","Solidão","Identidade","Vazio",
  "Medo do desconhecido","Obsessão","Redenção",
  "Negação","Isolamento","Dependência emocional",
  "Ruptura","Segredo","Decadência","Esperança frágil"
]);

let locais = carregar("locais", [
  "Casa isolada","Apartamento pequeno","Cidade pequena",
  "Estrada deserta","Prédio abandonado","Hospital",
  "Escola antiga","Quarto fechado","Motel de beira de estrada",
  "Subsolo","Zona rural","Litoral vazio",
  "Bairro esquecido","Interior de um veículo","Lugar indefinido"
]);

let visoes = carregar("visoes", [
  "Primeira pessoa",
  "Terceira pessoa limitada",
  "Terceira pessoa onisciente"
]);

let tons = carregar("tons", [
  "Melancólico","Opressivo","Angustiante",
  "Tenso","Frio","Nostálgico",
  "Sombrio","Desesperado",
  "Reflexivo","Ameaçador"
]);

let generos = carregar("generos", [
  "Terror","Suspense","Drama",
  "Ficção científica","Mistério",
  "Fantástico","Existencial"
]);

/* ---------- HELPERS ---------- */
function $(id) {
  return document.getElementById(id);
}

function escolherAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function preencherSelect(id, lista) {
  const s = $(id);
  if (!s) return;
  s.innerHTML = "";
  lista.forEach(item => {
    const o = document.createElement("option");
    o.value = item;
    o.textContent = item;
    s.appendChild(o);
  });
}

function salvarTudo() {
  salvar("temas", temas);
  salvar("locais", locais);
  salvar("visoes", visoes);
  salvar("tons", tons);
  salvar("generos", generos);
}

function adicionar(lista, storageKey, inputId, selectId) {
  const input = $(inputId);
  if (!input) return;
  const v = input.value.trim();
  if (!v || lista.includes(v)) return;

  lista.push(v);
  salvar(storageKey, lista);
  preencherSelect(selectId, lista);
  input.value = "";
}

/* ---------- GERADORES ---------- */
function gerarTexto(tema, local, visao, tom, genero) {
  return (
    `Em ${visao.toLowerCase()}, a narrativa se passa em ${local.toLowerCase()}.\n` +
    `O conflito central envolve ${tema.toLowerCase()}, ` +
    `com um tom ${tom.toLowerCase()} dentro do ${genero.toLowerCase()}.`
  );
}

function gerar() {
  const tema   = $("tema").value;
  const local  = $("local").value;
  const visao  = $("visao").value;
  const tom    = $("tom").value;
  const genero = $("genero").value;

  $("resultado").innerText = gerarTexto(tema, local, visao, tom, genero);
  $("pergunta").innerText =
    "🧭 " + escolherAleatorio(perguntas);
}

function gerarAleatorio() {
  const tema   = escolherAleatorio(temas);
  const local  = escolherAleatorio(locais);
  const visao  = escolherAleatorio(visoes);
  const tom    = escolherAleatorio(tons);
  const genero = escolherAleatorio(generos);

  // Atualiza selects visualmente
  $("tema").value = tema;
  $("local").value = local;
  $("visao").value = visao;
  $("tom").value = tom;
  $("genero").value = genero;

  $("resultado").innerText = gerarTexto(tema, local, visao, tom, genero);
  $("pergunta").innerText =
    "🧭 " + escolherAleatorio(perguntas);
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener("DOMContentLoaded", () => {
  preencherSelect("tema", temas);
  preencherSelect("local", locais);
  preencherSelect("visao", visoes);
  preencherSelect("tom", tons);
  preencherSelect("genero", generos);

  $("btnTema")?.addEventListener("click", () =>
    adicionar(temas, "temas", "temaNovo", "tema")
  );
  $("btnLocal")?.addEventListener("click", () =>
    adicionar(locais, "locais", "localNovo", "local")
  );
  $("btnVisao")?.addEventListener("click", () =>
    adicionar(visoes, "visoes", "visaoNovo", "visao")
  );
  $("btnTom")?.addEventListener("click", () =>
    adicionar(tons, "tons", "tomNovo", "tom")
  );
  $("btnGenero")?.addEventListener("click", () =>
    adicionar(generos, "generos", "generoNovo", "genero")
  );

  $("btnGerar")?.addEventListener("click", gerar);
  $("btnAleatorio")?.addEventListener("click", gerarAleatorio);
});
