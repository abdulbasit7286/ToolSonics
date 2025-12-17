<script>
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openMobile");
  const closeBtn = document.getElementById("closeMobile");
  const menu = document.getElementById("mobileMenu");

  console.log(openBtn, closeBtn, menu); // DEBUG

  if (!openBtn || !closeBtn || !menu) {
    console.log("❌ Mobile navbar elements missing");
    return;
  }

  openBtn.addEventListener("click", function () {
    menu.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    menu.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
</script>
