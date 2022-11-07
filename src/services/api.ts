import axios from 'axios';

export const api = axios.create({
  baseURL: `http://${process.env.LOCALHOST}:3333`
})