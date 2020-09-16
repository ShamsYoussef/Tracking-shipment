import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trackOrder } from '../../store/actions/TrackOrderActions';
import { Spinner } from 'react-bootstrap';
import OrderReceipt from '../OrderReceipt/OrderReceipt';
import PackageDetails from '../PackageDetails/PackageDetails';
const TrackingShipment = () => {
	const [isLoading, setIsLoading] = useState(false);
	const trackingNumber = useSelector(state => state.TrackOrder.trackingNumber);
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);

	const [error, setError] = useState('');
	console.log(error);
	const dispatch = useDispatch();

	////////////// load tracked order ////////////////
	const fetchOrderDetails = async () => {
		setError('');
		try {
			await dispatch(trackOrder(trackingNumber));
		} catch (err) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		fetchOrderDetails().then(() => {
			setIsLoading(false);
		});
	}, [trackingNumber, dispatch]);

	if (isLoading) {
		return (
			<div className='loading-container'>
				<Spinner animation='grow' variant='danger' />
				<Spinner animation='grow' variant='danger' />
				<Spinner animation='grow' variant='danger' />
			</div>
		);
	}

	if (!isLoading && trackedOrder.length !== 0) {
		return (
			<div className='track-container'>
				<OrderReceipt></OrderReceipt>
				<PackageDetails></PackageDetails>
			</div>
		);
	}

	return <div>hiii</div>;
};

export default TrackingShipment;
