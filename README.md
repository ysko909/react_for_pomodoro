# docker_for_react_sample

## 概要

Reactプロジェクト用のDocker環境のサンプル。

## 利用手順

1. 当リポジトリをクローンする。あるいはzipでダウンロードする。
2. Visual Studio Codeを起動し、クローンした先のフォルダを開く。
3. vscodeのメニューから「Reopen in container」を選択する。コンテナのビルドが始まるため、しばらく放置する。
4. コンテナのビルドが終わったら、シェルを開き`npx create-react-app app_name`を実行する。`app_name`の部分は任意。
   - TypeScriptで作りたい場合は`--template typescript`のオプションをつける。
5. `cd app_name`を実行してフォルダを移動する。
6. `yarn start`を実行して、ブラウザで「`localhost:3000`」にアクセスする。Reactの画面が表示されれば成功。

## 注意点

当リポジトリをWindowsで利用しようとしたとき、ファイル`devcontainer.json`におけるフォルダ指定を書き換える必要があった。

```json
"dockerComposeFile": [
   "..\\docker-compose.yml", # ここの行
   "docker-compose.yml"
],
```

「1つ上のフォルダにある`docker-compose.yml`」を指している部分について、本来**スラッシュ1つ**`/`だった部分を**バックスラッシュ2つ**`\\`に変更してエスケープしている。macOSなど他のプラットフォームだと問題ないのだが、Windowsに関してのみこの部分がスラッシュ1つだとうまく解釈できずエラーになった。今はどうかわからないが・・・。
