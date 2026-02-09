document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-type]");

  elements.forEach((el) => {
    const text = el.getAttribute("data-type");
    const speed = el.getAttribute("data-speed") || 50;
    const delay = el.getAttribute("data-delay") || 0;

    el.textContent = "";
    let index = 0;

    setTimeout(() => {
      function type() {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        }
      }
      type();
    }, delay);
  });
});
