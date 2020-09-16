const translateStatus = currentState => {
	const statuses = [
		{
			en: 'TICKET_CREATED',
			ar: 'تم إنشاء الشحنه',
			color: 'green',
			progress: 0,
		},
		{
			en: 'PACKAGE_RECEIVED',
			ar: 'تم استلام الشحنة من التاجر',
			color: 'green',
			progress: 25,
		},
		{
			en: 'OUT_FOR_DELIVERY',
			ar: 'الشحنة خرجت للتسليم',
			color: 'green',
			progress: 75,
		},

		{
			en: 'WAITING_FOR_CUSTOMER_ACTION',
			ar: 'لم يتم التسليم',
			color: 'yellow',
			progress: 75,
			reason: 'تأجيل - العميل طلب التاجيل ليوم اخر',
		},

		{
			en: 'DELIVERED',
			ar: 'تم تسليم الشحنة',
			color: 'green',
			progress: 100,
		},
		{
			en: 'DELIVERED_TO_SENDER',
			ar: 'تم إرجعاها للتاجر',
			color: 'red',
			progress: 0,
		},
	];

	const matchStatus = statuses.find(state => state.en === currentState);

	return matchStatus;
};

export default translateStatus;
