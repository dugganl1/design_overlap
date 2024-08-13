document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleMode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
});
