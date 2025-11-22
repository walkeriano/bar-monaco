// Diccionario de idiomas
const textos = {
  es: {
    paginaTitulo: "Carta / Ficha de alérgenos",
    paginaSubtitulo: "Mónaco - Bar & Restaurante",
    titulo: "Aviso para personas con alergias o intolerancias:",
    texto:
      "Este establecimiento tiene a disposición de sus clientes información sobre los platos que ofrece. Consulte a nuestro personal."
  },
  cat: {
    paginaTitulo: "Carta / Fitxa d’al·lèrgens",
    paginaSubtitulo: "Mónaco - Bar & Restaurant",
    titulo: "Avís per a les persones amb al·lèrgies o intoleràncies:",
    texto:
      "Aquest establiment té a disposició dels seus clients informació dels plats que ofereix. Consulteu el nostre personal."
  },
  en: {
    paginaTitulo: "Allergen Menu / Information Sheet",
    paginaSubtitulo: "Monaco - Bar & Restaurant",
    titulo: "Notice for people with allergies or intolerances:",
    texto:
      "This establishment has information about the dishes it offers available for customers. Please ask our staff."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const tituloIntro = document.getElementById("titulo-intro");
  const textoIntro = document.getElementById("texto-intro");

  const tituloPrincipal = document.getElementById("titulo-principal");
  const subtituloPrincipal = document.getElementById("subtitulo-principal");

  const botonesIdioma = document.querySelectorAll(".menu-idiomas [data-lang]");

  function cambiarIdioma(idioma) {
    const contenido = textos[idioma];
    if (!contenido) return;

    // Intro de alérgenos
    tituloIntro.textContent = contenido.titulo;
    textoIntro.textContent = contenido.texto;

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
  const idiomaGuardado = localStorage.getItem("idioma-preferido");
  cambiarIdioma(idiomaGuardado || "cat");
});