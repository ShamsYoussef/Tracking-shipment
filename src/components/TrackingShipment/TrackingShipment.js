import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trackOrder } from '../../store/actions/TrackOrderActions';

const TrackingShipment = () => {
	const TrackedOrder = useSelector(state => state.TrackOrder);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		////////////// load tracked order ////////////////
		const fetchOrderDetails = async () => {
			try {
				await dispatch(trackOrder(TrackedOrder.trackingNumber)).then(() => {
					setIsLoading(false);
				});
			} catch (err) {
				console.log(err);
			}
		};
		fetchOrderDetails();
	}, [TrackedOrder.trackingNumber, dispatch]);

	return <div>Tracking page </div>;
};

export default TrackingShipment;
