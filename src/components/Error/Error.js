import React from 'react';
import { useSelector } from 'react-redux';

const Error = ({ error }) => {
	const trackingNumber = useSelector(state => state.TrackOrder.trackingNumber);

	return (
		<div className='error-container'>
			<i className='fa fa-exclamation-circle'></i>
			<div>
				<h5>{trackingNumber}</h5>
				<h6>{error}</h6>
			</div>
		</div>
	);
};

export default Error;
