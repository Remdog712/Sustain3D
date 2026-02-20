document.addEventListener("DOMContentLoaded", async () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  const headerFallback = `<header>
  <div class="wrap">
    <div class="header-row">
      <img src="./assets/logo.png" alt="Sustain 3D logo" class="logo" />
      <div>
        <h1>Sustain 3D</h1>
        <p>Practical 3D data preservation for small institutions</p>
      </div>
    </div>

    <nav>
      <a href="./index.html">Home</a>
      <a href="./workflow.html">Workflow</a>
      <a href="./repository.html">Repository Setup</a>
      <a href="./files.html">Files</a>
      <a href="./metadata.html">Metadata</a>
      <a href="./storage.html">Storage</a>
      <a href="./policies.html">Policies</a>
      <a href="./resources.html">Resources</a>
      <a href="./in-practice.html">In Practice</a>
    </nav>
  </div>
</header>`;

  const footerFallback = `<footer>
  <div class="wrap">
    <span>&copy; <span id="year"></span> Sustain 3D</span>
  </div>
</footer>`;

  const setActiveNav = () => {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((a) => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      if (href === current) a.setAttribute("aria-current", "page");
    });
  };

  const bindTemplateCopyButtons = () => {
    document.querySelectorAll("[data-copy-target]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const targetId = btn.getAttribute("data-copy-target");
        if (!targetId) return;
        const codeEl = document.getElementById(targetId);
        if (!codeEl) return;

        const previousText = btn.textContent;
        try {
          await navigator.clipboard.writeText(codeEl.textContent || "");
          btn.textContent = "Copied";
        } catch (e) {
          btn.textContent = "Copy failed";
          console.warn("Clipboard write failed.", e);
        }
        setTimeout(() => {
          btn.textContent = previousText;
        }, 1400);
      });
    });
  };

  if (headerMount) {
    try {
      const res = await fetch("./partials/headers.html", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      headerMount.innerHTML = await res.text();
    } catch (e) {
      headerMount.innerHTML = headerFallback;
      console.warn("Header partial load failed; using fallback.", e);
    }
    setActiveNav();
  }

  if (footerMount) {
    try {
      const res = await fetch("./partials/footer.html", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      footerMount.innerHTML = await res.text();
    } catch (e) {
      footerMount.innerHTML = footerFallback;
      console.warn("Footer partial load failed; using fallback.", e);
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  bindTemplateCopyButtons();
});
