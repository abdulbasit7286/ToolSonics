function initNavbar() {

  const toolsMenu = document.getElementById("toolsMenu");
  const infoMenu = document.getElementById("infoMenu");
  const toolsContainer = document.getElementById("toolsContainer");

  const openToolsBtn = document.getElementById("openToolsMenu");
  const closeToolsBtn = document.getElementById("closeToolsMenu");
  const openInfoBtn = document.getElementById("openInfoMenu");

  if (!toolsMenu || !openToolsBtn) {
    console.warn("Navbar not ready yet");
    return;
  }

  /* OPEN ALL TOOLS */
  openToolsBtn.onclick = () => {
    toolsMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  /* CLOSE ALL TOOLS */
  closeToolsBtn.onclick = () => {
    toolsMenu.style.display = "none";
    document.body.style.overflow = "auto";
  };

  /* INFO MENU */
  openInfoBtn.onclick = () => {
    infoMenu.style.display =
      infoMenu.style.display === "block" ? "none" : "block";
  };

  /* LOAD TOOLS */
  const cards = document.querySelectorAll(".tool-card");

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

/* ⏳ WAIT UNTIL NAVBAR IS LOADED */
setTimeout(initNavbar, 300);
