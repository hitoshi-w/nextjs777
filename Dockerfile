FROM node:18-alpine

# コンテナ内の作業ディレクトリ
WORKDIR /app

# ホストのpackage.jsonとpackage-lock.jsonをコンテナにコピー
# ビルドキャッシュの観点から、ソースコードをコピーするレイヤーと別にしておきます。
# ソースコードが変更された場合でも、package.jsonが変更されていない場合は、先にインストールしたライブラリを再利用することでビルド時間を短縮する
COPY package.json package-lock.json ./
RUN npm ci

# ホストのソースコードをコンテナにコピー
COPY . .

# ポート3000番を公開する意図があるので、EXPOSEを指定しておく
EXPOSE 3000

# コンテナ起動時（docker run）に実行するデフォルトコマンドであり、dockerイメージ作成時（docker build）には実行されません。
CMD ["npm", "run", "dev"]