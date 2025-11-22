// Diccionario de idiomas
const textos = {
  es: {
    paginaTitulo: "Carta / Ficha de alérgenos",
    paginaSubtitulo: "Mónaco - Bar & Restaurante",
    titulo: "Aviso para personas con alergias o intolerancias:",
    texto:
      "Este establecimiento tiene a disposición de sus clientes información sobre los platos que ofrece. Consulte a nuestro personal.",
    textoAdicional:
      "Esta carta / fichas de alérgenos informa de todas las alergias e intolerancias alimentarias descritas en los ingredientes presentes en los diferentes platos. Si es alérgico o padece alguna intolerancia alimentaria lea atentamente la información que se presenta y en caso de duda sobre una posible reacción, evite pedir el plato."
  },
  cat: {
    paginaTitulo: "Carta / Fitxa d’al·lèrgens",
    paginaSubtitulo: "Mónaco - Bar & Restaurant",
    titulo: "Avís per a les persones amb al·lèrgies o intoleràncies:",
    texto:
      "Aquest establiment té a disposició dels seus clients informació dels plats que ofereix. Consulteu el nostre personal.",
    textoAdicional:
      "Aquesta carta / fitxa d’al·lèrgens informa de totes les al·lèrgies i intoleràncies alimentàries descrites en els ingredients presents en els diferents plats. Si és al·lèrgic o pateix alguna intolerància alimentària, llegeixi atentament la informació i, en cas de dubte sobre una possible reacció, eviti demanar el plat."
  },
  en: {
    paginaTitulo: "Allergen Menu / Information Sheet",
    paginaSubtitulo: "Monaco - Bar & Restaurant",
    titulo: "Notice for people with allergies or intolerances:",
    texto:
      "This establishment has information about the dishes it offers available for customers. Please ask our staff.",
    textoAdicional:
      "This allergen menu provides detailed information on all allergies and intolerances related to the ingredients used in our dishes. If you have a food allergy or intolerance, please read this information carefully. If you are unsure about any possible reaction to a dish, avoid ordering it."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const tituloIntro = document.getElementById("titulo-intro");
  const textoIntro = document.getElementById("texto-intro");
  const textoAdicional = document.getElementById("texto-adicional");

  const tituloPrincipal = document.getElementById("titulo-principal");
  const subtituloPrincipal = document.getElementById("subtitulo-principal");

  const botonesIdioma = document.querySelectorAll(".menu-idiomas [data-lang]");

  function cambiarIdioma(idioma) {
    const contenido = textos[idioma];
    if (!contenido) return;

    // Intro de alérgenos
    tituloIntro.textContent = contenido.titulo;
    textoIntro.textContent = contenido.texto;
    textoAdicional.textContent = contenido.textoAdicional;

    // Títulos principales
    tituloPrincipal.textContent = contenido.paginaTitulo;
    subtituloPrincipal.textContent = contenido.paginaSubtitulo;

    // Marcar idioma activo
    botonesIdioma.forEach(boton => {
      const lang = boton.getAttribute("data-lang");
      boton.classList.toggle("active-lang", lang === idioma);
    });
  }

  // Eventos click en idiomas
  botonesIdioma.forEach(boton => {
    boton.addEventListener("click", () => {
      const lang = boton.getAttribute("data-lang");
      cambiarIdioma(lang);
      localStorage.setItem("idioma-preferido", lang);
    });
  });

  // Idioma inicial: catalán
  let idiomaGuardado = localStorage.getItem("idioma-preferido");

  if (!idiomaGuardado) {
    idiomaGuardado = "cat";
    localStorage.setItem("idioma-preferido", "cat");
  }

  cambiarIdioma(idiomaGuardado);
});


// ---------------- LOADER ----------------
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const contenido = document.getElementById("contenido");

  // Duración del loader (en milisegundos)
  const DURACION_LOADER = 3500; // 2.5 segundos

  setTimeout(() => {
    loader.classList.add("oculto");
    contenido.style.display = "block";
  }, DURACION_LOADER);
});