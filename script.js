// Screen navigation function
function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('screen' + screenNum).classList.add('active');
}

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';
    
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4500);
}

setInterval(createHeart, 400);

// Confetti Effect
function startConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb6c1', '#ff85a1', '#ffffff']
    });
}

// Secret Reveal Logic
let secretClickCount = 0;
function revealSecret() {
    const secretBox = document.getElementById('secretBox');
    const secretBtn = document.getElementById('secretBtn');
    const finalNextBtn = document.getElementById('finalNextBtn');

    if (secretClickCount === 0) {
        secretBox.innerText = "Truth is… this whole website was made just to see Fatema smile 🤍";
        secretBtn.innerText = "Wait, there's more... 🙈";
        secretClickCount++;
    } else {
        secretBox.innerText = "And maybe… to make this birthday a little more special than usual 😌";
        secretBtn.style.display = 'none';
        finalNextBtn.style.display = 'inline-block';
    }
}