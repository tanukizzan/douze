const douze = [
  { id: 1, rome: 'Ⅰ', Emonth: 'January', Jmonth: '睦月', sign: '牡羊座', eto: '子' },
  { id: 2, rome: 'Ⅱ', Emonth: 'February', Jmonth: '如月', sign: '牡牛座', eto: '丑' },
  { id: 3, rome: 'Ⅲ', Emonth: 'March', Jmonth: '弥生', sign: '双子座', eto: '寅' },
  { id: 4, rome: 'Ⅳ', Emonth: 'April', Jmonth: '卯月', sign: '蟹座', eto: '卯' },
  { id: 5, rome: 'Ⅴ', Emonth: 'May', Jmonth: '皐月', sign: '獅子座', eto: '辰' },
  { id: 6, rome: 'Ⅵ', Emonth: 'June', Jmonth: '水無月', sign: '乙女座', eto: '巳' },
  { id: 7, rome: 'Ⅶ', Emonth: 'July', Jmonth: '文月', sign: '天秤座', eto: '午' },
  { id: 8, rome: 'Ⅷ', Emonth: 'August', Jmonth: '葉月', sign: '蠍座', eto: '未' },
  { id: 9, rome: 'Ⅸ', Emonth: 'September', Jmonth: '長月', sign: '射手座', eto: '申' },
  { id: 10, rome: 'Ⅹ', Emonth: 'October', Jmonth: '神無月', sign: '山羊座', eto: '酉' },
  { id: 11, rome: 'Ⅺ', Emonth: 'Novenber', Jmonth: '霜月', sign: '水瓶座', eto: '戌' },
  { id: 12, rome: 'Ⅻ', Emonth: 'December', Jmonth: '師走', sign: '魚座', eto: '亥' },
];
const gridElement = [
  document.getElementById('id'),
  document.getElementById('rome'),
  document.getElementById('e-month'),
  document.getElementById('j-month'),
  document.getElementById('birthstone'),
  document.getElementById('sign'),
  document.getElementById('eto')
];
const number = document.getElementById('number');

const anser = () => {
  var n = number.numbers.value;
  gridElement[0].innerText = douze[n].id;
  gridElement[1].innerText = douze[n].rome;
  gridElement[2].innerText = douze[n].Emonth;
  gridElement[3].innerText = douze[n].Jmonth;
  gridElement[5].innerText = douze[n].sign;
  gridElement[6].innerText = douze[n].eto;
};

window.onload = () => {
  const month = new Date().getMonth();
  number.numbers[month].checked = true;
  anser();
};

number.addEventListener('change', function () {
  anser();
});