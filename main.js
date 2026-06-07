const countries = [
// アジア (32)
{ id: "IN", name: "インド", pop: "140000", unit: "万人", area: "Asia" }, { id: "CN", name: "中国", pop: "140000", unit: "万人", area: "Asia" }, { id: "ID", name: "インドネシア", pop: "28000", unit: "万人", area: "Asia" }, { id: "PK", name: "パキスタン", pop: "24000", unit: "万人", area: "Asia" }, { id: "BD", name: "バングラデシュ", pop: "17000", unit: "万人", area: "Asia" }, { id: "JP", name: "日本", pop: "12000", unit: "万人", area: "Asia" }, { id: "PH", name: "フィリピン", pop: "11000", unit: "万人", area: "Asia" }, { id: "VN", name: "ベトナム", pop: "10000", unit: "万人", area: "Asia" }, { id: "IR", name: "イラン", pop: "9000", unit: "万人", area: "Asia" }, { id: "TR", name: "トルコ", pop: "8700", unit: "万人", area: "Asia" }, { id: "TH", name: "タイ", pop: "7100", unit: "万人", area: "Asia" }, { id: "MM", name: "ミャンマー", pop: "5400", unit: "万人", area: "Asia" }, { id: "KR", name: "韓国", pop: "5100", unit: "万人", area: "Asia" }, { id: "IQ", name: "イラク", pop: "4500", unit: "万人", area: "Asia" }, { id: "AF", name: "アフガニスタン", pop: "4100", unit: "万人", area: "Asia" }, { id: "UZ", name: "ウズベキスタン", pop: "3500", unit: "万人", area: "Asia" }, { id: "MY", name: "マレーシア", pop: "3500", unit: "万人", area: "Asia" }, { id: "SA", name: "サウジアラビア", pop: "3300", unit: "万人", area: "Asia" }, { id: "NP", name: "ネパール", pop: "2900", unit: "万人", area: "Asia" }, { id: "KP", name: "北朝鮮", pop: "2600", unit: "万人", area: "Asia" }, { id: "LK", name: "スリランカ", pop: "2200", unit: "万人", area: "Asia" }, { id: "KZ", name: "カザフスタン", pop: "2000", unit: "万人", area: "Asia" }, { id: "KH", name: "カンボジア", pop: "1700", unit: "万人", area: "Asia" }, { id: "AE", name: "アラブ首長国連邦", pop: "1000", unit: "万人", area: "Asia" }, { id: "AZ", name: "アゼルバイジャン", pop: "1000", unit: "万人", area: "Asia" }, { id: "IL", name: "イスラエル", pop: "920", unit: "万人", area: "Asia" }, { id: "SG", name: "シンガポール", pop: "570", unit: "万人", area: "Asia" }, { id: "KW", name: "クウェート", pop: "480", unit: "万人", area: "Asia" }, { id: "MN", name: "モンゴル", pop: "340", unit: "万人", area: "Asia" }, { id: "QA", name: "カタール", pop: "290", unit: "万人", area: "Asia" }, { id: "CY", name: "キプロス", pop: "130", unit: "万人", area: "Asia" }, { id: "BN", name: "ブルネイ", pop: "45", unit: "万人", area: "Asia" },
// アフリカ (24)
{ id: "NG", name: "ナイジェリア", pop: "22000", unit: "万人", area: "Africa" }, { id: "ET", name: "エチオピア", pop: "12000", unit: "万人", area: "Africa" }, { id: "EG", name: "エジプト", pop: "11000", unit: "万人", area: "Africa" }, { id: "CD", name: "コンゴ", pop: "10000", unit: "万人", area: "Africa" }, { id: "TZ", name: "タンザニア", pop: "6600", unit: "万人", area: "Africa" }, { id: "ZA", name: "南アフリカ", pop: "6300", unit: "万人", area: "Africa" }, { id: "KE", name: "ケニア", pop: "5500", unit: "万人", area: "Africa" }, { id: "SD", name: "スーダン", pop: "5000", unit: "万人", area: "Africa" }, { id: "DZ", name: "アルジェリア", pop: "4600", unit: "万人", area: "Africa" }, { id: "MA", name: "モロッコ", pop: "3700", unit: "万人", area: "Africa" }, { id: "GH", name: "ガーナ", pop: "3300", unit: "万人", area: "Africa" }, { id: "MG", name: "マダガスカル", pop: "3100", unit: "万人", area: "Africa" }, { id: "CI", name: "コートジボワール", pop: "3100", unit: "万人", area: "Africa" }, { id: "NE", name: "ニジェール", pop: "2600", unit: "万人", area: "Africa" }, { id: "ML", name: "マリ", pop: "2300", unit: "万人", area: "Africa" }, { id: "ZM", name: "ザンビア", pop: "2000", unit: "万人", area: "Africa" }, { id: "SO", name: "ソマリア", pop: "1800", unit: "万人", area: "Africa" }, { id: "RW", name: "ルワンダ", pop: "1300", unit: "万人", area: "Africa" }, { id: "TN", name: "チュニジア", pop: "1200", unit: "万人", area: "Africa" }, { id: "SS", name: "南スーダン", pop: "1100", unit: "万人", area: "Africa" }, { id: "LY", name: "リビア", pop: "730", unit: "万人", area: "Africa" }, { id: "LR", name: "リベリア", pop: "540", unit: "万人", area: "Africa" }, { id: "NA", name: "ナミビア", pop: "290", unit: "万人", area: "Africa" }, { id: "BW", name: "ボツワナ", pop: "240", unit: "万人", area: "Africa" },
// ヨーロッパ (29)
{ id: "RU", name: "ロシア", pop: "14000", unit: "万人", area: "Europe" }, { id: "DE", name: "ドイツ", pop: "8400", unit: "万人", area: "Europe" }, { id: "GB", name: "イギリス", pop: "6800", unit: "万人", area: "Europe" }, { id: "FR", name: "フランス", pop: "6800", unit: "万人", area: "Europe" }, { id: "IT", name: "イタリア", pop: "5900", unit: "万人", area: "Europe" }, { id: "ES", name: "スペイン", pop: "4700", unit: "万人", area: "Europe" }, { id: "PL", name: "ポーランド", pop: "3800", unit: "万人", area: "Europe" }, { id: "UA", name: "ウクライナ", pop: "3700", unit: "万人", area: "Europe" }, { id: "RO", name: "ルーマニア", pop: "1900", unit: "万人", area: "Europe" }, { id: "NL", name: "オランダ", pop: "1800", unit: "万人", area: "Europe" }, { id: "BE", name: "ベルギー", pop: "1100", unit: "万人", area: "Europe" }, { id: "CZ", name: "チェコ", pop: "1000", unit: "万人", area: "Europe" }, { id: "SE", name: "スウェーデン", pop: "1000", unit: "万人", area: "Europe" }, { id: "PT", name: "ポルトガル", pop: "1000", unit: "万人", area: "Europe" }, { id: "GR", name: "ギリシャ", pop: "1000", unit: "万人", area: "Europe" }, { id: "HU", name: "ハンガリー", pop: "960", unit: "万人", area: "Europe" }, { id: "AT", name: "オーストリア", pop: "910", unit: "万人", area: "Europe" }, { id: "CH", name: "スイス", pop: "880", unit: "万人", area: "Europe" }, { id: "BG", name: "ブルガリア", pop: "670", unit: "万人", area: "Europe" }, { id: "DK", name: "デンマーク", pop: "590", unit: "万人", area: "Europe" }, { id: "FI", name: "フィンランド", pop: "560", unit: "万人", area: "Europe" }, { id: "NO", name: "ノルウェー", pop: "550", unit: "万人", area: "Europe" }, { id: "IE", name: "アイルランド", pop: "510", unit: "万人", area: "Europe" }, { id: "LT", name: "リトアニア", pop: "280", unit: "万人", area: "Europe" }, { id: "LV", name: "ラトビア", pop: "180", unit: "万人", area: "Europe" }, { id: "EE", name: "エストニア", pop: "130", unit: "万人", area: "Europe" }, { id: "LU", name: "ルクセンブルク", pop: "66", unit: "万人", area: "Europe" }, { id: "IS", name: "アイスランド", pop: "38", unit: "万人", area: "Europe" }, { id: "VA", name: "バチカン市国", pop: "496", unit: "人", area: "Europe" },
// 北アメリカ (8)
{ id: "US", name: "アメリカ", pop: "34000", unit: "万人", area: "NorthAmerica" }, { id: "MX", name: "メキシコ", pop: "12000", unit: "万人", area: "NorthAmerica" }, { id: "CA", name: "カナダ", pop: "3900", unit: "万人", area: "NorthAmerica" }, { id: "HT", name: "ハイチ", pop: "1100", unit: "万人", area: "NorthAmerica" }, { id: "DO", name: "ドミニカ", pop: "1100", unit: "万人", area: "NorthAmerica" }, { id: "CU", name: "キューバ", pop: "1100", unit: "万人", area: "NorthAmerica" }, { id: "PA", name: "パナマ", pop: "440", unit: "万人", area: "NorthAmerica" }, { id: "JM", name: "ジャマイカ", pop: "280", unit: "万人", area: "NorthAmerica" },
// 南アメリカ (10)
{ id: "BR", name: "ブラジル", pop: "21000", unit: "万人", area: "SouthAmerica" }, { id: "CO", name: "コロンビア", pop: "5200", unit: "万人", area: "SouthAmerica" }, { id: "AR", name: "アルゼンチン", pop: "4500", unit: "万人", area: "SouthAmerica" }, { id: "PE", name: "ペルー", pop: "3300", unit: "万人", area: "SouthAmerica" }, { id: "VE", name: "ベネズエラ", pop: "2800", unit: "万人", area: "SouthAmerica" }, { id: "CL", name: "チリ", pop: "1900", unit: "万人", area: "SouthAmerica" }, { id: "EC", name: "エクアドル", pop: "1700", unit: "万人", area: "SouthAmerica" }, { id: "BO", name: "ボリビア", pop: "1200", unit: "万人", area: "SouthAmerica" }, { id: "PY", name: "パラグアイ", pop: "680", unit: "万人", area: "SouthAmerica" }, { id: "UY", name: "ウルグアイ", pop: "330", unit: "万人", area: "SouthAmerica" },
// オセアニア (8)
{ id: "AU", name: "オーストラリア", pop: "2600", unit: "万人", area: "Oceania" }, { id: "PG", name: "パプアニューギニア", pop: "1000", unit: "万人", area: "Oceania" }, { id: "NZ", name: "ニュージーランド", pop: "510", unit: "万人", area: "Oceania" }, { id: "FJ", name: "フィジー", pop: "92", unit: "万人", area: "Oceania" }, { id: "KI", name: "キリバス", pop: "13", unit: "万人", area: "Oceania" }, { id: "TO", name: "トンガ", pop: "10", unit: "万人", area: "Oceania" }, { id: "NR", name: "ナウル", pop: "1.2", unit: "万人", area: "Oceania" }, { id: "TV", name: "ツバル", pop: "1", unit: "万人", area: "Oceania" }
];

let chart, polygonSeries;
let currentList = [];
let currentIndex = 0;
let currentCountry = null;
let quizMode = "name";
let score = 0;
let solvedIds = [];
let isMistakenInThisTurn = false;

function setupGame(area) {
currentList = area === "All" ? [...countries] : countries.filter(c => c.area === area);
currentList.sort(() => Math.random() - 0.5);

document.getElementById("total-country-num").innerText = currentList.length;
document.getElementById("total-num").innerText = currentList.length * 2;

document.getElementById("start-screen").style.display = "none";
document.getElementById("quiz-screen").style.display = "block";
document.getElementById("result-screen").style.display = "none";

currentIndex = 0;
score = 0;
solvedIds = [];
document.getElementById("score").innerText = "0";

if (chart) chart.dispose();
initMap();
}

function goHome() {
if (chart) { chart.dispose(); chart = null; }
document.getElementById("quiz-screen").style.display = "none";
document.getElementById("start-screen").style.display = "block";
}

function initMap() {
chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();
chart.zoomDuration = 700; // 移動スピードを少しキビキビに

polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.exclude = ["AQ"];
let template = polygonSeries.mapPolygons.template;
template.fill = am4core.color("#aaaaaa");
template.stroke = am4core.color("#ffffff");
template.strokeWidth = 0.5;

// 1問目のデータをセット
nextQuestionData();

// 最初の国へ「強制移動」
setTimeout(() => {
if (currentCountry) {
focusOnCountry(currentCountry.id);
}
}, 1200);
}

function nextQuestionData() {
if (currentIndex >= currentList.length) {
showFinalResult();
return;
}
currentCountry = currentList[currentIndex];
quizMode = "name";
isMistakenInThisTurn = false;
document.getElementById("current-country-num").innerText = currentIndex + 1;

updateMapColors();
document.getElementById("question-text").innerText = "国名";
document.getElementById("target-name").innerText = "赤く光っている国はどこ？";
showInputMode();
}

function updateMapColors() {
polygonSeries.mapPolygons.each(p => {
const cid = p.dataItem.dataContext.id;
if (cid === currentCountry.id) p.fill = am4core.color("#ff4444");
else if (solvedIds.includes(cid)) p.fill = am4core.color("#00d1b2");
else p.fill = am4core.color("#aaaaaa");
});
}

// 🎯【核心の修正】サボるシステムに無理やり「中央へバンッ！」を実行させる関数
function focusOnCountry(countryId) {
if (!chart || !polygonSeries) return;

let targetPolygon = null;
polygonSeries.mapPolygons.each(p => {
if (p.dataItem && p.dataItem.dataContext && p.dataItem.dataContext.id === countryId) {
targetPolygon = p;
}
});

if (targetPolygon) {
// 🔥 システムの「サボり」を防ぐため、一瞬だけ全体表示に戻してから…
chart.goHome(0);

// 🚀 その直後に、狙った国へ強制的にマックスズーム（普通の国は7倍、デカい国は3倍）
let zoomLevel = 7;
if (countryId === "RU" || countryId === "CA" || countryId === "US" || countryId === "CN" || countryId === "BR") {
zoomLevel = 3;
}

// 第3引数を「true」にすることで、強制的にその国が画面中央にセットされます
chart.zoomToMapObject(targetPolygon, zoomLevel, true);
}
}

function checkAnswer() {
const input = document.getElementById("answer-input").value.trim();
const correct = quizMode === "name" ? currentCountry.name : currentCountry.pop;
const feedback = document.getElementById("feedback");

if (input === correct) {
const displayText = quizMode === "name" ? correct : `${correct}${currentCountry.unit}`;
feedback.innerText = `⭕ 正解！：${displayText}`;
feedback.style.color = "green";

if (!isMistakenInThisTurn) {
score++;
document.getElementById("score").innerText = score;
}

document.getElementById("answer-input").style.display = "none";
document.getElementById("next-btn").style.display = "inline-block";

quizMode = (quizMode === "name") ? "result_name" : "result_pop";
} else {
const correctText = quizMode === "name" ? currentCountry.name : `${currentCountry.pop}${currentCountry.unit}`;
feedback.innerText = `❌ 正解は「${correctText}」`;
feedback.style.color = "red";
isMistakenInThisTurn = true;
document.getElementById("answer-input").value = "";
document.getElementById("answer-input").focus();
}
}

function handleNext() {
document.getElementById("next-btn").style.display = "none";
if (quizMode === "result_name") {
quizMode = "pop";
isMistakenInThisTurn = false;
document.getElementById("question-text").innerText = "人口";
document.getElementById("target-name").innerText = `${currentCountry.name} の人口は？`;
document.getElementById("unit").innerText = currentCountry.unit;
showInputMode();
} else if (quizMode === "result_pop") {
solvedIds.push(currentCountry.id);
currentIndex++;

nextQuestionData();

// 次の国へ行くときも、強制中央移動を発動！
setTimeout(() => {
if (currentCountry) {
focusOnCountry(currentCountry.id);
}
}, 400);
}
}

function showFinalResult() {
chart.goHome();
const resScreen = document.getElementById("result-screen");
resScreen.style.display = "flex";
document.getElementById("total-result-num").innerText = currentList.length * 2;
document.getElementById("final-score").innerText = score;
}

function showInputMode() {
document.getElementById("answer-input").style.display = "inline-block";
document.getElementById("answer-input").value = "";
document.getElementById("answer-input").focus();
document.getElementById("feedback").innerText = "";
if (quizMode === "name") document.getElementById("unit").innerText = "";
}

document.addEventListener("keypress", (e) => {
if (e.key === "Enter" && document.getElementById("quiz-screen").style.display === "block") {
if (quizMode === "result_name" || quizMode === "result_pop") {
handleNext();
} else {
checkAnswer();
}
}
});


