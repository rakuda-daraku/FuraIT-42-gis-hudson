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
  zoom: 18,
  zoomControl: true,
  layers: [osm]
});

// アイコンマーカー（デフォルト）
let marker = L.marker([43.4047068, 142.4223918]).addTo(map);
// marker.bindPopup('<b>ふれあいセンターなかまーる</b><br>北海道空知郡中富良野町南町10−10').openPopup();

// アイコンマーカー（アイコン画像を変更）
// let icon = new L.Icon({
//   iconUrl: 'img/building_kouminkan.png',
//   iconRetinaUrl: 'img/building_kouminkan.png',
//   iconSize:     [38, 95],
//   shadowSize:   [50, 64],
//   iconAnchor:   [22, 94],
//   shadowAnchor: [4, 62],
//   popupAnchor:  [-3, -76]
// });
//
// let customMarker = L.marker([43.4047068, 142.4223918], {icon: icon}).addTo(map);

// サークル
// let circle = L.circle([43.4047068, 142.4223918], 100, {
//     color: 'red',
//     fillColor: '#0402ff',
//     fillOpacity: 0.5
//   }).addTo(map);

// ライン
// let marker = L.marker([43.4047068, 142.4223918]).addTo(map);
// let line = L.polyline([
//       [ 43.405051385195776, 142.42116808891294],
//       [ 43.40557752182578, 142.42162942886353],
//       [ 43.40523066189408, 142.42238581180573],
//       [ 43.404860415955284, 142.42207467556],
//       [ 43.4047068, 142.4223918]
//     ],
//     {
//       "color": "#0402ff",
//       "weight": 5,
//       "opacity": 0.6
//     }
// ).addTo(map);

// ポリゴン
// let polygon = L.polygon([
//       [ 43.40498902795896, 142.42235898971558],
//       [ 43.40486821062996, 142.42225170135498],
//       [ 43.40476687978113, 142.42248237133026],
//       [ 43.40487600530363, 142.42258429527283]
//     ],
//     {
//       "color": "#0402ff",
//       "weight": 5,
//       "opacity": 0.6
//     }
// ).addTo(map);

//背景レイヤ
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
