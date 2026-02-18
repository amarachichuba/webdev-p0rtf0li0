document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-type]");

  elements.forEach(el => {
    const text = el.getAttribute("data-type");
    const speed = parseInt(el.getAttribute("data-speed")) || 50;
    const delay = parseInt(el.getAttribute("data-delay")) || 0;

    el.textContent = "";
    let i = 0;

    setTimeout(() => {
      const typing = setInterval(() => {
        el.textContent += text[i];
        i++;

        if (i === text.length) {
          clearInterval(typing);
          el.classList.add("stop-cursor");
        }
      }, speed);
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
