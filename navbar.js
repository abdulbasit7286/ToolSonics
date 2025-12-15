document.addEventListener("DOMContentLoaded", () => {

  /* ELEMENTS */
  const toolsMenu = document.getElementById("toolsMenu");
  const infoMenu = document.getElementById("infoMenu");
  const toolsContainer = document.getElementById("toolsContainer");
  const openToolsBtn = document.getElementById("openToolsMenu");
  const closeToolsBtn = document.getElementById("closeToolsMenu");
  const openInfoBtn = document.getElementById("openInfoMenu");

  /* SAFETY CHECK */
  if (!toolsMenu || !infoMenu || !toolsContainer) {
    console.error("Navbar elements not found");
    return;
  }

  /* OPEN ALL TOOLS MENU */
  openToolsBtn.addEventListener("click", () => {
    toolsMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  /* CLOSE ALL TOOLS MENU */
  closeToolsBtn.addEventListener("click", () => {
    toolsMenu.style.display = "none";
    document.body.style.overflow = "auto";
  });

  /* INFO MENU TOGGLE */
  openInfoBtn.addEventListener("click", () => {
    infoMenu.style.display =
      infoMenu.style.display === "block" ? "none" : "block";
  });

  /* AUTO LOAD 48 TOOLS FROM HOME PAGE */
  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(card => {
    const title = card.querySelector("h3");
    const button = card.querySelector("a.tool-button");

    if (!title || !button) return;

    const link = document.createElement("a");
    link.href = button.getAttribute("href");
    link.textContent = title.textContent;

    toolsContainer.appendChild(link);
  });

});
