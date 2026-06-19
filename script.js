document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const themeText = document.querySelector(".theme-text");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  updateThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      updateThemeButton();
    });
  }

  function updateThemeButton() {
    const isDark = body.classList.contains("dark-mode");

    if (themeIcon) {
      themeIcon.textContent = isDark ? "☀" : "☾";
    }

    if (themeText) {
      themeText.textContent = isDark ? "Light" : "Dark";
    }
  }
});