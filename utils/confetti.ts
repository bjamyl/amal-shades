import confetti from 'canvas-confetti';

function startConfetti() {
  const duration = 5000; // Duration in milliseconds
  const animationEnd = Date.now() + duration;
  const colors = ['#bb0000', '#ffffff'];

  function randomInRange(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  }());

  // Explicitly type the interval variable
  let interval: NodeJS.Timeout;
  interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
    }

    // Your confetti animation logic here

  }, 1000);
}


