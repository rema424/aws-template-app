import config from 'config';
import * as Path from 'path';
import * as Log4js from 'log4js';

class Logger {
  private logger: Log4js.Logger;

  constructor() {
    // 設定ファイルのあるディレクトリのパスを取得する
    // configディレクトリはプロジェクトルート（package.jsonと同じ階層）に配置するのが推奨
    // './../../config'とパスを直書きすると動作しないためこのようにして取得する
    const configFilePath: string = Path.join(__dirname, '/../../config');

    // configのlog4jsプロパティを取得する
    const configure: Log4js.Configuration = config.util.loadFileConfigs(configFilePath).log4js;
    console.log('message', config.util.loadFileConfigs(configFilePath).message);

    // loggerを初期化する
    this.logger = Log4js.configure(configure).getLogger('application');
  }

  public trace(message: string) {
    this.logger.trace(message);
  }

  public debug(message: string) {
    this.logger.debug(message);
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public warn(message: string) {
    this.logger.warn(message);
  }

  public error(message: string) {
    this.logger.error(message);
  }

  public fatal(message: string) {
    this.logger.fatal(message);
  }
}

// クラスではなくインスタンスをエクスポートする
export const logger: Logger = new Logger();
