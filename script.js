const textInput = document.getElementById('text-input');
const charsWithSpaces = document.getElementById('chars-with-spaces');
const charsNoSpaces = document.getElementById('chars-no-spaces');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    // Character count (with spaces)
    charsWithSpaces.textContent = text.length;

    // Character count (no spaces)
    charsNoSpaces.textContent = text.replace(/\s/g, '').length;

    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    // Sentence count
    const sentences = text.split(/[.?!]/g).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textContent = sentences.length;
});
