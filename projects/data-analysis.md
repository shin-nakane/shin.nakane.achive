---
layout: default
title: データ分析プロジェクト詳細 | 中根進之介
permalink: /projects/data-analysis/
---

# グローバルデータ分析

シミュレーションによって得た全球の情報をpythonを用いて解析しています。
全球の計算は地球を緯度方向に360分割、経度方向に720分割の合計259200個に分割し、
各グリッドにおけるプール間の移動量そしてプールの量の計算を行います。プールとは植物バイオマスの量や、地中におけるバイオマス量のことです。
バイナリファイルで出力される様々な結果を可視化し分析、
そしてその結果を見てモデルを改良、また分析と繰り返して開発を行います。


## GPPの様子

<figure class="figure">
  <img class="img-fluid" src="{{ '/images/gppdaily.png' | relative_url }}" alt="データ分析図">
  <figcaption class="figure-caption">図：全球のある1日のGPPの様子</figcaption>
</figure>
[コードを見る]({{ '/code/dailymap/' | relative_url }})



<figure class="figure">
  <img class="img-fluid" src="{{ '/images/yearly_change.png' | relative_url }}" alt="データ分析図">
  <figcaption class="figure-caption">図：1日の全球GPP合計の季節変化</figcaption>
</figure>
[コードを見る]({{ '/code/yearly_change/' | relative_url }})