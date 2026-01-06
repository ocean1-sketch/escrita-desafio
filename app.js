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

function carregar(key, padrao) {
  try {
    return JSON.parse(localStorage.getItem(key)) || padrao;
  } catch {
    return padrao;
  }
}

function salvar(key, valor) {
  localStorage.setItem(key, JSON.stringify(valor));
}

let temas   = carregar("temas", ["Culpa","Solidão","Identidade","Vazio","Obsessão","Redenção","Segredo"]);
let locais  = carregar("locais", ["Casa isolada","Cidade pequena","Estrada deserta","Quarto fechado"]);
let visoes  = carregar("visoes", ["Primeira pessoa","Terceira pessoa limitada","Terceira pessoa onisciente"]);
let tons    = carregar("tons", ["Melancólico","Opressivo","Tenso","Sombrio","Reflexivo"]);
let generos = carregar("generos", ["Terror","Suspense","Drama","Mistério","Fantástico"]);

function preencher(id, lista) {
  const s = document.getElementById(id);
  s.innerHTML = "";
  lista.forEach(v => {
    const o = document.createElement("option");
    o.textContent = v;
    s.appendChild(o);
  });
}

function adicionar(lista, key, inputId, selectId) {
  const v = document.getElementById(inputId).value.trim();
  if (!v || lista.includes(v)) return;
  lista.push(v);
  salvar(key, lista);
  preencher(selectId, lista);
  document.getElementById(inputId).value = "";
}

function gerar() {
  const t = tema.value;
  const l = local.value;
  const v = visao.value;
  const tomV = tom.value;
  const g = genero.value;

  resultado.innerText =
    `Em ${v.toLowerCase()}, a narrativa se passa em ${l.toLowerCase()}.
O conflito central envolve ${t.toLowerCase()}, com um tom ${tomV.toLowerCase()} dentro de ${g.toLowerCase()}.`;

  pergunta.innerText =
    "🧭 " + perguntas[Math.floor(Math.random() * perguntas.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  preencher("tema", temas);
  preencher("local", locais);
  preencher("visao", visoes);
  preencher("tom", tons);
  preencher("genero", generos);

  btnTema.onclick   = () => adicionar(temas, "temas", "temaNovo", "tema");
  btnLocal.onclick  = () => adicionar(locais, "locais", "localNovo", "local");
  btnVisao.onclick  = () => adicionar(visoes, "visoes", "visaoNovo", "visao");
  btnTom.onclick    = () => adicionar(tons, "tons", "tomNovo", "tom");
  btnGenero.onclick = () => adicionar(generos, "generos", "generoNovo", "genero");
  btnGerar.onclick  = gerar;
});

