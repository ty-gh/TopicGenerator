// アプリケーションのメインロジック

let lastTopicIndex = -1;

// ランダムな話題を取得する関数
function getRandomTopic() {
    if (topics.length === 0) {
        return "話題リストが空です";
    }

    if (topics.length === 1) {
        return topics[0];
    }

    // 前回と同じ話題が連続しないようにする
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * topics.length);
    } while (randomIndex === lastTopicIndex);

    lastTopicIndex = randomIndex;
    return topics[randomIndex];
}

// 話題を表示する関数
function displayTopic() {
    const topicDisplay = document.getElementById('topicDisplay');
    const topic = getRandomTopic();

    // アニメーション効果
    topicDisplay.classList.remove('active');
    topicDisplay.classList.add('empty');

    setTimeout(() => {
        topicDisplay.textContent = topic;
        topicDisplay.classList.remove('empty');
        topicDisplay.classList.add('active');
    }, 100);
}

// ボタンのイベントリスナーを設定
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', displayTopic);
});
