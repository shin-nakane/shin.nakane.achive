// スクロールでフェードイン
const fadeEls = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) {
      el.classList.add('visible');
    }
  });
});

// ページ読み込み時にもチェック（最初に画面内にある要素を表示するため）
window.addEventListener('load', () => {
  const trigger = window.innerHeight * 0.8;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) {
      el.classList.add('visible');
    }
  });
});
