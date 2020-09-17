import React, { useState } from 'react';

const Search = () => {
	const [trackingNo, setTrackingNo] = useState('');

	return (
		<div className='search-container'>
			<div className='search-header'>تتبع شحنتك</div>
			<div className='search-label'>ادخل رقم الشحنة و تابع شحنتك أول بأول</div>

			<form className='form-container' action='/track'>
				<button type='submit' id='submit-button' disabled={trackingNo === ''}>
					<i className='fa fa-search'></i>
				</button>
				<input
					onChange={val => setTrackingNo(val.target.value)}
					value={trackingNo}
					type='text'
					placeholder='رقم الشحنة'
					id='track-number'
					name='trackNo'
				/>
			</form>
		</div>
	);
};

export default Search;
