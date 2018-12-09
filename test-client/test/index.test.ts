// jest.mock('axios');
// import axios from 'axios';
// // tslint:disable-next-line:no-any
// (axios.get as any).mockResolvedValue({ data: { message: 'Mock response!!!' } });

jest.mock('axios');
import axios, { AxiosInstance } from 'axios';
// tslint:disable-next-line:no-any
const myAxios: jest.Mocked<AxiosInstance> = axios as any;
myAxios.get.mockResolvedValue({ data: { message: 'Mock response!!!' } });

import { main } from '../src/index';

describe('main test', () => {
  it('axios return mock value', async () => {
    const res = await main();
    expect(res.message).toBe('Mock response!!!');
  });
});
