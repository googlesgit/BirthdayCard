🎂 Happy Birthday Web Card

A pastel-themed, animated birthday greeting built with pure HTML, CSS, and JavaScript — featuring hearts, sparkles, a poem reveal, soft piano music, and playful interactions.

💖 Features

🌈 Three screens:

Name Entry → playful validation messages

Password Entry → progressive hints and humor (“text Sai to know your password 📱”)

Poem Screen → animated hearts, sparkles, glowing poem, and music

🎶 Soft background piano (starts after first click — autoplay-safe)

💬 Dynamic feedback for both name and password attempts

📱 Fully responsive for mobile and desktop

💫 Confetti animation, fading glow, and signature “— Yours, Sai 💫✨”

📁 Folder Structure
birthday-card/
│
├── index.html      # Main structure and 3 screens
├── style.css       # Gradients, blur effects, animations, responsiveness
├── script.js       # Logic for transitions, validation, and animations
└── README.md       # (this file)

🚀 How to Run
Option 1 – VS Code + Live Server (recommended)

Open the project folder in VS Code.

Install the Live Server extension (Ritwick Dey).

Right-click index.html → “Open with Live Server.”

Browser opens at http://127.0.0.1:5500/index.html.

Click anywhere to start music 🎹.

Option 2 – Direct Open

Double-click index.html or open it in any modern browser.

⚠️ Note: browsers block autoplay; click once to unmute the piano.

🧠 Interaction Flow

Enter Name:

Empty → “Please enter your name 😅”

Wrong → fun corrections with emojis.

Correct → moves to password screen.

Enter Password:

1st wrong → “Hmm… that’s not the one 😅” + hint shown.

2nd → “Try one more time 😉”

3rd → “Try one last time, you’ve got this 💪”

4th + → “You don’t remember… text Sai to know your password 📱”

Correct ( 17651 ) → Poem unlocks 💖

Poem Screen:

Animated reveal of each line ✨

Hearts + sparkles float around 🎇

Confetti burst 🎉

Music plays softly 🎶

📱 Responsive Design

Scales for all devices (iPhone, Android, tablets, desktops).

Buttons + inputs enlarged for touch.

Pastel gradients adapt smoothly to different aspect ratios.

🧩 Customization Tips

💬 Change name/password logic in script.js.

🎵 Replace music file URL in index.html.

💖 Edit poem lines inside startPoem() function.

🎨 Tweak colors or gradients in :root section of style.css.

📸 Credits

Background gradients & fonts from Google Fonts (Poppins).

Audio track from Pixabay (royalty-free soft piano).

Code crafted with 💗 by Sai for Ashraya.
