// Firebase設定の追加
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseを初期化
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// メモを保存する関数
function saveMemo() {
    const memoText = document.getElementById("memoText").value;

    // Firebaseデータベースにメモを保存
    const newMemoKey = database.ref().child('memos').push().key;
    database.ref('memos/' + newMemoKey).set({
        text: memoText
    });

    // 入力フィールドをクリア
    document.getElementById("memoText").value = '';
}

// メモを取得して表示する関数
function displayMemos() {
    const memoList = document.getElementById("memoList");

    // Firebaseデータベースからメモを取得
    database.ref('memos').on('value', (snapshot) => {
        memoList.innerHTML = ''; // リストをクリア
        snapshot.forEach((childSnapshot) => {
            const memo = childSnapshot.val();
            const li = document.createElement("li");
            li.textContent = memo.text;
            memoList.appendChild(li);
        });
    });
}

// ページ読み込み時にメモを表示
window.onload = function() {
    displayMemos();
};
