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

//背景レイヤ
let mapLayer = {
  "Open Street Map": osm,
  "国土地理院": chiriin,
  "MIERUNE": mierune
};

L.control.layers(
    mapLayer,
).addTo(map);
