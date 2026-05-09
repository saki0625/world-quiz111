const countries = [
    { id: "IN", name: "インド", pop: "140000", unit: "万人", area: "Asia" }, { id: "CN", name: "中国", pop: "140000", unit: "万人", area: "Asia" }, { id: "ID", name: "インドネシア", pop: "28000", unit: "万人", area: "Asia" }, { id: "PK", name: "パキスタン", pop: "24000", unit: "万人", area: "Asia" }, { id: "BD", name: "バングラデシュ", pop: "17000", unit: "万人", area: "Asia" }, { id: "JP", name: "日本", pop: "12000", unit: "万人", area: "Asia" }, { id: "PH", name: "フィリピン", pop: "11000", unit: "万人", area: "Asia" }, { id: "VN", name: "ベトナム", pop: "10000", unit: "万人", area: "Asia" }, { id: "IR", name: "イラン", pop: "9000", unit: "万人", area: "Asia" }, { id: "TR", name: "トルコ", pop: "8700", unit: "万人", area: "Asia" }, { id: "TH", name: "タイ", pop: "7100", unit: "万人", area: "Asia" }, { id: "MM", name: "ミャンマー", pop: "5400", unit: "万人", area: "Asia" }, { id: "KR", name: "韓国", pop: "5100", unit: "万人", area: "Asia" }, { id: "IQ", name: "イラク", pop: "4500", unit: "万人", area: "Asia" }, { id: "AF", name: "アフガニスタン", pop: "4100", unit: "万人", area: "Asia" }, { id: "UZ", name: "ウズベキスタン", pop: "3500", unit: "万人", area: "Asia" }, { id: "MY", name: "マレーシア", pop: "3500", unit: "万人", area: "Asia" }, { id: "SA", name: "サウジアラビア", pop: "3300", unit: "万人", area: "Asia" }, { id: "NP", name: "ネパール", pop: "2900", unit: "万人", area: "Asia" }, { id: "KP", name: "北朝鮮", pop: "2600", unit: "万人", area: "Asia" }, { id: "LK", name: "スリランカ", pop: "2200", unit: "万人", area: "Asia" }, { id: "SY", name: "シリア", pop: "2100", unit: "万人", area: "Asia" }, { id: "KZ", name: "カザフスタン", pop: "2000", unit: "万人", area: "Asia" }, { id: "KH", name: "カンボジア", pop: "1700", unit: "万人", area: "Asia" }, { id: "JO", name: "ヨルダン", pop: "1100", unit: "万人", area: "Asia" }, { id: "AZ", name: "アゼルバイジャン", pop: "1000", unit: "万人", area: "Asia" }, { id: "TJ", name: "タジキスタン", pop: "1000", unit: "万人", area: "Asia" }, { id: "AE", name: "アラブ首長国連邦", pop: "940", unit: "万人", area: "Asia" }, { id: "IL", name: "イスラエル", pop: "920", unit: "万人", area: "Asia" }, { id: "HK", name: "香港", pop: "750", unit: "万人", area: "Asia" }, { id: "LA", name: "ラオス", pop: "750", unit: "万人", area: "Asia" }, { id: "SG", name: "シンガポール", pop: "560", unit: "万人", area: "Asia" },
    { id: "NG", name: "ナイジェリア", pop: "22000", unit: "万人", area: "Africa" }, { id: "ET", name: "エチオピア", pop: "13000", unit: "万人", area: "Africa" }, { id: "EG", name: "エジプト", pop: "11000", unit: "万人", area: "Africa" }, { id: "CD", name: "コンゴ民主共和国", pop: "10000", unit: "万人", area: "Africa" }, { id: "TZ", name: "タンザニア", pop: "6700", unit: "万人", area: "Africa" }, { id: "ZA", name: "南アフリカ", pop: "6000", unit: "万人", area: "Africa" }, { id: "KE", name: "ケニア", pop: "5500", unit: "万人", area: "Africa" }, { id: "UG", name: "ウガンダ", pop: "4900", unit: "万人", area: "Africa" }, { id: "SD", name: "スーダン", pop: "4800", unit: "万人", area: "Africa" }, { id: "DZ", name: "アルジェリア", pop: "4600", unit: "万人", area: "Africa" }, { id: "MA", name: "モロッコ", pop: "3800", unit: "万人", area: "Africa" }, { id: "AO", name: "アンゴラ", pop: "3700", unit: "万人", area: "Africa" }, { id: "GH", name: "ガーナ", pop: "3400", unit: "万人", area: "Africa" }, { id: "MZ", name: "モザンビーク", pop: "3400", unit: "万人", area: "Africa" }, { id: "MG", name: "マダガスカル", pop: "3000", unit: "万人", area: "Africa" }, { id: "CI", name: "コートジボワール", pop: "2900", unit: "万人", area: "Africa" }, { id: "CM", name: "カメルーン", pop: "2900", unit: "万人", area: "Africa" }, { id: "NE", name: "ニジェール", pop: "2700", unit: "万人", area: "Africa" }, { id: "BF", name: "ブルキナファソ", pop: "2300", unit: "万人", area: "Africa" }, { id: "ML", name: "マリ", pop: "2300", unit: "万人", area: "Africa" }, { id: "MW", name: "マラウイ", pop: "2100", unit: "万人", area: "Africa" }, { id: "ZM", name: "ザンビア", pop: "2100", unit: "万人", area: "Africa" }, { id: "SN", name: "セネガル", pop: "1800", unit: "万人", area: "Africa" }, { id: "TD", name: "チャド", pop: "1800", unit: "万人", area: "Africa" }, { id: "SO", name: "ソマリア", pop: "1800", unit: "万人", area: "Africa" }, { id: "ZW", name: "ジンバブエ", pop: "1700", unit: "万人", area: "Africa" }, { id: "GN", name: "ギニア", pop: "1400", unit: "万人", area: "Africa" }, { id: "RW", name: "ルワンダ", pop: "1400", unit: "万人", area: "Africa" }, { id: "BJ", name: "ベナン", pop: "1400", unit: "万人", area: "Africa" }, { id: "BI", name: "ブルンジ", pop: "1300", unit: "万人", area: "Africa" }, { id: "TN", name: "チュニジア", pop: "1200", unit: "万人", area: "Africa" }, { id: "SS", name: "南スーダン", pop: "1100", unit: "万人", area: "Africa" }, { id: "LY", name: "リビア", pop: "730", unit: "万人", area: "Africa" }, { id: "LR", name: "リベリア", pop: "540", unit: "万人", area: "Africa" }, { id: "NA", name: "ナミビア", pop: "290", unit: "万人", area: "Africa" }, { id: "BW", name: "ボツワナ", pop: "240", unit: "万人", area: "Africa" },
    { id: "RU", name: "ロシア", pop: "14000", unit: "万人", area: "Europe" }, { id: "DE", name: "ドイツ", pop: "8400", unit: "万人", area: "Europe" }, { id: "GB", name: "イギリス", pop: "6800", unit: "万人", area: "Europe" }, { id: "FR", name: "フランス", pop: "6800", unit: "万人", area: "Europe" }, { id: "IT", name: "イタリア", pop: "5900", unit: "万人", area: "Europe" }, { id: "ES", name: "スペイン", pop: "4700", unit: "万人", area: "Europe" }, { id: "PL", name: "ポーランド", pop: "3800", unit: "万人", area: "Europe" }, { id: "UA", name: "ウクライナ", pop: "3700", unit: "万人", area: "Europe" }, { id: "RO", name: "ルーマニア", pop: "1900", unit: "万人", area: "Europe" }, { id: "NL", name: "オランダ", pop: "1800", unit: "万人", area: "Europe" }, { id: "BE", name: "ベルギー", pop: "1100", unit: "万人", area: "Europe" }, { id: "CZ", name: "チェコ", pop: "1000", unit: "万人", area: "Europe" }, { id: "SE", name: "スウェーデン", pop: "1000", unit: "万人", area: "Europe" }, { id: "PT", name: "ポルトガル", pop: "1000", unit: "万人", area: "Europe" }, { id: "GR", name: "ギリシャ", pop: "1000", unit: "万人", area: "Europe" }, { id: "HU", name: "ハンガリー", pop: "960", unit: "万人", area: "Europe" }, { id: "AT", name: "オーストリア", pop: "910", unit: "万人", area: "Europe" }, { id: "BY", name: "ベラルーシ", pop: "900", unit: "万人", area: "Europe" }, { id: "RS", name: "セルビア", pop: "710", unit: "万人", area: "Europe" }, { id: "CH", name: "スイス", pop: "880", unit: "万人", area: "Europe" }, { id: "BG", name: "ブルガリア", pop: "640", unit: "万人", area: "Europe" }, { id: "DK", name: "デンマーク", pop: "590", unit: "万人", area: "Europe" }, { id: "FI", name: "フィンランド", pop: "550", unit: "万人", area: "Europe" }, { id: "SK", name: "スロバキア", pop: "540", unit: "万人", area: "Europe" }, { id: "NO", name: "ノルウェー", pop: "550", unit: "万人", area: "Europe" },
    { id: "US", name: "アメリカ", pop: "34000", unit: "万人", area: "NorthAmerica" }, { id: "MX", name: "メキシコ", pop: "13000", unit: "万人", area: "NorthAmerica" }, { id: "CA", name: "カナダ", pop: "3900", unit: "万人", area: "NorthAmerica" }, { id: "GT", name: "グアテマラ", pop: "1800", unit: "万人", area: "NorthAmerica" }, { id: "HT", name: "ハイチ", pop: "1200", unit: "万人", area: "NorthAmerica" }, { id: "CU", name: "キューバ", pop: "1100", unit: "万人", area: "NorthAmerica" }, { id: "DO", name: "ドミニカ共和国", pop: "1100", unit: "万人", area: "NorthAmerica" }, { id: "HN", name: "ホンジュラス", pop: "1000", unit: "万人", area: "NorthAmerica" }, { id: "SV", name: "エルサルバドル", pop: "630", unit: "万人", area: "NorthAmerica" },
    { id: "BR", name: "ブラジル", pop: "21000", unit: "万人", area: "SouthAmerica" }, { id: "CO", name: "コロンビア", pop: "5200", unit: "万人", area: "SouthAmerica" }, { id: "AR", name: "アルゼンチン", pop: "4600", unit: "万人", area: "SouthAmerica" }, { id: "PE", name: "ペルー", pop: "3400", unit: "万人", area: "SouthAmerica" }, { id: "VE", name: "ベネズエラ", pop: "2800", unit: "万人", area: "SouthAmerica" }, { id: "CL", name: "チリ", pop: "2000", unit: "万人", area: "SouthAmerica" }, { id: "EC", name: "エクアドル", pop: "1800", unit: "万人", area: "SouthAmerica" }, { id: "BO", name: "ボリビア", pop: "1200", unit: "万人", area: "SouthAmerica" }, { id: "PY", name: "パラグアイ", pop: "690", unit: "万人", area: "SouthAmerica" },
    { id: "AU", name: "オーストラリア", pop: "2600", unit: "万人", area: "Oceania" }, { id: "PG", name: "パプアニューギニア", pop: "1000", unit: "万人", area: "Oceania" }
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
    polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];
    let template = polygonSeries.mapPolygons.template;
    template.fill = am4core.color("#aaaaaa");
    template.stroke = am4core.color("#ffffff");
    template.strokeWidth = 0.5;
    chart.events.on("ready", () => nextQuestion());
    }
    
    function nextQuestion() {
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
    
    function checkAnswer() {
    const input = document.getElementById("answer-input").value.trim();
    const correct = quizMode === "name" ? currentCountry.name : currentCountry.pop;
    const feedback = document.getElementById("feedback");
    
    if (input === correct) {
    if (quizMode === "name") {
    feedback.innerText = `⭕ 正解！：${correct}`;
    } else {
    feedback.innerText = `⭕ 正解！：${correct}${currentCountry.unit}`;
    }
    feedback.style.color = "green";
    
    if (!isMistakenInThisTurn) {
    score++;
    document.getElementById("score").innerText = score;
    }
    
    document.getElementById("answer-input").style.display = "none";
    quizMode = (quizMode === "name") ? "result_name" : "result_pop";
    } else {
    feedback.innerText = `❌ 正解は「${correct}」`;
    feedback.style.color = "red";
    isMistakenInThisTurn = true;
    document.getElementById("answer-input").value = "";
    document.getElementById("answer-input").focus();
    }
    }
    
    function showFinalResult() {
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
    nextQuestion();
    } else {
    checkAnswer();
    }
    }
    });
    
    