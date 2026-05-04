async function initializeLoader() {
    setTimeout(enterSite, 2000); // フォントの読み込み成功/失敗に関わらず、2秒後に遷移
}

function enterSite() {
    window.location.href = 'page/home.html';
}

document.addEventListener('DOMContentLoaded', initializeLoader);
