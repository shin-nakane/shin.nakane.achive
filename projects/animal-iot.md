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
  <video controls playsinline poster="{{ '/images/animal-iot.png' | relative_url }}">
    <source src="{{ '/videos/animal-iot.mp4' | relative_url }}" type="video/mp4">
    ブラウザが video タグをサポートしていません。
  </video>
</div>
<img class="img-fluid" src="/shin.nakane.achive/images/visit.png">
合計で５日間ほど実際に設置して調査をしましたが実際に動物の様子を写真に収めることはできませんでした。
設置している間は何度か問題なく動いているかを確かめていてシステムは正常に動いており、
動物は調査範囲に訪れなかった可能性が高いと考えられます。
今回動物の様子を捉えることができませんでしたが、その原因として
装置一台では足りないということに加えて
この装置自体が野生動物が警戒する対象になっていたのではないかと思っています。


最後にカラスがやってくることを想定して、カラスよけの音を鳴らすシステムを加えて、終了しました。

## VISIT
<img class="img-fluid" src="/shin.nakane.achive/images/visit.png">
