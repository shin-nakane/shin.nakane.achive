---
layout: default
title: pythoncode | 中根進之介
permalink: /code/dailymap/
---

<style>
/* コードブロックの中央寄せと折り返し */
main {
  max-width: 900px; /* 他の記事と同じ幅に調整 */
  margin: 0 auto;
  padding: 1rem;
}

pre {
  background: #1e1e1e; /* ダーク背景（任意） */
  color: #eee;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto; /* 横スクロール対応 */
  white-space: pre-wrap; /* 長い行を折り返す */
  word-wrap: break-word;
}
</style>

```python
import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature
import matplotlib.colors as mcolors

x = "01"
y = 0
z = 100
d = 200
c = "viridis"
exclude_upper_percent = 0  # 上位何%を除外するか（0-50の範囲で設定）
exclude_lower_percent = 0   # 下位何%を除外するか（0-50の範囲で設定）

# データ設定
file_path1 = f"/work3/snakane/shintest/output/pcycle/MSTMIP_V{x}_1905_241219_PCYCLE.flt"
n_day = 365
n_lat = 360
n_lon = 720
total_size = n_day * n_lat * n_lon

# バイナリ読み込みと整形
data_flat = np.fromfile(file_path1, dtype=np.float32, count=total_size)
data = data_flat.reshape((n_day, n_lat, n_lon))
data = np.where(data == -9999.0, np.nan, data)


# 指定日（例：100日目）
target_day = d
gpp_map = data[target_day, :, :]

# パーセンテージで除外する値を設定
finite_mask = np.isfinite(gpp_map)
finite_values = gpp_map[finite_mask]

if len(finite_values) > 0:
    gpp_map_filtered = gpp_map.copy()
    
    # 上位除外の処理（exclude_upper_percent > 0の場合のみ）
    if exclude_upper_percent > 0:
        upper_exclude_threshold = np.percentile(finite_values, 100 - exclude_upper_percent)
        upper_excluded = gpp_map >= upper_exclude_threshold
        gpp_map_filtered[upper_excluded] = np.nan
        print(f"上位除外閾値 ({100 - exclude_upper_percent}パーセンテール): {upper_exclude_threshold:.4f}")
        print(f"上位除外した値の数: {np.sum(upper_excluded)}")
    else:
        print("上位除外: なし")
    
    # 下位除外の処理（exclude_lower_percent > 0の場合のみ）
    if exclude_lower_percent > 0:
        lower_exclude_threshold = np.percentile(finite_values, exclude_lower_percent)
        lower_excluded = gpp_map <= lower_exclude_threshold
        gpp_map_filtered[lower_excluded] = np.nan
        print(f"下位除外閾値 ({exclude_lower_percent}パーセンテール): {lower_exclude_threshold:.4f}")
        print(f"下位除外した値の数: {np.sum(lower_excluded)}")
    else:
        print("下位除外: なし")
    
    print(f"残りの有効データ数: {np.sum(np.isfinite(gpp_map_filtered))}")
else:
    gpp_map_filtered = gpp_map
    print("有限値が存在しません")

# 緯度経度作成
lons = np.linspace(-180, 180, n_lon)
lats = np.linspace(90, -90, n_lat)
lon_grid, lat_grid = np.meshgrid(lons, lats)


vmin_percentile = y
vmax_percentile = z
vmin = np.nanpercentile(gpp_map_filtered, vmin_percentile)
vmax = np.nanpercentile(gpp_map_filtered, vmax_percentile)

# --- Cartopy プロット ---
fig = plt.figure(figsize=(12, 6))
ax = plt.axes(projection=ccrs.PlateCarree())
pcm = ax.pcolormesh(lon_grid, lat_grid, gpp_map_filtered, cmap=f"{c}", shading='auto', transform=ccrs.PlateCarree(), vmin=vmin, vmax=vmax)

ax.coastlines()
ax.add_feature(cfeature.BORDERS, linestyle=':')
ax.set_title(f"Global  Map of  GPP Values(MgC ha⁻² day⁻¹) (Day {d+1}, Year 1905) - Top {exclude_upper_percent}% and Bottom {exclude_lower_percent}% excluded")
plt.colorbar(pcm, ax=ax, orientation='vertical', label="")

plt.tight_layout()
plt.show()
```
