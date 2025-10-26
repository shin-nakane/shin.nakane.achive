---
layout: default
title: pythoncode | 中根進之介
permalink: /code/dailymap/
---

```python
import numpy as np
import matplotlib.pyplot as plt

# ====== 設定部分 ======
x = "07"
exclude_upper_percent = 0
exclude_lower_percent = 0

file_path1 = f"/work3/snakane/shintest/output/pcycle10/MSTMIP_V{x}_1905_241219_PCYCLE.flt"
n_day = 365
n_lat = 360
n_lon = 720
total_size = n_day * n_lat * n_lon

# ====== データ読み込み ======
data_flat = np.fromfile(file_path1, dtype=np.float32, count=total_size)
data = data_flat.reshape((n_day, n_lat, n_lon))
data = np.where(data == -9999.0, np.nan, data)

# ====== 有効データ抽出 ======
finite_values = data[np.isfinite(data)]
if len(finite_values) == 0:
    raise ValueError("有効なデータが存在しません。")

data_filtered = data.copy()

# ====== 上位除外 ======
if exclude_upper_percent > 0:
    upper_threshold = np.percentile(finite_values, 100 - exclude_upper_percent)
    data_filtered[data_filtered >= upper_threshold] = np.nan
    print(f"上位 {exclude_upper_percent}% 除外閾値: {upper_threshold:.4f}")
else:
    print("上位除外: なし")

# ====== 下位除外 ======
if exclude_lower_percent > 0:
    lower_threshold = np.percentile(finite_values, exclude_lower_percent)
    data_filtered[data_filtered <= lower_threshold] = np.nan
    print(f"下位 {exclude_lower_percent}% 除外閾値: {lower_threshold:.4f}")
else:
    print("下位除外: なし")

# ====== 1日ごとの全球合計 ======
daily_sum = np.nansum(np.nansum(data_filtered, axis=2), axis=1)

# ====== 結果の表示 ======
print("---- 年間統計 ----")
print(f"年間合計値: {np.nansum(daily_sum):.2f}")
print(f"日平均値: {np.nanmean(daily_sum):.2f}")
print(f"最大日合計値: {np.nanmax(daily_sum):.2f}")
print(f"最小日合計値: {np.nanmin(daily_sum):.2f}")

# ====== プロット ======
plt.figure(figsize=(10, 5))
plt.plot(range(1, n_day+1), daily_sum, color='steelblue')
plt.title(f"Daily Global Sum of GPP(Year 1905)\nTop {exclude_upper_percent}% and Bottom {exclude_lower_percent}% excluded")
plt.xlabel("Day of Year")
plt.ylabel("Global Sum of GPP(MgC day⁻¹)")
plt.grid(True, linestyle="--", alpha=0.5)
plt.tight_layout()
plt.show()
```