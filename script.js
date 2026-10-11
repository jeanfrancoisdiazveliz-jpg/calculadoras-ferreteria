// =======================================================
// Ferretería Don Iván - script.js
// Banner de consentimiento de cookies (requisito AdSense/UE)
// =======================================================

(function () {
  const CONSENT_KEY = "ferreteria-don-ivan-cookie-consent";

  function yaAceptoCookies() {
    try {
      return localStorage.getItem(CONSENT_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  function guardarConsentimiento() {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch (e) {
      // Si localStorage no está disponible, no bloqueamos la navegación.
    }
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.remove();
  }

  function mostrarBannerCookies() {
    if (yaAceptoCookies()) return;

    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #1e293b;
      color: #f8fafc;
      padding: 1rem 1.2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      z-index: 9999;
      font-size: 0.85rem;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.25);
    `;

    banner.innerHTML = `
      <span style="max-width: 600px;">
        Usamos cookies propias y de terceros (incluido Google) para mejorar
        tu experiencia y, cuando corresponda, mostrar publicidad.
        <a href="privacidad.html" style="color:#f97316; text-decoration: underline;">
          Más información
        </a>
      </span>
      <button id="cookie-aceptar" style="
        background-color: #f97316;
        color: white;
        border: none;
        padding: 0.5rem 1.2rem;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
      ">Aceptar</button>
    `;

    document.body.appendChild(banner);
    document
      .getElementById("cookie-aceptar")
      .addEventListener("click", guardarConsentimiento);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mostrarBannerCookies);
  } else {
    mostrarBannerCookies();
  }
})();

/* Botón flotante de WhatsApp — pega este código al final de tu script.js */
(function () {
  var numero = "593962888606";
  var mensaje = "Hola Ferretería Don Iván, quisiera hacer una consulta.";

  var css =
    ".wa-float{position:fixed;right:16px;bottom:20px;z-index:900;width:56px;height:56px;" +
    "border-radius:50%;background:#25d366;color:#fff;display:flex;align-items:center;" +
    "justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.3);text-decoration:none}" +
    ".wa-float:hover{background:#1ebe5b}" +
    "@media print{.wa-float{display:none}}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var a = document.createElement("a");
  a.className = "wa-float";
  a.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Escribir por WhatsApp");
  a.innerHTML =
    '<svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>';
  document.body.appendChild(a);
})();
