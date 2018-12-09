import aws4 from 'aws4';
import axios, { AxiosAdapter } from 'axios';

export async function handler() {
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
  const signedOptions = aws4.sign(options, credentials);
  // axiosのリクエストに必要のないheader情報は削除する
  delete signedOptions.headers.Host;

  console.log('signedOptions: ', JSON.stringify(signedOptions, null, 2));

  try {
    const res = await axios.request(signedOptions);
    console.log('data: ', res.data);
    return data;
  } catch (err) {
    console.log('err: ', err);
    throw new Error(err.message);
  }
}
