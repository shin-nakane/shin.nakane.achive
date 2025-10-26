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


<figure class="figure">
  <img class="img-fluid" src="{{ '/images/gppmap.png' | relative_url }}" alt="データ分析図">
  <figcaption class="figure-caption">図：全球分割と解析に用いたグリッド配置（緯度360×経度720）</figcaption>
</figure>
