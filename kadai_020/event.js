const btn =document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');
    text.textContent = 'ボタンをクリックしました';
});

