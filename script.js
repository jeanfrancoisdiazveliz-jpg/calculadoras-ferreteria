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
