// フェードイン用
const fadeEls = document.querySelectorAll('.fadein');

function checkFade() {
  const trigger = window.innerHeight * 0.8;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) {
      el.classList.add('visible');
    }
  });
}

// スクロール時
window.addEventListener('scroll', checkFade);
// ページロード時
window.addEventListener('load', checkFade);
