let wordss = document.querySelectorAll('.words');
wordss.forEach((words) => {
    let latters = words.textContent.split('');
    words.textContent = '';
    latters.forEach((latter) => {
        let span = document.createElement('span');
        span.textContent = latter;
        span.className = 'letter';
        words.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = wordss.length - 1;
wordss[currentWordIndex].style.opacity = '1';

let changeText = () => {
    let currentWord = wordss[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? wordss[0] : wordss[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            latter.className = 'letter out';
        }, i * 80);
    });
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = 'letter in';
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

document