document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-type]");

  elements.forEach((el) => {
    const text = el.getAttribute("data-type");
    let speed = Number(el.getAttribute("data-speed")) || 50;
    const delay = Number(el.getAttribute("data-delay")) || 0;

    // Special speed for #about
    if (el.id === "about") {
      speed = Number(el.getAttribute("data-speed")) || 15;
    }

    el.textContent = "";
    let index = 0;

    setTimeout(() => {
      function type() {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        } else {
          // Remove blinking cursor when done
          el.classList.add("stop-cursor");
        }
      }
      type();
    }, delay);
  });
});

function sendEmail(event) {
  event.preventDefault();

  const recipient = document.getElementById("recipient-name").value.trim();
  const message = document.getElementById("message-text").value.trim();

  if (!recipient || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const subject = encodeURIComponent("New Message from Portfolio");
  const body = encodeURIComponent(message);

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}
