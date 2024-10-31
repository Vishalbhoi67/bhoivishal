document.addEventListener('DOMContentLoaded', () => {
    const greetingLetters = document.querySelectorAll('#greeting .letter');
    const userName = document.getElementById('userName');
    const languageSelect = document.getElementById('languageSelect');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    const giftBox = document.getElementById('gift-box');
    const fireworksContainer = document.getElementById('fireworks-container');

    // Animate greeting letters
    greetingLetters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });

    // Create diyas
    createDiyas(20);

    // Create rangoli patterns
    createRangoli(5);

    // Show gift box after 5 seconds
    setTimeout(() => {
        giftBox.classList.remove('hidden');
    }, 5000);

    submitBtn.addEventListener('click', () => {
        if (userName.value && languageSelect.value) {
            showCelebrationMessage(userName.value, languageSelect.value);
            createFireworks(20);
            launchFireworks(10);
        }
    });

    giftBox.addEventListener('click', () => {
        showSurpriseMessage();
        launchFireworks(5);
    });
});

function createDiyas(count) {
    const container = document.getElementById('diya-container');
    for (let i = 0; i < count; i++) {
        const diya = document.createElement('div');
        diya.classList.add('diya');
        diya.style.left =   `${Math.random() * 100}%`;
        diya.style.top = `${Math.random() * 100}%`;
        diya.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(diya);
    }
}

function createFireworks(count) {
    const container = document.getElementById('firecrackers-container');
    for (let i = 0; i < count; i++) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${Math.random() * 100}%`;
        firecracker.style.bottom = '0';
        firecracker.style.backgroundColor = getRandomColor();
        firecracker.style.animation = `explode ${1 + Math.random()}s linear`;
        container.appendChild(firecracker);

        // Create sparks
        for (let j = 0; j < 20; j++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            spark.style.backgroundColor = firecracker.style.backgroundColor;
            spark.style.left = firecracker.style.left;
            spark.style.bottom = '100vh';
            spark.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`);
            spark.style.setProperty('--ty', `${(Math.random() - 0.5) * 200}px`);
            container.appendChild(spark);
        }

        setTimeout(() => {
            firecracker.remove();
        }, 1000);
    }
}

function createRangoli(count) {
    const container = document.getElementById('rangoli-container');
    for (let i = 0; i < count; i++) {
        const rangoli = document.createElement('div');
        rangoli.classList.add('rangoli');
        rangoli.style.left = `${Math.random() * 100}%`;
        rangoli.style.top = `${Math.random() * 100}%`;
        rangoli.style.transform = `scale(${0.5 + Math.random()})`;
        container.appendChild(rangoli);
    }
}

function showCelebrationMessage(name, language) {
    const messages = {
        Hindi: `${name}, आपको दीपावली की हार्दिक शुभकामनाएं! रोशनी का यह त्योहार आपके जीवन में खुशियां लाए।`,
        Marathi: `${name}, दिवाळीच्या हार्दिक शुभेच्छा! प्रकाशाचा हा सण तुमच्या आयुष्यात आनंद घेऊन येवो.`,
        Bengali: `${name}, শুভ দীপাবলি! আলোর এই উৎসব আপনার জীবনে আনন্দ নিয়ে আসুক।`,
        Tamil: `${name}, இனிய தீபாவளி நல்வாழ்த்துக்கள்! ஒளியின் இந்த விழா உங்கள் வாழ்வில் மகிழ்ச்சியைக் கொண்டு வரட்டும்.`,
        Telugu: `${name}, మీకు దీపావళి శుభాకాంక్షలు! వెలుగుల పండుగ మీ జీవితంలో ఆనందాన్ని తీసుకురావాలి.`,
        Gujarati: `${name}, દિવાળીની હાર્દિક શુભેચ્છાઓ! પ્રકાશનો આ તહેવાર તમારા જીવનમાં આનંદ લાવે.`,
        Kannada: `${name}, ದೀಪಾವಳಿಯ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು! ಬೆಳಕಿನ ಈ ಹಬ್ಬವು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಸಂತೋಷವನ್ನು ತರಲಿ.`,
        Malayalam: `${name}, ആശംസകൾ! ഈ ദീപാവലി നിങ്ങളുടെ ജീവിതത്തിൽ സന്തോഷം കൊണ്ടുവരട്ടെ.`,
        Odia: `${name}, ଦୀପାବଳୀର ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା! ଆଲୋକର ଏହି ପର୍ବ ଆପଣଙ୍କ ଜୀବନରେ ଆନନ୍ଦ ଆଣୁ।`,
        Punjabi: `${name}, ਦਿਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ! ਰੋਸ਼ਨੀ ਦਾ ਇਹ ਤਿਉਹਾਰ ਤੁਹਾਡੇ ਜੀਵਨ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਲਿਆਵੇ।`,
        English: `${name}, wishing you a very Happy Diwali! May this festival of lights bring joy to your life.`
    };

    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything, even during Diwali!",
        "What do you call a diya that's studying? En-light-ened!",
        "Why did the firecracker go to school? To get a higher burst-ucation!",
        "How do you make a firecracker laugh? You tickle its fuse!"
    ];

    const selectedMessage = messages[language] || messages.English;
    const selectedJoke = jokes[Math.floor(Math.random() * jokes.length)];

    message.innerHTML = `${selectedMessage}: ${selectedJoke}`;
    message.classList.add('show');
}

function showSurpriseMessage() {
    const surprises = [
        "You've found a virtual box of sweets! Enjoy the sweetness of Diwali!",
        "Surprise! Here's a digital Diwali lamp to light up your screen!",
        "You've unlocked a special Diwali rangoli pattern! May it bring you luck!",
        "Congratulations! You've discovered a virtual fireworks show just for you!"
    ];

    const selectedSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    alert(selectedSurprise);
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ffd93d', '#f54088', '#6bcbef', '#4ecdc4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function launchFireworks(count) {
    const colors = ['#ff6b6b', '#ffd93d', '#f54088', '#6bcbef', '#4ecdc4'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.bottom = '0';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const beforeAfter = document.createElement('div');
            beforeAfter.style.backgroundColor = firework.style.backgroundColor;
            firework.appendChild(beforeAfter);
            
            fireworksContainer.appendChild(firework);
            
            firework.addEventListener('animationend', () => {
                firework.remove();
            });
        }, i * 200);
    }
}