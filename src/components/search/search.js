import React from 'react';

const Search = () => {
	return (
		<div className='search-container'>
			<div className='search-header'>تتبع شحنتك</div>
			<div className='search-label'>ادخل رقم الشحنة و تابع شحنتك أول بأول</div>

			<div className='form-container'>
				<button id='submit-button' type='submit'>
					<i class='fa fa-search'></i>
				</button>
				<input
					type='text'
					class='pop_text'
					placeholder='رقم الشحنة'
					id='track-number'
					name='track_number'
				/>
			</div>
		</div>
	);
};

export default Search;
