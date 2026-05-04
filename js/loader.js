async function initializeLoader() {
    enterSite();
}

function enterSite() {
    window.location.replace('page/home.html');
}

document.addEventListener('DOMContentLoaded', initializeLoader);
