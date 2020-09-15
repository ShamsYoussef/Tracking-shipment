import { TrackShipment } from '../../API_data/serviceAPI';
import { SEND_TRACKING_NUMBER } from './types';

export const trackOrder = trackingNo => {
	return async dispatch => {
		try {
			const response = await TrackShipment(trackingNo);
			console.log(response);
		} catch (err) {
			console.log('error', err);
			throw err;
		}
	};
};

export const sendTrackingNumber = trackingNo => {
	return {
		type: SEND_TRACKING_NUMBER,
		trackingNo: trackingNo,
	};
};
