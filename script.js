const screens = document.querySelectorAll(".screen");
const nameInput = document.getElementById("nameInput");
const nameBtn = document.getElementById("nameBtn");
const nameMsg = document.getElementById("nameMsg");

const passInput = document.getElementById("passInput");
const passBtn = document.getElementById("passBtn");
const passMsg = document.getElementById("passMsg");
const hint = document.getElementById("hint");

let wrongTries = 0;
let nameAttempts = 0;

function goToScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// === NAME CHECK ===
function getNameMessage() {
  if (nameInput.value.trim() === "") return "Please enter your name 😅";
  nameAttempts++;
  if (nameAttempts === 1) return "Try entering correctly, queen 👑";
  if (nameAttempts === 2) return "You entered it wrong again 😆 Try once more 💫";
  if (nameAttempts >= 3) return "Alright 😏 it’s Ashraya — now type it properly 💕";
}

nameBtn.addEventListener("click", () => {
  const val = nameInput.value.trim().toLowerCase();
  if (val === "ashraya" || val === "queen") {
    nameMsg.textContent = "";
    goToScreen("screen2");
  } else {
    nameMsg.textContent = getNameMessage();
  }
});

// === PASSWORD CHECK ===
passBtn.addEventListener("click", () => {
  const val = passInput.value.trim();
  if (val === "17651") {
    passMsg.textContent = "";
    goToScreen("screen3");
    confettiBurst();
    startPoem();
  } else {
    wrongTries++;
    if (wrongTries === 1) {
      passMsg.textContent = "Hmm… that’s not the one 😅";
      hint.classList.remove("hidden");
    } else if (wrongTries === 2) {
      passMsg.textContent = "Try one more time 😉";
    } else {
      passMsg.textContent = "You don’t remember… text Sai to know your password 📱";
    }
    passInput.value = "";
    passInput.focus();
  }
});

nameInput.addEventListener("keydown", e => { if (e.key === "Enter") nameBtn.click(); });
passInput.addEventListener("keydown", e => { if (e.key === "Enter") passBtn.click(); });

// === CONFETTI ===
function confettiBurst() {
  const n = 80;
  for (let i = 0; i < n; i++) {
    const piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.left = (Math.random() * 100) + "vw";
    piece.style.top = "-10px";
    piece.style.width = "8px";
    piece.style.height = "14px";
    piece.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
    piece.style.borderRadius = "2px";
    piece.style.zIndex = "9999";
    piece.style.transition = "transform 1.2s ease-out, top 1.2s ease-out";
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.top = "110vh";
      piece.style.transform = `translate(${(Math.random()*2-1)*200}px, 0) rotate(${Math.random()*360}deg)`;
    });
    setTimeout(() => piece.remove(), 1400);
  }
}

// === POEM ===
function startPoem() {
  const poemLines = [
    "We met once upon a moving train, 🚆",
    "A moment brief — yet not in vain. 💫",
    "Since then, the bond has softly grown, 💕",
    "In quiet ways that hearts have known. 🌸",
    "",
    "We don’t talk much, but still, I feel, 💭",
    "That vibe so good, that warmth so real. ☀️",
    "You’re strong, you shine — in all you do, 🌟",
    "This idiot’s always here for you. 😄",
    "",
    "So here’s my wish, on your special day 🎂",
    "May joy and light come all your way. 🌈",
    "Good luck in every path you tread, 💫",
    "With dreams that bloom and love widespread. 🌷",
    "",
    "Happy Birthday, my dear little friend 💖"
  ];

  const poemContainer = document.getElementById("poem");
  const music = document.getElementById("music");
  const muteBtn = document.getElementById("muteBtn");

  const tryPlay = () => music.play().catch(() => {});
  document.addEventListener("click", tryPlay, { once: true });

  music.muted = false;
  muteBtn.classList.remove("hidden");
  muteBtn.onclick = () => {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇 Muted" : "🔊 Sound";
  };

  poemLines.forEach((line, i) => {
    const p = document.createElement("div");
    p.className = "poem-line";
    p.textContent = line;
    p.style.animationDelay = `${i * 0.8}s`;
    poemContainer.appendChild(p);
  });

  const sig = document.createElement("div");
  sig.className = "signature";
  sig.textContent = "— Yours, Sai 💫✨";
  sig.style.animationDelay = `${poemLines.length * 0.8}s`;
  poemContainer.appendChild(sig);

  setTimeout(() => poemContainer.classList.add("glow"), (poemLines.length + 1) * 800);

  const hearts = document.querySelector(".hearts");
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    hearts.appendChild(heart);
  }

  const sparkles = document.querySelector(".sparkles");
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = "✦";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";
    sparkles.appendChild(sparkle);
  }
}

// === Prevent spacebar scrolling only on final screen ===
window.addEventListener('keydown', function(e) {
  const activeScreen = document.querySelector('.screen.active');
  if (activeScreen && activeScreen.id === 'screen3' && e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
  }
});
