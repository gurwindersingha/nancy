function generateLoveLetter() {
    const loveLetter = document.getElementById('loveLetter');
    const randomQuotes = [
        "You are my sunshine, my only sunshine. You make me happy when skies are gray.",
        "Every moment with you is like a beautiful dream come true.",
        "I never knew what true happiness was until I met you.",
        "You are the love of my life, my everything.",
        "Being with you makes me feel like the luckiest person in the world."
    ];
    const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    loveLetter.value = randomQuote;
}
