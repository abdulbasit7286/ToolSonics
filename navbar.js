function initNavbar() {
  const toolsMenu = document.getElementById("toolsMenu");
  const infoMenu = document.getElementById("infoMenu");
  const toolsContainer = document.getElementById("toolsContainer");

  const openToolsBtn = document.getElementById("openToolsMenu");
  const closeToolsBtn = document.getElementById("closeToolsMenu");
  const openInfoBtn = document.getElementById("openInfoMenu");

  if (!toolsMenu || !openToolsBtn) return;

  /* OPEN / CLOSE MENUS */
  openToolsBtn.onclick = () => {
    toolsMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  closeToolsBtn.onclick = () => {
    toolsMenu.style.display = "none";
    document.body.style.overflow = "auto";
  };

  openInfoBtn.onclick = () => {
    infoMenu.style.display =
      infoMenu.style.display === "block" ? "none" : "block";
  };

  /* 🔥 AUTO LOAD TOOLS — ONLY ON HOME PAGE */
  if (!toolsContainer) return;

  const cards = document.querySelectorAll(".tool-card");

  if (cards.length === 0) return; // 👈 TOOL PAGE SAFETY

  toolsContainer.innerHTML = "";

  cards.forEach(card => {
    const title = card.querySelector("h3");
    const btn = card.querySelector("a.tool-button");
    if (!title || !btn) return;

    const link = document.createElement("a");
    link.href = btn.href;
    link.textContent = title.textContent;

    toolsContainer.appendChild(link);
  });
}

/* WAIT FOR NAVBAR TO LOAD */
setTimeout(initNavbar, 300);
