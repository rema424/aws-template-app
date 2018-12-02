# aws-template-app

## Set up project

### Environment

- AWS
- Docker
- Visual Studio Code
- Node.js, 8.10.x

### Workspace and repository

```bash
mkdir my-app && cd $_
echo "# aws-template-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/rema424/aws-template-app.git
git push -u origin master
```

### TypeScript

```bash
# package.json
npm init -y

# .gitignore
touch .gitignore

# typescript
npm i -D typescript @types/node
npx tsc --init

# linter
npm i -D tslint tslint-microsoft-contrib
npx tslint --init

# formatter
npm i -D prettier tslint-plugin-prettier tslint-config-prettier
touch .prettierrc.yaml

# test
npm i -D jest ts-jest supertest @types/jest @types/supertest

# web framework
npm i express body-parser express-list-endpoints
npm i -D @types/express @types/body-parser

# aws
npm i aws-serverless-express
npm i -D aws-sdk @types/aws-lambda @types/aws-serverless-express
```

### Directories and files

```
mkdir src
touch src/app.ts src/server.ts
```

#### Docker

```
touch Dockerfile docker-compose.yaml .dockerignore
```

## Reference

### TypeScript and Express

- [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)
- [Hackathon Starter](https://github.com/sahat/hackathon-starter)
- [Node.js を TypeScript で書く](https://www.sambaiz.net/article/123/)
- [[Node.js] Express を TypeScript で書く - 環境整備まで](https://qiita.com/kuroneko8960/items/74347b6a58020f33b18d)
- [express-generator で生成したテンプレートプロジェクトを TypeScript 実装に置換](https://qiita.com/uwettie/items/2870050c266f89f0ed38)
- [Setting up Express with Typescript](https://codebrains.io/setting-up-express-with-typescript/)
- [Tutorial of RESTful APIs with Express.js and TypeScript](https://blog.morizyun.com/blog/typescript-express-tutorial-javascript-nodejs/index.html)
- [TypeScript 2 + Express + Node.js](https://brianflove.com/2016/11/08/typescript-2-express-node/)

### Test

- [How to test Express.js with Jest and Supertest](http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
- [Testing Typescript Api With Jest and Supertest](https://tutorialedge.net/typescript/testing-typescript-api-with-jest/)
- [Facebook 製 JavaScript テストツール Jest を使ってテストする ( Babel, TypeScript のサンプル付き )](https://tech.recruit-mp.co.jp/front-end/post-14752/)

### Linter and Formatter

- [TypeScript プロジェクトにコードフォーマッタ Prettier を導入する](https://qiita.com/akisx/items/4b90106c7faca4965852)
- [Prettier](https://prettier.io/docs/en/configuration.html)
- [ESLint 導入環境に prettier を追加して運用する](https://www.kken.io/posts/prettier-eslint/)
- [TypeScript のリンター（TSLint）の設置](https://qiita.com/Kitanotori/items/118a09db97dfd8d37b04)

### VScode

- [プロジェクトで使う VSCode 拡張機能の導入を推奨する方法](http://neos21.hatenablog.com/entry/2018/04/30/080000)

### Docker

- [Docker PostgreSQL イメージを利用する](https://qiita.com/kimullaa/items/70eaec61c02d2513e76c)
- [Dockerizing a Node.js / PostgreSQL App Backend](https://medium.com/@zbbergma/dockerizing-a-node-js-postgresql-app-backend-ac81750cf6df)
- [docker-compose(Docker for mac)で実践的な node.js 開発環境を作る](https://qiita.com/devalon/items/dd0fdce02156855b5df5)
- [Docker で必要十分な Nodejs+PostgreSQL の環境を作る方法](https://qiita.com/Fushihara/items/d86eb924b7eedb53910b)
- [1 ファイル・3 コマンドで実現！Docker でチーム全員の開発環境の構築を始めてみませんか？](https://nulab-inc.com/ja/blog/typetalk/docker-tutorial-local-environment-team/)
- [Dockerfile で日本語ロケールを設定する方法。およびロケールエラーの回避方法。](https://qiita.com/YuukiMiyoshi/items/f389ea366060537b5cd9)
- [CentOS 7 コンテナに消えない日本語ロケールを追加する](https://qiita.com/teruo-oshida/items/08cb84efc2b581b0a439)
- [docker で起動している PostgreSQL のタイムゾーンを設定する](https://qiita.com/reoring/items/9e87176d73675e5fdafa)

### Others

- [# CommonJS と ES6 の import/export で迷うなら](https://qiita.com/rooooomania/items/4c999d93ae745e9d8657)
- [npm module に typescript の型定義がない時に、とりあえずビルドが通るようにする](https://medium.com/@ryutamaki/npm-module-%E3%81%AB-typescript-%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%81%8C%E3%81%AA%E3%81%84%E6%99%82%E3%81%AB-%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E3%83%93%E3%83%AB%E3%83%89%E3%81%8C%E9%80%9A%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B-fcc090804b21)
