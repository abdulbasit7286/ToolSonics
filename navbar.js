document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMobile");
  const closeBtn = document.getElementById("closeMobile");
  const menu = document.getElementById("mobileMenu");

  if (!openBtn || !closeBtn || !menu) return;

  openBtn.onclick = () => {
    menu.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  closeBtn.onclick = () => {
    menu.style.display = "none";
    document.body.style.overflow = "auto";
  };
});
