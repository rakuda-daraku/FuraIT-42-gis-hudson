// Open Street Map レイヤー
const osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

// 地理院タイル
const chiriin = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

// MIERUNEタイル
const mierune = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
  attribution: '&copy; Maptiles by <a href="http://mierune.co.jp/" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.'
});

let map = L.map('map', {
  center: [43.4047068, 142.4223918],
  zoom: 7,
  zoomControl: true,
  layers: [osm]
});

// 松屋レイヤー
// L.geoJson(matuya).addTo(map);

// 北海道レイヤー
// L.geoJson(hokkaido,  {
  // onEachFeature: function (feature, layer) {
  //   layer.bindPopup(feature.properties.N03_004);
  // },
  // style: function(feature) {
  //   return myStyle(feature);
  // }
// }).addTo(map);


// 背景レイヤ
let mapLayer = {
  "Open Street Map": osm,
  "国土地理院": chiriin,
  "MIERUNE": mierune
};

// レイヤーコントローラーの表示
L.control.layers(
    mapLayer
).addTo(map);

// スケールの表示
L.control.scale({
  imperial: false,
  maxWidth: 500
}).addTo(map);

function myStyle(feature) {
  const colors = {
    "石狩振興局": '#4169e1',
    "渡島総合振興局": "#778899",
    "後志総合振興局": "#e5a323",
    "上川総合振興局": "#b22222",
    "胆振総合振興局": "#006400",
    "釧路総合振興局": "#bc611e",
    "十勝総合振興局": "#8b4513",
    "オホーツク総合振興局": "#5a4498",
    "空知総合振興局": "#000080",
    "留萌振興局": "#409ecc",
    "宗谷総合振興局": "#ff6347",
    "根室振興局": "#696969",
    "檜山振興局": "#ffd700",
    "日高振興局": "#434da2"
  };

  style = {
    "color": colors[feature.properties.N03_002],
    "weight": 2,
    "opacity": 1
  };
  return style;
}
