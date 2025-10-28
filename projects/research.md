---
layout: default
title: 研究内容 | 中根進之介
permalink: /projects/research/
---

# 研究内容

シミュレーションモデルを用いて陸域生態系における物質循環について研究しています。
[(陸域生態系モデリング研究室website)](https://terraecomod.wixsite.com/kato-lab-hokudai-j)
日本を代表する陸域生態系モデルであるVISIT(Vegetation Integrative SImulator for Tarce gases)を使用し、オリジナルの炭素と窒素に加えリンの循環を加えたVISIT-CNPモデルの開発を行っています。


## VISIT
<img class="img-fluid" src="/shin.nakane.achive/images/visit.png">
VISIT のオリジナルでは陸域における炭素、窒素、そして水の循環をシミュレーションします。
植物と土壌を複数のプールにわけ、各物質のプール内の量やボプール間の移動量を計算します。
全球の計算では地球を緯度方向に360分割、経度方向に720分割の合計259200個に分割し、
各グリッドにおけるプールと移動量の計算を行います。
VISITはCによって記述されたプログラムにより構成されています。

## VISIT-CNP
現在私はこのVISITの循環に新たにリンの循環を導入したVISIT-CNPモデルの開発を行っています。
窒素は光合成を駆動するRubiscoのカルボキシ化速度に関与し、リンはタンパク質の生成と維持を駆動する
ribosomal RNAに関与します。
つまり窒素とリンはともに植物の成長を制限する主要な要因であり、炭素循環に大きな影響を与えます。
<img class="img-fluid" src="/shin.nakane.achive/images/nplimitation.png">
陸域における炭素貯蔵量は、地球温暖化の影響を考える上でとても重要です。<br>
さらにリンと窒素は人間活動によって、循環のバランスが大きく変化しています。
農業の近代化に伴い、化学肥料の利用が世界で爆発的に増えました。それに伴い農地からの
流出が増加し、故障などの富栄養化を引き起こすなど水質汚染の原因となっています。
地球の安定を維持する本質的な生物物理学的な過程に基づき、「地球で人類が安全に活動できる範囲」を科学的に定義したプラネタリー・バウンダリー（planetary boundaries：地球の限界）に基づく推定では、リンと窒素による汚染はすでに地球が支えられる量を超えているとされています。
<img class="img-fluid" src="/shin.nakane.achive/images/planet.png">
[国立環境研究所website](https://cger.nies.go.jp/cgernews/202012/360002.html)

窒素、炭素、リンの循環を理解することは気候変動、水質汚染など地球規模の問題の対策を考える上で不可欠であり、
精度の高いCNPモデルを開発することは、それらの理解に大きく貢献します。