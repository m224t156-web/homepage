import './style.css';
import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// ==========================================
// 1. バリデーションの設定（そのまま）
// ==========================================
const validator = new JustValidate('#basic_form');
validator
  .addField('#basic_name', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'minLength', value: 3 },
    { rule: 'maxLength', value: 15 },
  ])
  .addField('#basic_email', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'email' },
  ])
  .addField('#basic_password', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'password' },
  ])
  .addField('#basic_age', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'number' },
    { rule: 'minNumber', value: 18 },
    { rule: 'maxNumber', value: 150 },
  ])
  .addField('#basic_address', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
  ])
  .onSuccess((event) => {
    console.log('呼び出された');
    const formData = new FormData(event.target);
  });

const charNames = ['ルフィ', 'ゾロ', 'ナミ'];


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: { el: '.swiper .swiper-pagination' },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: { el: '.swiper .swiper-scrollbar' },
  on: {
    init: function () {
      const target = document.getElementById('swiper-text');
      if (target) {
        target.textContent = ''; 
        const name = charNames[this.realIndex]; 
        const text = document.createTextNode(`${name}を表示しています。`);
        target.appendChild(text);
      }
    },
    slideChange: function () {
      const target = document.getElementById('swiper-text');
      if (target) {
        target.textContent = ''; 
        const name = charNames[this.realIndex]; 
        const text = document.createTextNode(`${name}を表示しています。`);
        target.appendChild(text);
      }
    },
  },
});


// ==========================================
// 3. 2つ目のスライダーの設定
// ==========================================
const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,

  pagination: { el: '.swiper1 .swiper-pagination' },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: { el: '.swiper1 .swiper-scrollbar' },
  on: {
    init: function () {
      const target = document.getElementById('swiper1-text');
      if (target) {
        target.textContent = ''; 
        const name = charNames[this.realIndex]; // 💡 同様に名前を取得
        const text = document.createTextNode(`${name}を表示しています。`);
        target.appendChild(text);
      }
    },
    slideChange: function () {
      const target = document.getElementById('swiper1-text');
      if (target) {
        target.textContent = ''; 
        const name = charNames[this.realIndex]; 
        const text = document.createTextNode(`${name}を表示しています。`);
        target.appendChild(text);
      }
    },
  },
});