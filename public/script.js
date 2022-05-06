const close_alert = () => {
  const close = document.querySelector("#close-message");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
};

close_alert();
