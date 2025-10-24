---
layout: default
title: 野生動物調査システム | 中根進之介
permalink: /projects/animal-iot/
---

# 畑の野生動物の調査＆撃退システム

畑に訪れ、作物を荒らしてく野生動物を調査し撃退するためのシステムを開発しました。


使用したもの<br>
・Arduino nano<br>
・PIRセンサ<br>
・Arducam Miniモジュール（5メガピクセル）<br>
・LEDライト<br>
・モスフェット<br>
・MP3Player<br>
・スピーカー<br>
・バッテリー<br>

PIRセンサは赤外線を常にモニターし、モニター範囲内の状態に変化があれば１をなければ０を返します。
これを用いて、赤外線の動きを検知したらLED点灯しカメラで撮影をするようにして、
自動で近づいてきた動物を撮影するシステムを開発しました。
<!-- 動画を挿入 -->
<div class="video-wrapper">
  <video controls playsinline poster="{{ '/images/video-poster.png' | relative_url }}">
    <source src="{{ '/assets/videos/your-video.mp4' | relative_url }}" type="video/mp4">
    ブラウザが video タグをサポートしていません。
  </video>
</div>
合計で５日間ほど実際に設置して調査をしましたが実際に動物の様子を写真に収めることはできませんでした。
考察として


## VISIT
<img class="img-fluid" src="/shin.nakane.achive/images/visit.png">
