let title = document.querySelector("title").textContent;

if (title === "contact") {
  verif();
}
function verif() {
  document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault(); /*pour eviter de partir sur une page vide*/

    alert("formulaire envoyé");
  });
}
