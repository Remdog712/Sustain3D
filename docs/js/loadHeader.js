document.addEventListener("DOMContentLoaded", async () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  const glossaryTargets = {
    "3d model": "term-3d-model",
    repository: "term-repository",
    repositories: "term-repository",
    metadata: "term-metadata",
    paradata: "term-paradata",
    "preservation master": "term-preservation-master",
    "preservation masters": "term-preservation-master",
    "access derivative": "term-access-derivative",
    "access derivatives": "term-access-derivative",
    "print derivative": "term-print-derivative",
    "print derivatives": "term-print-derivative",
    fixity: "term-fixity",
    provenance: "term-provenance",
    version: "term-version",
    versions: "term-version",
    "rights statement": "term-rights-statement",
    "rights statements": "term-rights-statement",
    "access level": "term-access-level",
    "access levels": "term-access-level",
    fair: "term-fair",
    care: "term-care",
    doi: "term-doi",
    dois: "term-doi"
  };

  const pageSources = {
    "page-home": [
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" },
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" },
      { label: "Open Preservation - Preserving 3D Scans", url: "https://openpreservation.org/blogs/preserving-3d-scans-a-journey/" }
    ],
    "page-workflow": [
      { label: "Digital Preservation Coalition - Preserving 3D (DOI)", url: "https://doi.org/10.7207/twgn21-14" },
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" },
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" }
    ],
    "page-repo": [
      { label: "Harvard Data Management - File Naming Conventions", url: "https://datamanagement.hms.harvard.edu/plan-design/file-naming-conventions" },
      { label: "Duke Libraries - Recommended Preservation Formats", url: "https://library.duke.edu/using/policies/recommended-file-formats-digital-preservation" },
      { label: "Open Preservation - Preserving 3D Scans", url: "https://openpreservation.org/blogs/preserving-3d-scans-a-journey/" }
    ],
    "page-files": [
      { label: "Harvard Medical School - File Naming Conventions", url: "https://datamanagement.hms.harvard.edu/plan-design/file-naming-conventions" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "Khronos - glTF Overview", url: "https://www.khronos.org/gltf/" },
      { label: "Library of Congress - STL Format Description", url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000504.shtml" }
    ],
    "page-metadata": [
      { label: "University of Melbourne - 3D Model Metadata Guide", url: "https://lms.unimelb.edu.au/staff/guides/pedestal-3d/3d-model-metadata-guide" },
      { label: "Proposal for FAIR Management of 3D Data (DOI)", url: "https://doi.org/10.29173/iq20" },
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" }
    ],
    "page-storage": [
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "UK Data Service - Costing to Share Data", url: "https://ukdataservice.ac.uk/learning-hub/research-data-management/plan-to-share/costing/" }
    ],
    "page-policies": [
      { label: "WIPO - Copyright Exceptions: An Archivist's Perspective", url: "https://www.wipo.int/en/web/wipo-magazine/article-details/?assetRef=40079&title=copyright-exceptions-an-archivists-perspective" },
      { label: "Michael Weinberg - 3D Scanning and Copyright", url: "https://michaelweinberg.org/docs/white-paper-3d-scanning-world-without-copyright.pdf" },
      { label: "DataCite DOI Services", url: "https://datacite.org/" }
    ],
    "page-resources": [
      { label: "Digital Preservation Coalition - Preserving 3D (DOI)", url: "https://doi.org/10.7207/twgn21-14" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "Zenodo", url: "https://zenodo.org/" }
    ],
    "page-practice": [
      { label: "Sketchfab - Lake Erie Lighthouse Example", url: "https://sketchfab.com/3d-models/lake-erie-lighthouse-a61c0c8c840d4fe4be794b275c1a4f9d" },
      { label: "Artec 3D - Ogham Stone Digitization Case", url: "https://www.artec3d.com/cases/digitizing-irelands-ogham-inscribed-stones" },
      { label: "Penn State Honors Library Submission", url: "https://honors.libraries.psu.edu/files/final_submissions/10035" }
    ]
  };

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
    <span>&copy; <span id="year"></span> Sustain 3D - Licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer">Creative Commons CC0 1.0 Universal</a></span>
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

  const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const addGlossaryLinks = () => {
    if (document.body.classList.contains("page-resources")) return;
    const main = document.querySelector("main");
    if (!main) return;

    const terms = Object.keys(glossaryTargets).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`\\b(${terms.map(escapeRegExp).join("|")})\\b`, "gi");
    const skipTags = new Set(["A", "CODE", "PRE", "SCRIPT", "STYLE", "BUTTON", "TEXTAREA", "INPUT", "SELECT"]);
    const textNodes = [];
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let parent = node.parentElement;
        while (parent) {
          if (skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.classList.contains("glossary")) return NodeFilter.FILTER_REJECT;
          if (parent.classList.contains("sources-lowkey")) return NodeFilter.FILTER_REJECT;
          parent = parent.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let current = walker.nextNode();
    while (current) {
      textNodes.push(current);
      current = walker.nextNode();
    }

    textNodes.forEach((node) => {
      const text = node.nodeValue;
      regex.lastIndex = 0;
      if (!regex.test(text)) return;

      const fragment = document.createDocumentFragment();
      regex.lastIndex = 0;
      let lastIndex = 0;
      let match = regex.exec(text);

      while (match) {
        const matchText = match[0];
        const targetId = glossaryTargets[matchText.toLowerCase()];
        if (targetId) {
          if (match.index > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
          }
          const link = document.createElement("a");
          link.className = "glossary-link";
          link.href = `./resources.html#${targetId}`;
          link.textContent = matchText;
          fragment.appendChild(link);
          lastIndex = match.index + matchText.length;
        }
        match = regex.exec(text);
      }

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      if (node.parentNode) node.parentNode.replaceChild(fragment, node);
    });
  };

  const appendLowKeySources = () => {
    const main = document.querySelector("main.wrap");
    if (!main || main.querySelector(".sources-lowkey")) return;
    const pageClass = Array.from(document.body.classList).find((name) => name.startsWith("page-"));
    if (!pageClass || !pageSources[pageClass]) return;
    if (pageClass === "page-resources") return;

    const sourceList = pageSources[pageClass]
      .map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`)
      .join("");
    const section = document.createElement("section");
    section.className = "card sources-lowkey";
    section.innerHTML = `
      <h2>Sources</h2>
      <ul>${sourceList}</ul>
    `;
    main.appendChild(section);
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
  addGlossaryLinks();
  appendLowKeySources();
});
