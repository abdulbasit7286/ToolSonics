const toolsMenu = document.getElementById("toolsMenu");
const infoMenu = document.getElementById("infoMenu");
const toolsContainer = document.querySelector(".ts-menu-content");

/* OPEN / CLOSE */
document.getElementById("openToolsMenu").onclick = () => {
  toolsMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
};

document.getElementById("closeToolsMenu").onclick = () => {
  toolsMenu.style.display = "none";
  document.body.style.overflow = "auto";
};

document.getElementById("openInfoMenu").onclick = () => {
  infoMenu.style.display =
    infoMenu.style.display === "block" ? "none" : "block";
};

/* AUTO LOAD TOOLS FROM INDEX PAGE */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tool-card a.tool-button");

  cards.forEach(btn => {
    const card = btn.closest(".tool-card");
    const name = card.querySelector("h3").innerText;
    const url = btn.getAttribute("href");

    const link = document.createElement("a");
    link.href = url;
    link.innerText = name;

    toolsContainer.appendChild(link);
  });
});
