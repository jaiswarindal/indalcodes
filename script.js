const textInput = document.getElementById('text-input');
const titleCaseButton = document.getElementById('title-case');
const upperCaseButton = document.getElementById('upper-case');
const lowerCaseButton = document.getElementById('lower-case');
const sentenceCaseButton = document.getElementById('sentence-case');
const capitalizedCaseButton = document.getElementById('capitalized-case');
const toggleCaseButton = document.getElementById('toggle-case');
const inverseCaseButton = document.getElementById('inverse-case');
const kebabCaseButton = document.getElementById('kebab-case');
const snakeCaseButton = document.getElementById('snake-case');
const camelCaseButton = document.getElementById('camel-case');
const pascalCaseButton = document.getElementById('pascal-case');

titleCaseButton.addEventListener('click', () => {
    textInput.value = toTitleCase(textInput.value);
});

upperCaseButton.addEventListener('click', () => {
    textInput.value = textInput.value.toUpperCase();
});

lowerCaseButton.addEventListener('click', () => {
    textInput.value = textInput.value.toLowerCase();
});

sentenceCaseButton.addEventListener('click', () => {
    textInput.value = toSentenceCase(textInput.value);
});

capitalizedCaseButton.addEventListener('click', () => {
    textInput.value = toCapitalizedCase(textInput.value);
});

toggleCaseButton.addEventListener('click', () => {
    textInput.value = toToggleCase(textInput.value);
});

inverseCaseButton.addEventListener('click', () => {
    textInput.value = toInverseCase(textInput.value);
});

kebabCaseButton.addEventListener('click', () => {
    textInput.value = toKebabCase(textInput.value);
});

snakeCaseButton.addEventListener('click', () => {
    textInput.value = toSnakeCase(textInput.value);
});

camelCaseButton.addEventListener('click', () => {
    textInput.value = toCamelCase(textInput.value);
});

pascalCaseButton.addEventListener('click', () => {
    textInput.value = toPascalCase(textInput.value);
});

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function toSentenceCase(str) {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
}

function toCapitalizedCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function toToggleCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

function toInverseCase(str) {
    return str.split('').map((char, i) => {
        if (i % 2 === 0) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

function toKebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}

function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}

function toCamelCase(str) {
    return str.toLowerCase().replace(/\s+(.)/g, (match, group1) => group1.toUpperCase());
}

function toPascalCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
