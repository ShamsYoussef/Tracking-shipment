import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trackOrder } from '../../store/actions/TrackOrderActions';
import Loading from '../Loading/Loading';
import OrderReceipt from '../OrderReceipt/OrderReceipt';
import PackageDetails from '../PackageDetails/PackageDetails';
import qs from 'qs';
import { useHistory } from 'react-router-dom';

import Error from '../Error/Error';

// to get tracking number from url params
const TrackingShipment = props => {
	const trackingNumber = qs.parse(props.location.search, {
		ignoreQueryPrefix: true,
	}).trackNo;

	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);

	const [error, setError] = useState('');
	const dispatch = useDispatch();

	////////////// load tracked order ////////////////
	const fetchOrderDetails = async () => {
		setError('');
		try {
			await dispatch(trackOrder(trackingNumber));
		} catch (err) {
			setError('Something went wrong. Please try again');
			if (err.response.status === 404) {
				setError('No shipment with given tracking number found');
			} else {
				setError('Something went wrong. Please try again');
			}
		}
	};

	useEffect(() => {
		if (!trackingNumber) {
			history.push('/');
		} else {
			setIsLoading(true);
			fetchOrderDetails().then(() => {
				setIsLoading(false);
			});
		}
	}, [trackingNumber, dispatch]);

	/////// if fetch order still loading/////////
	if (isLoading) {
		return <Loading></Loading>;
	}

	///////if error catched /////////
	if (error !== '') {
		return (
			<div className='error-parent'>
				<Error error={error} trackingNumber={trackingNumber}></Error>
			</div>
		);
	}

	///////if not loading and data found /////////
	if (!isLoading && trackedOrder.length !== 0) {
		return (
			<div className='track-container'>
				<OrderReceipt></OrderReceipt>
				<PackageDetails></PackageDetails>
			</div>
		);
	}

	return <div></div>;
};

export default TrackingShipment;
