import Axios from 'axios';
import { config } from '../api-config';

const API_URL = config.API_URL;
let axios;

axios = Axios.create({
	baseURL: `${API_URL}/shipments/`,
	headers: {
		responseType: 'json',
		'Access-Control-Allow-Origin': '*',
	},
});

export const TrackShipment = trackingNo => {
	return axios.get(
		`track/${trackingNo}`
	);
};
