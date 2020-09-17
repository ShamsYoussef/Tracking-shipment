import React from 'react';

import supportImage from '../../assets/support.jpg';

const PackageAddress = () => {
	return (
		<div>
			<p className='headerLabel'> عنوان التسليم</p>
			<div className='address-details'>
				<div className='address-container mb-2'>
					امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك
					٣٣...القاهرة
				</div>
				<div
					className='support-container row '
					style={{ backgroundColor: '#FFF' }}>
					<div>
						<img style={{ width: '100px' }} src={supportImage} alt=''></img>
					</div>
					<div className='supportContainer'>
						<div>!هل يوجد مشكلة في شحنتك؟</div>
						<button className='supportButton'>إبلاغ عن مشكلة</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackageAddress;
