var index = 0;
var slides = document.getElementsByClassName("slide");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
  setTimeout(showSlide, 2000); // Définit l'intervalle entre chaque diapositive (2 secondes dans cet exemple)
}

showSlide(); // Appelle la fonction pour démarrer le diaporama
