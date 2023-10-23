import { BASE_URL } from '@/constants/common';
import axios from 'axios';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

axios.intercept.response(200 != exception());
