const fontUrl = 'font/BestTen-CRT.otf';  // パスは実際のファイルの場所に合わせて調整してください
var font = new FontFaceObserver('CustomFont');

async function loadAndCacheFont() {
    try {
        await font.load();
        document.fonts.add(new FontFace('CustomFont', `url(${fontUrl})`));
        localStorage.setItem('fontLoaded', 'true');
        document.documentElement.classList.add('font-loaded');
        console.log('Font loaded and cached');
        return true;
    } catch (error) {
        console.error('Font loading failed:', error);
        return false;
    }
}

async function initializeLoader() {
    const fontLoaded = await loadAndCacheFont();
    if (!fontLoaded) {
        console.log('フォントの読み込みに失敗しました');
    }
    setTimeout(enterSite, 2000); // フォントの読み込み成功/失敗に関わらず、2秒後に遷移
}

function enterSite() {
    window.location.href = 'page/home.html';
}

document.addEventListener('DOMContentLoaded', initializeLoader);