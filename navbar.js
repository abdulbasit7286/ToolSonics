<script>
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("allToolsBtn");
  const dropdown = document.getElementById("allToolsDropdown");

  if (!btn || !dropdown) return;

  // Toggle on click
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });
});
</script>
