# これは何？
- あるディレクトリの中のjpgもしくはpngファイルをすべてwebpに変換できるNode.jsのプログラムです。
- jpgは非可逆圧縮、pngは可逆圧縮するように設定してます。
- 圧縮にはNode.jsの`sharp`というライブラリを使ってます。

# 使い方
1. `npm install`を実行する。
2. `/images`フォルダの中に、圧縮したい画像を入れる。（フォルダが含まれていても再帰的に検索して圧縮します）
3. `npm start`を実行する。（実行すると、圧縮前の画像はすべて削除されます）
5. おわり