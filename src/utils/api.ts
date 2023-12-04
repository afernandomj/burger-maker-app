import { BURGER_API_BASE } from '../constants';
import HttpRequest from 'bm-minimal-fetch';

const http = HttpRequest.getInstance(BURGER_API_BASE);

export { http };
