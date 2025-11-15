/**
 * 實驗二：字型飽和測驗
 * 
 * 實驗目的：測量受試者在相同字型刺激下，注意力下降與字型飽和的速度
 * 
 * 實驗流程：
 * 1. 歡迎頁 - 顯示實驗說明
 * 2. 教學示例頁 - 顯示 6×6 字格示意圖
 * 3. 正式實驗 - 10 trials，每次顯示 6×6 中文矩陣，3個錯字
 * 4. 結束頁 - 顯示結果摘要
 */

// 全域變數
let jsPsychInstance = null;
let currentTrialStartTime = null;

// 等待 DOM 載入完成和按鈕點擊
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const loadingDiv = document.getElementById('loading');
    const experimentDiv = document.getElementById('jspsych-experiment');
    
    startButton.addEventListener('click', function() {
        // 隱藏開始畫面，顯示載入中
        startScreen.style.display = 'none';
        loadingDiv.style.display = 'block';
        
        // 檢查 jsPsych 是否載入
        if (typeof initJsPsych === 'undefined' || typeof jsPsychHtmlKeyboardResponse === 'undefined' || typeof jsPsychHtmlButtonResponse === 'undefined') {
            loadingDiv.innerHTML = '<p style="color: red;">錯誤：無法載入 jsPsych 庫。請檢查網路連線，或稍後再試。</p><p style="color: #666; margin-top: 10px;">如果問題持續，請確認 CDN 連線正常。</p>';
            return;
        }
        
        // 初始化 jsPsych
        initializeExperiment();
    });
});

/**
 * 初始化實驗
 */
function initializeExperiment() {
    // 初始化 jsPsych
    jsPsychInstance = initJsPsych({
        display_element: 'jspsych-experiment',
        on_finish: function() {
            // 實驗結束時顯示結果
            showResults(jsPsychInstance);
        }
    });
    
    // 隱藏載入畫面，顯示實驗容器
    document.getElementById('loading').style.display = 'none';
    document.getElementById('jspsych-experiment').style.display = 'block';
    
    // 建立實驗時間軸
    const timeline = createTimeline();
    
    // 開始實驗
    jsPsychInstance.run(timeline);
}

/**
 * 建立實驗時間軸
 */
function createTimeline() {
    const timeline = [];
    
    // 1. 歡迎頁
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
            <div class="welcome-text">
                <h2>歡迎參與實驗二：字型飽和測驗</h2>
                <p>在這個實驗中，您將看到 6×6 的中文文字矩陣。</p>
                <p>每個矩陣中有 <strong>3 個錯字</strong>，您的任務是找出並點擊其中<strong>任意一個錯字</strong>。</p>
                <p>請盡可能快速且準確地回答。</p>
                <p style="margin-top: 40px; font-size: 16px; color: #666;">準備好後，請按任意鍵繼續。</p>
            </div>
        `,
        choices: "ALL_KEYS",
    });
    
    // 2. 教學示例頁
    timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `
            <div>
                <h2 style="text-align: center;">教學示例</h2>
                <p class="instruction-text">以下是一個 6×6 的文字矩陣範例，標示為<strong style="color: #e65100;">黃色</strong>的文字是錯字：</p>
                <div class="example-grid">
                    ${generateExampleGrid()}
                </div>
                <p class="instruction-text" style="margin-top: 30px;">在正式實驗中，您需要點擊錯字來完成每個測驗。</p>
            </div>
        `,
        choices: ['我知道了'],
        button_html: '<button class="jspsych-btn">%choice%</button>'
    });
    
    // 3. 正式實驗 - 10 trials
    for (let trialNum = 1; trialNum <= 10; trialNum++) {
        // 產生隨機 6×6 矩陣和錯字位置
        const trialData = generateTrialMatrix(trialNum);
        
        // 使用自訂的 HTML 外掛來處理點擊
        timeline.push({
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                // 記錄 trial 開始時間
                currentTrialStartTime = Date.now();
                
                return `
                    <div>
                        <h3 style="text-align: center; margin-bottom: 20px;">測驗 ${trialNum} / 10</h3>
                        <p class="instruction-text">請點擊錯字中的任意一個：</p>
                        <div class="word-grid" id="grid-${trialNum}">
                            ${generateGridHTML(trialData.matrix, trialData.wrongPositions, trialNum)}
                        </div>
                    </div>
                `;
            },
            choices: "NO_KEYS",
            trial_duration: null, // 無時間限制，由點擊事件控制
            on_load: function() {
                // 為每個字元添加點擊事件
                setupGridClickHandlers(trialData.wrongPositions, trialNum, trialData.matrix);
            },
            data: {
                trial: trialNum,
                wrong_positions: JSON.stringify(trialData.wrongPositions),
                matrix: JSON.stringify(trialData.matrix)
            }
        });
        
        // 添加短暫的間隔
        if (trialNum < 10) {
            timeline.push({
                type: jsPsychHtmlKeyboardResponse,
                stimulus: '<div style="text-align: center; padding: 100px;"><p>準備下一題...</p></div>',
                choices: "NO_KEYS",
                trial_duration: 500,
            });
        }
    }
    
    return timeline;
}

/**
 * 產生教學示例網格 HTML
 */
function generateExampleGrid() {
    // 固定的示例矩陣
    const exampleWords = [
        ['天', '地', '人', '和', '平', '安'],
        ['春', '夏', '秋', '冬', '年', '月'],
        ['山', '水', '火', '土', '金', '木'],
        ['紅', '綠', '藍', '黃', '黑', '白'],
        ['書', '筆', '紙', '墨', '硯', '桌'],
        ['心', '手', '腳', '頭', '眼', '耳']
    ];
    
    // 錯字位置（範例中標示幾個）
    const wrongPositions = [[0, 2], [2, 4], [4, 1]]; // 人、金、筆
    
    let html = '';
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            const isWrong = wrongPositions.some(pos => pos[0] === row && pos[1] === col);
            const word = isWrong ? getWrongWord(exampleWords[row][col]) : exampleWords[row][col];
            const cellClass = isWrong ? 'example-cell example-wrong' : 'example-cell';
            html += `<div class="${cellClass}">${word}</div>`;
        }
    }
    return html;
}

/**
 * 產生一個試驗的矩陣資料
 * @param {number} trialNum - 試驗編號
 * @returns {Object} 包含矩陣和錯字位置的物件
 */
function generateTrialMatrix(trialNum) {
    // 常用繁體中文字庫
    const commonChars = [
        '天', '地', '人', '和', '平', '安', '樂', '善', '美', '好',
        '春', '夏', '秋', '冬', '年', '月', '日', '時', '分', '秒',
        '山', '水', '火', '土', '金', '木', '石', '雲', '風', '雨',
        '紅', '綠', '藍', '黃', '黑', '白', '灰', '紫', '橙', '粉',
        '書', '筆', '紙', '墨', '硯', '桌', '椅', '門', '窗', '燈',
        '心', '手', '腳', '頭', '眼', '耳', '口', '鼻', '眉', '髮',
        '花', '草', '樹', '葉', '果', '實', '種', '根', '枝', '幹',
        '鳥', '魚', '貓', '狗', '兔', '鼠', '牛', '馬', '羊', '豬',
        '衣', '褲', '鞋', '帽', '襪', '袋', '包', '箱', '盒', '籃',
        '米', '麵', '飯', '菜', '肉', '湯', '茶', '水', '酒', '湯'
    ];
    
    // 隨機打亂字庫
    const shuffled = [...commonChars].sort(() => Math.random() - 0.5);
    
    // 建立 6×6 矩陣
    const matrix = [];
    for (let row = 0; row < 6; row++) {
        matrix[row] = [];
        for (let col = 0; col < 6; col++) {
            const index = (row * 6 + col) % shuffled.length;
            matrix[row][col] = shuffled[index];
        }
    }
    
    // 隨機選擇 3 個位置作為錯字
    const wrongPositions = [];
    while (wrongPositions.length < 3) {
        const row = Math.floor(Math.random() * 6);
        const col = Math.floor(Math.random() * 6);
        const pos = [row, col];
        
        // 確保不重複
        if (!wrongPositions.some(p => p[0] === pos[0] && p[1] === pos[1])) {
            wrongPositions.push(pos);
            // 將該位置的字替換為錯字
            matrix[row][col] = getWrongWord(matrix[row][col]);
        }
    }
    
    return { matrix, wrongPositions };
}

/**
 * 取得一個字的錯字版本
 * @param {string} char - 原始字元
 * @returns {string} 錯字版本
 */
function getWrongWord(char) {
    // 錯字替換表（部分範例，可擴充）
    const wrongWordMap = {
        '天': '大', '地': '土', '人': '入', '和': '禾', '平': '半',
        '春': '舂', '夏': '复', '秋': '秌', '冬': '各', '年': '午',
        '山': '出', '水': '永', '火': '大', '土': '士', '金': '全',
        '紅': '江', '綠': '緣', '藍': '籃', '黃': '簧', '黑': '墨',
        '書': '畫', '筆': '等', '紙': '低', '墨': '黑', '硯': '見',
        '心': '必', '手': '毛', '腳': '卻', '頭': '實', '眼': '艮',
        '花': '化', '草': '早', '樹': '對', '葉': '業', '果': '過',
        '鳥': '島', '魚': '漁', '貓': '描', '狗': '夠', '兔': '免',
        '衣': '依', '褲': '庫', '鞋': '懈', '帽': '冒', '米': '迷',
        '安': '案', '樂': '藥', '善': '繕', '美': '每', '好': '號',
        '月': '朋', '日': '目', '時': '持', '分': '份', '石': '右',
        '雲': '運', '風': '丰', '雨': '宇', '灰': '回', '紫': '子',
        '橙': '成', '粉': '份', '椅': '以', '門': '們', '窗': '創',
        '燈': '登', '口': '扣', '鼻': '比', '眉': '每', '髮': '發',
        '實': '時', '種': '中', '根': '跟', '枝': '知', '幹': '敢',
        '鼠': '暑', '牛': '紐', '馬': '媽', '羊': '洋', '豬': '諸',
        '襪': '末', '袋': '代', '包': '保', '箱': '鄉', '盒': '和',
        '籃': '藍', '麵': '面', '飯': '反', '菜': '采', '肉': '內',
        '湯': '堂', '茶': '查', '水': '永', '酒': '九'
    };
    
    // 如果有對應的錯字就用，否則隨機生成相似的字
    if (wrongWordMap[char]) {
        return wrongWordMap[char];
    }
    
    // 如果沒有對應的錯字，從常用錯字中隨機選一個
    const randomWrongChars = ['大', '小', '人', '入', '土', '士', '木', '本', '日', '目'];
    return randomWrongChars[Math.floor(Math.random() * randomWrongChars.length)];
}

/**
 * 產生網格 HTML
 */
function generateGridHTML(matrix, wrongPositions, trialNum) {
    let html = '';
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            const isWrong = wrongPositions.some(pos => pos[0] === row && pos[1] === col);
            const cellClass = isWrong ? 'word-cell wrong-word' : 'word-cell';
            const cellId = `cell-${trialNum}-${row}-${col}`;
            html += `<div class="${cellClass}" id="${cellId}" data-row="${row}" data-col="${col}">${matrix[row][col]}</div>`;
        }
    }
    return html;
}

/**
 * 設置網格點擊處理器
 */
function setupGridClickHandlers(wrongPositions, trialNum, matrix) {
    const cells = document.querySelectorAll(`#grid-${trialNum} .word-cell`);
    
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            const row = parseInt(this.dataset.row);
            const col = parseInt(this.dataset.col);
            const clickedPos = [row, col];
            
            // 檢查是否點擊到錯字
            const isCorrect = wrongPositions.some(pos => pos[0] === clickedPos[0] && pos[1] === clickedPos[1]);
            
            // 計算反應時間（從 trial 開始到點擊的時間）
            const rt = currentTrialStartTime ? Date.now() - currentTrialStartTime : 0;
            
            // 標記點擊的格子
            this.classList.add('clicked');
            
            // 記錄資料
            jsPsychInstance.data.addDataToLastTrial({
                clicked_position: JSON.stringify(clickedPos),
                clicked_word: matrix[row][col],
                is_correct: isCorrect,
                rt: rt
            });
            
            // 結束當前 trial
            jsPsychInstance.finishTrial();
        });
    });
}

/**
 * 顯示實驗結果摘要
 */
function showResults(jsPsych) {
    // 取得所有試驗資料
    const data = jsPsych.data.get();
    
    // 過濾出正式實驗的 trials（有 trial 欄位的）
    const allTrials = data.values();
    const trialData = allTrials.filter(trial => trial.trial !== undefined && trial.rt !== undefined);
    
    // 計算統計資料
    let totalRT = 0;
    let correctCount = 0;
    let totalTrials = 0;
    
    trialData.forEach(trial => {
        if (trial.rt !== undefined && trial.rt > 0) {
            totalRT += trial.rt;
            totalTrials++;
        }
        if (trial.is_correct === true) {
            correctCount++;
        }
    });
    
    const avgRT = totalTrials > 0 ? Math.round(totalRT / totalTrials) : 0;
    const accuracy = trialData.length > 0 ? ((correctCount / trialData.length) * 100).toFixed(1) : 0;
    
    // 顯示結果頁
    document.getElementById('jspsych-experiment').innerHTML = `
        <div style="text-align: center; padding: 50px 20px;">
            <h1 style="color: #4CAF50; margin-bottom: 30px;">感謝您的參與！</h1>
            <div class="results-summary">
                <h2>實驗結果摘要</h2>
                <table>
                    <tr>
                        <td>完成試驗數</td>
                        <td>${trialData.length} / 10</td>
                    </tr>
                    <tr>
                        <td>平均反應時間</td>
                        <td>${avgRT} 毫秒</td>
                    </tr>
                    <tr>
                        <td>正確率</td>
                        <td>${accuracy}%</td>
                    </tr>
                    <tr>
                        <td>正確回答數</td>
                        <td>${correctCount} / ${trialData.length}</td>
                    </tr>
                </table>
                <p style="margin-top: 30px; color: #666; font-size: 14px;">
                    實驗已完成。感謝您的參與！
                </p>
            </div>
        </div>
    `;
}

