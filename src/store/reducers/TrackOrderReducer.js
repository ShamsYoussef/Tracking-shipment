import { FETCH_TRACKED_ORDER, SEND_TRACKING_NUMBER } from '../actions/types';

const initialState = {
	trackedOrder: [],
	trackingNumber: '',
};

const TrackOrderReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRACKED_ORDER:
			return {
				...state,
				trackedOrder: action.trackedOrder,
			};

		case SEND_TRACKING_NUMBER:
			return {
				...state,
				trackingNumber: action.trackingNo,
			};
		default:
			return state;
	}
};

export default TrackOrderReducer;
