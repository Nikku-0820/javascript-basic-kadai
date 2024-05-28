//今日の日付
const today = new Date();

const year = today.getFullYear(); //年
const month =today.getMonth()+1; //月　月は０から始まるので、＋１をする
const day =today.getDate(); //日

//〇〇年〇〇月〇〇日と表示する
console.log(year + '年' + month + '月' + day + '日');