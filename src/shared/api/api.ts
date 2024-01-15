import axios from 'axios';

export const $api = axios.create({
	baseURL: 'https://network-back.onrender.com/'
});
