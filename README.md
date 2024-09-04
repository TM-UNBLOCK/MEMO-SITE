# MEMO-SITE
This is a simple memo site. Programming using Firebase.

Firebase console configuration
Create a Firebase project: Access the Firebase console and create a project.
Add a web app: From the project settings screen, press the "Add app" button and select the web app.
Firebase SDK configuration: After adding the app, copy the Firebase configuration code that appears and paste it into firebaseConfig above.
Steps to save and retrieve notes
Saving notes: When a user enters a note in a form and presses the Save Memo button, the saveMemo function is called and the note is saved to Firebase's real-time database.
Retrieve notes: When the page loads, the displayMemos function is executed to retrieve all notes from the Firebase database and display them on the screen.

Firebaseコンソールの設定
Firebaseプロジェクトを作成: Firebaseコンソールにアクセスし、プロジェクトを作成します。
Webアプリを追加: プロジェクトの設定画面から、「アプリを追加」ボタンを押し、Webアプリを選択します。
Firebase SDKの設定: アプリを追加した後、表示されるFirebase設定コードをコピーして、上記のfirebaseConfigに貼り付けます。
メモを保存・取得する手順
メモの保存: ユーザーがフォームにメモを入力し、「Save Memo」ボタンを押すと、saveMemo関数が呼び出され、Firebaseのリアルタイムデータベースにメモが保存されます。
メモの取得: ページが読み込まれるときにdisplayMemos関数が実行され、Firebaseデータベースからすべてのメモが取得され、画面に表示されます。
