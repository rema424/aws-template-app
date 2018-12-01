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

# lint
npm i -D tslint tslint-microsoft-contrib
npx tslint --init

# test
npm i -D jest ts-jest supertest @types/jest @types/supertest

# web framework
npm i express express-list-endpoints
npm i -D @types/express

# aws
npm i aws-serverless-express
npm i -D aws-sdk @types/aws-lambda @types/aws-serverless-express
```

### Directories and files

```
mkdir
```

## Reference

- [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)
- [Hackathon Starter](https://github.com/sahat/hackathon-starter)
- [Node.js を TypeScript で書く](https://www.sambaiz.net/article/123/)
- [[Node.js] Express を TypeScript で書く - 環境整備まで](https://qiita.com/kuroneko8960/items/74347b6a58020f33b18d)
- [How to test Express.js with Jest and Supertest](http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
- [Testing Typescript Api With Jest and Supertest](https://tutorialedge.net/typescript/testing-typescript-api-with-jest/)
- [Facebook 製 JavaScript テストツール Jest を使ってテストする ( Babel, TypeScript のサンプル付き )](https://tech.recruit-mp.co.jp/front-end/post-14752/)
