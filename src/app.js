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
    filter: [
      { value: 'drop-shadow(0px 0px 15px rgba(255, 0, 0, 1))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
  });
});

//ゾロ
const zoroImg = document.getElementById('zoro-img');
let zoroRotation = 0; 
zoroImg.addEventListener('click', () => {
  window.anime.remove(zoroImg);
  zoroRotation += 3;
  window.anime({
    targets: zoroImg,
    rotate: zoroRotation + 'turn', 
    scale: [
      { value: 0.7, duration: 300, easing: 'easeOutQuad' }, 
      { value: 1.1, duration: 300, easing: 'easeOutQuad' }, 
      { value: 1.0, duration: 300, easing: 'easeOutQuad' } 
    ],
     filter: [
      { value: 'drop-shadow(0px 0px 20px rgba(0, 255, 0, 1))', duration: 900 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 900 }
    ],
    easing: 'easeOutCubic',
  });
});

//ナミ
const namiImg = document.getElementById('nami-img');
namiImg.addEventListener('click', () => {
  window.anime({
    targets: namiImg,
    opacity: [
      { value: 0, duration: 500, easing: 'easeOutQuad' },
      { value: 1, duration: 500, easing: 'easeInQuad' } 
    ],
    filter: [
      { value: 'blur(30px)', duration: 500, easing: 'easeOutQuad' },
      { value: 'blur(0px)', duration: 500, easing: 'easeInQuad' },
      { value: 'drop-shadow(0px 0px 15px rgba(255, 165, 0, 1))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
    
  });
});

const usoppImg = document.getElementById('usopp-img');

usoppImg.addEventListener('click', () => {
  window.anime({
    targets: usoppImg,
    translateX: [
      { value: -40, duration: 300, easing: 'easeOutQuad' },
      { value: 0, duration: 700, easing: 'easeOutElastic(1, .4)' }
    ],
    rotate: [
      { value: -12, duration: 300, easing: 'easeOutQuad' },
      { value: 0, duration: 700, easing: 'easeOutElastic(1, .4)' }
    ],
    scale: [
      { value: 0.7, duration: 300, easing: 'easeOutQuad' },
      { value: 1.0, duration: 700, easing: 'easeOutElastic(1, .4)' }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 25px rgba(255, 220, 0, 0.95))', duration: 700 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',             duration: 700 } 
    ]
  });
});

// サンジ
const sanjiImg = document.getElementById('sanji-img');
sanjiImg.addEventListener('click', () => {
  window.anime({
    targets: sanjiImg,
    // 1. メロメロでポーンと上に浮き上がる
    translateY: [
      { value: -30, duration: 300, easing: 'easeOutQuad' },
      { value: 0, duration: 500, easing: 'easeOutBounce' } // 最後にポンポンと着地
    ],
    // 2. ハートの鼓動（ドックン！）のように伸縮する
    scale: [
      { value: 1.3, duration: 200, easing: 'easeOutBack' }, // ドックンと大きく
      { value: 0.9, duration: 200, easing: 'easeInOutQuad' }, // ぎゅっと縮んで
      { value: 1.0, duration: 400, easing: 'easeOutElastic(1, .5)' } // 元に戻る
    ],
    // 3. 浮かれている様子を左右に首（体）を振る動きで表現
    rotate: [
      { value: -15, duration: 150, easing: 'easeInOutSine' },
      { value: 15, duration: 150, easing: 'easeInOutSine' },
      { value: -10, duration: 150, easing: 'easeInOutSine' },
      { value: 0, duration: 350, easing: 'easeInOutSine' }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 15px rgba(0, 0, 255, 0.8))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
    loop: false
  });
});

// チョッパー
const chopperImg = document.getElementById('chopper-img');
chopperImg.addEventListener('click', () => {
  window.anime({
    targets: chopperImg,
    translateX: [
      { value: -16, duration: 40 },
      { value: 16,  duration: 40 },
      { value: -13, duration: 40 },
      { value: 13,  duration: 40 },
      { value: -9,  duration: 40 },
      { value: 9,   duration: 40 },
      { value: -5,  duration: 40 },
      { value: 5,   duration: 40 },
      { value: -2,  duration: 40 },
      { value: 2,   duration: 40 },
      { value: 0,  duration: 40 }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 15px rgba(255, 39, 154, 1))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
    easing: 'easeInOutQuad',
    
  });
});

// ロビン
const robinImg = document.getElementById('robin-img');

robinImg.addEventListener('click', () => {
  window.anime({
    targets: robinImg,
    scale: [
      { value: 1.2, duration: 500, easing: 'easeOutQuad' }, 
      { value: 1.0, duration: 500, easing: 'easeOutSine' }  
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 15px rgba(221, 0, 255, 1))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
  });
});

// フランキー
const frankyImg = document.getElementById('franky-img');

frankyImg.addEventListener('click', () => {
  window.anime.remove(frankyImg);

  window.anime({
    targets: frankyImg,
    scale: [
      { value: 0.7, duration: 500, easing: 'easeOutQuad' },
      { value: 1.5, duration: 500, easing: 'easeOutBack' },
      { value: 1.0,  duration: 500, easing: 'easeOutElastic(1, .5)' }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 15px hsla(191, 100%, 49%, 1.00))', duration: 600 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 600 }
    ],
  });
});

// ブルック
const brookImg = document.getElementById('brook-img');

brookImg.addEventListener('click', () => {
  window.anime({
    targets: brookImg,
    translateY: [
      { value: -70, duration: 400, easing: 'easeOutQuad' },
      { value: 0,   duration: 400, easing: 'easeOutBounce' }
    ],
    scale: [
      { value: 1.3, duration: 400, easing: 'easeOutBack' },
      { value: 1.0,  duration: 400, easing: 'easeOutSine' }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 20px rgba(0, 255, 200, 1))', duration: 400 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',            duration: 400 }
    ],
  });
});

// ジンベエ
const jinbeImg = document.getElementById('jinbe-img');

jinbeImg.addEventListener('click', () => {
  window.anime({
    targets: jinbeImg,
    translateY: [
      { value: -110, duration: 450, easing: 'easeOutQuad' },
      { value: 0,    duration: 300, easing: 'easeInCubic' },  
      { value: 6,    duration: 100, easing: 'easeOutQuad' },  
      { value: 0,    duration: 350, easing: 'easeOutElastic(1, .6)' } 
    ],
    scale: [
      { value: 0.85, duration: 450, easing: 'easeOutQuad' },
      { value: 1.0,  duration: 300, easing: 'easeInCubic' },
      { value: 1.35, duration: 150, easing: 'easeOutQuad' }, 
      { value: 1.0,  duration: 450, easing: 'easeOutElastic(1, .6)' }
    ],
    filter: [
      { value: 'drop-shadow(0px 0px 20px rgba(0, 140, 255, 0.8))', duration: 750 },
      { value: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))', duration: 450 } 
    ],
    loop: false
  });
});