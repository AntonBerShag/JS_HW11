const circlesContainer = document.getElementById('circles-container');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let circleCount = getCircleCountFromCookies() || 3;

createCircles(circleCount);

increaseButton.addEventListener('click', () => {
    circleCount++;
    updateCircleCount();
});

decreaseButton.addEventListener('click', () => {
    if (circleCount > 0) {
        circleCount--;
        updateCircleCount();
    }
});

function createCircles(count) {
    circlesContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.innerText = i + 1;
        circlesContainer.appendChild(circle);
    }
}

function updateCircleCount() {
    createCircles(circleCount);
    setCircleCountToCookies(circleCount);
}

function getCircleCountFromCookies() {
    return parseInt(getCookie('circleCount'));
}

function setCircleCountToCookies(count) {
    setCookie('circleCount', count, 365);
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}
