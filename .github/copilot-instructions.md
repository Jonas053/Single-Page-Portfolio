# Copilot / AI Agent 指令（Single-Page-Portfolio）

此專案為單頁作品集（純靜態 HTML/CSS/JS）。下列說明幫助 AI 代理快速上手、做出可合併、可測試的變更。

要點總覽
- 技術堆疊：純靜態前端（`index.html`, `style.css`, `script.js`），無建置步驟。
- 主要設計：以 `:root` CSS 變數管理主色（`--accent`），響應式規則針對 `max-width:600px`。
- 互動位置：平滑捲動由 `html { scroll-behavior: smooth }` 提供，額外互動在 `script.js`（對話輪播、stickman 動畫）

修改與新增規範（對 AI 的具體指令）
- 若調整配色或字級，編輯 `style.css` 的 `:root` 或對應選擇器（例如改主色請修改 `--accent`）。
  - 範例：把主色改為 `#ff6600`，只需替換 `--accent:#bd2604;`。
- 圖片檔名與路徑：`index.html` 使用的圖片必須存在於專案根目錄。
  - 常見檔名：`我的照片.jpg`, `bigguy.jpg`, `campfire.jpg`, `stickman.png`, `專案軟軟的人.png`, `專案逐格動畫雜訊.png`, `WRO比賽.png`。
  - 若改動檔名，請同步更新 `index.html` 的 `<img src="...">`。
- 要新增互動（例如把 stickman 動畫改為循環往返），修改 `script.js`，並保持現有 API（DOM id：`#stickman`, `#speech`）。
  - 範例：`document.getElementById('stickman')` 會回傳元素，若不存在請先確認 `index.html` 的 id 是否一致。

分支與實驗流程（A/B 測試建議）
- 主分支：`main` 保持可部署狀態。實驗或替代動畫請在分支下進行，例如 `feature/stickman-a`、`feature/stickman-b`。
- 建議工作流程：
  1. 建立分支 `git switch -c feature/stickman-b`
  2. 實作變更（僅修改 `index.html`/`style.css`/`script.js`）
  3. 本地測試（直接開 `index.html` 或使用 VS Code Live Server）
  4. `git add -A && git commit -m "feat: stickman alternate animation" && git push -u origin feature/stickman-b`

測試與驗證（手動）
- 因為是靜態頁面，測試包含：
  - 在瀏覽器開 `index.html`（或 Live Server）檢查圖片是否載入、排版是否在 <600px 下顯示為單欄。
  - 點選導覽錨點（若有）確認平滑捲動正常。
  - 觀察 stickman 與 footer 對話是否如預期輪播。

專案慣例與注意事項
- 不要新增打包工具或 node 依賴，專案是單純靜態站點。
- 圖片有時使用中文檔名，AI 修改時要保留或明確替換為 ASCII 安全名稱，並同步 `index.html`。
- 動畫請盡量使用 CSS 為主（可在 `style.css` 新增 keyframes），僅在需要時使用 `script.js` 控制觸發。

常見修改例子（可直接套用）
- 改主色：`style.css` -> `:root{ --accent:#bd2604; }` → 換色後檢查 header 與 dot 色彩。
- 調整大頭照大小：修改 `.profile{width:140px;height:140px}`。
- 讓 stickman 往返移動：在 `script.js` 改用 CSS class 切換，或使用 `requestAnimationFrame`/`setInterval` 實作往返行為。

若你需要我（AI）直接修改檔案，請明確指示：
- 要修改的檔案（例如 `style.css`）
- 要改的行為或新檔案（例如 `增加 index-b.html 作為 A/B`）
- 是否需要我同時建立分支並 push（我會回傳具體 git 指令供你執行）

---
請檢視此檔案內容，告訴我要補充或刪減的專案細節（例如特定圖片實際檔名或你希望的分支命名規則）。