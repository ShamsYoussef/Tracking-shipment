const translateHub = currentHub => {
	debugger;
	const hubs = [
		{ en: 'Mohandseen Hub', ar: 'فرع المهندسين' },
		{ en: 'Tanta Hub', ar: 'فرع طنطا' },
		{ en: 'Bosta HQ', ar: 'الفرع الرئيسي' },
		{ en: 'Katamya Hub', ar: 'فرع القطامية' },
		{ en: 'Alexandria Hub', ar: 'فرع الأسكندرية' },
		{ en: 'Cairo Sorting Facility', ar: 'مكتب بريد القاهرة' },
	];

	const matchHub = hubs.find(hub => hub.en === currentHub);

	return matchHub.ar;
};

export default translateHub;
