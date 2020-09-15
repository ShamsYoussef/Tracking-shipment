import { LOGIN_SUCCESS, SEND_TRACKING_NUMBER } from '../actions/types';

const initialState = {
	trackedOrder: [],
	trackingNumber: '',
};

const TrackOrderReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
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
