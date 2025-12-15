(function () {

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(() => {

    const openToolsBtn = document.getElementById("openToolsMenu");
    const closeToolsBtn = document.getElementById("closeToolsMenu");
    const toolsMenu = document.getElementById("toolsMenu");

    const openInfoBtn = document.getElementById("openInfoMenu");
    const infoMenu = document.getElementById("infoMenu");

    if (!openToolsBtn || !toolsMenu) {
      console.warn("Navbar not loaded yet");
      return;
    }

    /* ALL TOOLS */
    openToolsBtn.onclick = () => {
      toolsMenu.style.display = "flex";
      document.body.style.overflow = "hidden";
    };

    closeToolsBtn.onclick = () => {
      toolsMenu.style.display = "none";
      document.body.style.overflow = "auto";
    };

    /* INFO MENU */
    openInfoBtn.onclick = () => {
      infoMenu.style.display =
        infoMenu.style.display === "block" ? "none" : "block";
    };

  });

})();
