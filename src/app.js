import './style.css';
//ルフィ
const luffyImg = document.getElementById('luffy-img');
luffyImg.addEventListener('click', () => {
  window.anime({
    targets: luffyImg,
    scaleY: [
      { value: 1.0, duration: 0 },
      { value: 2.0, duration: 100, easing: 'easeOutQuad' }, 
      { value: 1.0, duration: 400, easing: 'easeOutElastic(1, .5)' } 
    ],
    scaleX: [
      { value: 1.0, duration: 0 },
      { value: 0.5, duration: 100, easing: 'easeOutQuad' },
      { value: 1.0, duration: 400, easing: 'easeOutElastic(1, .5)' }
    ],
    easing: 'easeOutCubic',
  });
});

//ゾロ
const zoroImg = document.getElementById('zoro-img');

zoroImg.addEventListener('click', () => {
  window.anime({
    targets: zoroImg,
    rotate: '+=3turn', 
    scale: [
      { value: 0.7, duration: 200, easing: 'easeOutQuad' }, 
      { value: 1.1, duration: 300, easing: 'easeOutQuad' }, 
      { value: 1.0, duration: 300, easing: 'easeOutElastic(1, .6)' } 
    ],
    easing: 'easeOutCubic',
  });
});