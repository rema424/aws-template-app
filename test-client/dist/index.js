"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws4_1 = __importDefault(require("aws4"));
const axios_1 = __importDefault(require("axios"));
function handler() {
    return __awaiter(this, void 0, void 0, function* () {
        // Lambdaの環境変数からロールのクレデンシャルを取得する
        const credentials = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            sessionToken: process.env.AWS_SESSION_TOKEN,
        };
        console.log('credentials: ', JSON.stringify(credentials, null, 2));
        // リクエストに必要な情報を定義する
        const apiGatewayHost = 'xxxxxxxx.execute-api.ap-northeast-1.amazonaws.com';
        const method = 'GET';
        const stage = '/Dev';
        const path = `${stage}/iam`;
        const data = { a: 'bbbb' };
        const body = JSON.stringify(data);
        const service = 'execute-api';
        const region = 'ap-northeast-1';
        const url = `https://${apiGatewayHost}${path}`;
        const headers = { 'content-type': 'application/json' };
        const options = { host: apiGatewayHost, method, path, body, service, region, url, data, headers };
        // 署名を作成する
        // 引数で渡したoptionのheadersにIAM署名が追加されたオブジェクトが返却される
        const signedOptions = aws4_1.default.sign(options, credentials);
        // axiosのリクエストに必要のないheader情報は削除する
        delete signedOptions.headers.Host;
        console.log('signedOptions: ', JSON.stringify(signedOptions, null, 2));
        try {
            const res = yield axios_1.default.request(signedOptions);
            console.log('data: ', res.data);
            return data;
        }
        catch (err) {
            console.log('err: ', err);
            throw new Error(err.message);
        }
    });
}
exports.handler = handler;
