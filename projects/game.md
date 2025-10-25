---
layout: default
title: ゲーム開発 | 中根進之介
permalink: /projects/game/
---

# 簡単なゲーム

c言語を用いて簡単なゲームを作成しました。


## ギャンブルゲーム
所持金をランダムに決定し、その所持金を使ってギャンブルを繰り返し
１０万円に到達したらゲームクリアお金がなくなればゲームオーバーというゲームです<br>
[▶️ ギャンブルゲーム]({{ '/gameplay/' | relative_url }})
<img class="img-fluid" src="/shin.nakane.achive/images/visit.png">

```
#include <stdio.h>
#include <stdlib.h>
#include <math.h> 
#include <windows.h>

int main(void)
{
	int i, seed, level, p, j,a,b, h,number, money, moneyy;
	printf("\n\n\nsinのギャンブル道場へようこそ\n\nPress Enter!!\n\n");
	getchar();
	printf("あなたははじめの所持金を１０万円にしたらgameクリアです\n\nPress Enter!!\n\n");
	getchar();
	printf("あなたの所持金をランダムに決定します。\n好きな整数を入力してください。:     ");
	scanf("%d", &seed);
	srand(seed);
	getchar();
	p=rand()%100000+1;
	printf("\n\nあなたの所持金は%d円です\n\nPress Enter!!\n",p);
		getchar();
		while(p > 0 && p < 100000){
		for (j=1;1<=j<=100;j++){
			printf("\n\n\n第%dラウンドです\n",j);
		while(1){
			printf("\nギャンブル場を(1.2.3)から選んでください。倍率とリターンは順に2，3，5倍です:  ");	 
			scanf("%d",&level);
			if(level==1||level==2||level==3){
					break;
			}else{
					printf("\n無効な選択です\n");
			}
		}
		while(1){
			printf("\n\n賭ける金額をあなたの所持金(0<x<%d)円から決めてください:  ",p);
			scanf("%d",&money);
			if(0<money&&money<=p){
					break;
			}else{
					printf("\n無効な選択です\n");
			}
		}
			p=p-money;
				if(level==1){
					printf("\n\n(1.2)からあなたの賭ける数字を選んでください:  ");
					scanf("%d",&number);
					h=rand()%2+1;
					b=2;
				}else if(level==2){
					printf("\n\n(1.2.3)からあなたの賭ける数字を選んでください:  ");
					scanf("%d",&number);
					h=rand()%3+1;
					b=3;
				}else if(level==3){
					printf("\n\n(1.2.3.4.5)からあなたの賭ける数字を選んでください:  ");
					scanf("%d",&number);
					h=rand()%5+1;
					b=5;
				}
			getchar();
				if(number==h){
					printf("\n当たりです。賭け金が%d倍になります\n",b);
					moneyy=b*money;
					p=moneyy+p;
					printf("\nあなたの所持金が%d円になりました\n\nPress Enter!!\n\n\n",p);
				}else{
					printf("\nはずれです。賭け金が0になります\n\n\n");
					printf("\nあなたの所持金が%d円になりました\n\nPress Enter!!\n\n\n",p);
				}
				getchar();
			 if (p <= 0 || p >= 100000) {
               		 break;
			}
		}
	}
	if(p>=100000){
		printf("\ngemeクリアです。なかなかやりますの\n");
	}else if(p<=0){
		printf("\ngameオーバーです。まだまだ力不足ですね\n");
	}
	return(0);
}
```