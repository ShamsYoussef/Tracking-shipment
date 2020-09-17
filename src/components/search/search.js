import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendTrackingNumber } from '../../store/actions/TrackOrderActions';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [trackingNo, setTrackingNo] = useState('');
	const search = () => {
		dispatch(sendTrackingNumber(trackingNo));
		history.push('/track');
		setTrackingNo('');
	};

	return (
		<div className='search-container'>
			<div className='search-header'>تتبع شحنتك</div>
			<div className='search-label'>ادخل رقم الشحنة و تابع شحنتك أول بأول</div>

			<div className='form-container'>
				<button
					id='submit-button'
					onClick={search}
					disabled={trackingNo === ''}>
					<i className='fa fa-search'></i>
				</button>
				<input
					onChange={val => setTrackingNo(val.target.value)}
					value={trackingNo}
					type='text'
					placeholder='رقم الشحنة'
					id='track-number'
					name='track_number'
				/>
			</div>
		</div>
	);
};

export default Search;
