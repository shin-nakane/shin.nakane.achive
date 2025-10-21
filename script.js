document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fadein');
  const onScroll = () => {
    const trigger = window.innerHeight * 0.8;
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < trigger) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // 最初の読み込み時にも適用
});
