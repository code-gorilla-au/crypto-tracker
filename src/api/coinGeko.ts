import { Currency } from '@/lib/coinGeko';
import axios, { AxiosResponse } from 'axios';

export default function getCurrencies(): Promise<AxiosResponse<Currency>> {
  return axios.get(`${process.env.VUE_APP_CRYPTO_API}/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
}
