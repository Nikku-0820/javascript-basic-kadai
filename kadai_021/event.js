const btn =document.getElementById('btn');
btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');
    setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('(非同期処理)');
    }, 2000);
  });