// Décompte jusqu'en 2025
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.textContent = `2025 dans ${days}j ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownElement.textContent = 'Bonne et Heureuse Année 2025 ! 🎉';
  }
}

setInterval(updateCountdown, 1000);

// Fonction pour créer les confettis
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    confettiContainer.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
    confettiContainer.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durée de chute aléatoire
    confettiContainer.style.opacity = Math.random(); // Opacité aléatoire
    document.body.appendChild(confettiContainer);
  
    // Supprimer le confetti après animation
    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  }
  
  // Lancer des confettis à intervalles réguliers
  setInterval(createConfetti, 300);

  // by Abdoul Rachid BISSARE / +229 01 63 61 49 80  