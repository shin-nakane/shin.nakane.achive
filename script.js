document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.fadein');
  const onScroll = () => {
    const trigger = window.innerHeight * 0.8;
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < trigger) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // 初回表示時もチェック
});
