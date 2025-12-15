document.addEventListener("DOMContentLoaded", function () {

  const openTools = document.getElementById("openToolsMenu");
  const closeTools = document.getElementById("closeToolsMenu");
  const toolsMenu = document.getElementById("toolsMenu");

  const openInfo = document.getElementById("openInfoMenu");
  const infoMenu = document.getElementById("infoMenu");

  if (!openTools || !toolsMenu) return;

  openTools.addEventListener("click", () => {
    toolsMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeTools.addEventListener("click", () => {
    toolsMenu.style.display = "none";
    document.body.style.overflow = "auto";
  });

  openInfo.addEventListener("click", () => {
    infoMenu.style.display =
      infoMenu.style.display === "block" ? "none" : "block";
  });

});
