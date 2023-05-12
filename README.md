## 技術構成

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://prisma.io/)
- [Supabase](https://supabase.com/)
- [Vercel](http://vercel.com/)
- [Tailwind](https://tailwindcss.com/)

## 開発環境構築
1. リポジトリを持ってくる
```
git clone git@github.com:hitoshi-w/nextjs777.git
```

2. 環境変数設定
.env.sampleと同じ階層に.envを作成し、以下を参考に設定
- [Prismaに関する環境変数](https://www.prisma.io/docs/reference/database-reference/connection-urls)
- [NextAuth.jsに関する環境変数](https://next-auth.js.org/configuration/options)
- [GitHubに関する環境変数](https://docs.github.com/ja/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)


3. Dockerfileより、イメージの作成
```
make build
```

4. コンテナを起動。
```
make up
```

5. Prisma と databaseの同期
```
make prisma-setup
```
http://localhost:3000 を開きます。

必要であれば、http://localhost:5050 でpgAdminを使用できます。

## ESLintとPrettierの設定
[Next.js ESLint documentation](https://nextjs.org/docs/pages/building-your-application/configuring/eslint) を参考に設定しています。


