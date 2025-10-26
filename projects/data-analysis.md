---
layout: default
title: データ分析プロジェクト詳細 | 中根進之介
permalink: /projects/data-analysis/
---

# グローバルデータ分析

シミュレーションによって得た全球の情報をpythonを用いて解析しています。
全球の計算ha地球を緯度方向に360分割、経度方向に720分割の合計259200個に分割し、
各グリッドにおけるプールと移動量の計算を行います。
バイナリファイルで出力される様々な結果を可視化し分析、
そしてその結果を見てモデルを改良、また分析と繰り返して開発を行います。


## GPPの様子

<figure class="figure">
  <img class="img-fluid" src="{{ '/images/gppdaily.png' | relative_url }}" alt="データ分析図">
  <figcaption class="figure-caption">図：全球のある1日のGPPの様子</figcaption>
</figure>
コードはこちら: [dailychange.py]({{ '/code/dailymap.py' | relative_url }})



<figure class="figure">
  <img class="img-fluid" src="{{ '/images/yearly_change.png' | relative_url }}" alt="データ分析図">
  <figcaption class="figure-caption">図：1日の全球GPP合計の季節変化</figcaption>
</figure>
[詳細を見る]({{ '/code/yearly_change/' | relative_url }})