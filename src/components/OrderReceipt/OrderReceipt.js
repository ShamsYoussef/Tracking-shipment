import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProgressSteper from '../ProgressSteper/ProgressSteper';
const OrderReceipt = () => {
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);
	return (
		<div className='receipt-container '>
			<Container className='upper-section'>
				<Row className='mt-3' style={{ direction: 'rtl', textAlign: 'right' }}>
					<Col md={3} xs={6}>
						<p>
							رقم الشحنة <span> {trackedOrder.trackingNumber}</span>
						</p>
						<p
							className='label'
							style={{ color: trackedOrder.currentStatus.color }}>
							{trackedOrder.currentStatus.ar}{' '}
						</p>
					</Col>
					<Col md={3} xs={6}>
						<p>أخر تحديث</p>
						<p className='label'>
							{trackedOrder.lastUpdated.day} | {trackedOrder.lastUpdated.date} |{' '}
							{trackedOrder.lastUpdated.time}
						</p>
					</Col>
					<Col md={3} xs={6}>
						<p>اسم التاجر</p>
						<p className='label'>SOUQ.com</p>
					</Col>
					<Col md={3} xs={6}>
						<p>موعد التسليم خلال</p>
						<p className='label'>
							{trackedOrder.promisedDate.day} {trackedOrder.promisedDate.month}{' '}
							{trackedOrder.promisedDate.year}
						</p>
					</Col>
				</Row>
			</Container>
			<Container className='lower-section progressBar'>
				<div className='statuses-container'>
					<div>تم إنشاء الشحنة</div>
					<div>تم استلام الشحنة من التاجر</div>
					<div className='out-for-delivery'>
						<div>الشحنة خرجت للتسليم</div>
						<div style={{ color: trackedOrder.currentStatus.color }}>
							{trackedOrder.currentStatus.reason}
						</div>
					</div>
					<div>تم التسليم</div>
				</div>
				<ProgressSteper></ProgressSteper>
			</Container>
		</div>
	);
};

export default OrderReceipt;
