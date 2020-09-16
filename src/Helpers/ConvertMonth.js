const convertMonth = currentMonth => {
	const months = [
		{ en: 'January', ar: 'يناير' },
		{ en: 'February', ar: 'فبراير' },
		{ en: 'March', ar: 'مارس' },
		{ en: 'April', ar: 'إبريل' },
		{ en: 'May', ar: 'مايو' },
		{ en: 'June', ar: 'يونيه' },
		{ en: 'July', ar: 'يوليو' },
		{ en: 'August', ar: 'أغسطس' },
		{ en: 'September', ar: 'سبتمبر' },
		{ en: 'October', ar: 'أكتوبر' },
		{ en: 'November', ar: 'نوفمبر' },
		{ en: 'December', ar: 'ديسمبر' },
	];

	const matchMonth = months.find(month => month.en === currentMonth);

	return matchMonth.ar;
};

export default convertMonth;
