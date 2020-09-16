const convertDay = currentDay => {
	console.log('currentDayyyyyyyyy', currentDay);
	const days = [
		'السبت',
		'الأحد',
		'الأثنين',
		'الثلاثاء',
		'الأربعاء',
		'الخميس',
		'الجمعة',
	];

	const matchDay = days.find((day, index) => currentDay === index);

	return matchDay;
};

export default convertDay;
