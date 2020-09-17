import { TrackShipment } from '../../API_data/serviceAPI';
import { SEND_TRACKING_NUMBER, FETCH_TRACKED_ORDER } from './types';
import TrackedOrder from '../../components/TrackingShipment/OrderModel';
import moment from 'moment';
import convertDay from '../../Helpers/ConvertDay';
import convertMonth from '../../Helpers/ConvertMonth';
import translateStatus from '../../Helpers/translateStatus';

export const trackOrder = trackingNo => {
	return async dispatch => {
		try {
			const response = await TrackShipment(trackingNo);
			const dataDetails = response.data;
			console.log('dataDetails', dataDetails);
			const events = [];

			dataDetails.TransitEvents.map(status => {
				if (
					status.state === 'OUT_FOR_DELIVERY' ||
					status.state === 'TICKET_CREATED' ||
					status.state === 'PACKAGE_RECEIVED' ||
					status.state === 'DELIVERED' ||
					status.state === 'DELIVERED_TO_SENDER' ||
					status.state === 'WAITING_FOR_CUSTOMER_ACTION'
				) {
					events.push({
						state: translateStatus(status.state),
						date: moment(status.timestamp).format('YYYY-MM-DD'),
						time: moment(status.timestamp).format('h:mm a'),
						hub: status.hub,
					});
				}
				console.log('status', status);
			});

			const loadedTrackedOrder = new TrackedOrder(
				dataDetails.TrackingNumber,
				{
					year: moment(dataDetails.PromisedDate).format('YYYY'),
					month: convertMonth(moment(dataDetails.PromisedDate).format('MMMM')),
					day: moment(dataDetails.PromisedDate).format('DD'),
				},

				translateStatus(dataDetails.CurrentStatus.state),
				{
					date: moment(dataDetails.CurrentStatus.timestamp).format(
						'YYYY-MM-DD'
					),
					time: moment(dataDetails.CurrentStatus.timestamp).format('h:mm a'),
					day: convertDay(
						new Date(dataDetails.CurrentStatus.timestamp).getDay()
					),
				},
				events
			);

			console.log('loadedTrackedOrder', loadedTrackedOrder);
			if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			dispatch({
				type: FETCH_TRACKED_ORDER,
				trackedOrder: loadedTrackedOrder,
			});
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
